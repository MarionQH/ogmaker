import OpenGraph from '#models/open_graph'
import TextLine from '#models/text_line'
import { UrlMakerService } from '#services/url_maker_service'
import { textValidator } from '#validators/text'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'
import { log } from 'node:console'

export default class TextLinesController {
  async show({ view, params }: HttpContext) {
    const openGraph = await OpenGraph.query()
      .where('id', params.id)
      .preload('textline')
      .firstOrFail()

    openGraph.textline.forEach((textline) => {
      textline.text = UrlMakerService.replacePercent20WithSpace(textline.text)
      textline.textPolice = UrlMakerService.replacePercent20WithSpace(textline.textPolice)
    })
    return view.render('pages/textline/create', { openGraph })
  }

  async create({ request, response, session, params }: HttpContext) {
    const API_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBicTt2n0zylKvLZ04aMAIguZFF5YY1ZSw`
    const results = await fetch(API_URL)
    if (!results.ok) {
      throw new Error('Erreur lors de la récupération des polices.')
    }
    type GoogleFontsApiResponse = {
      items: {
        family: string
        variants: string[]
        subsets: string[]
        category: string
      }[]
    }
    const data = (await response.json()) as GoogleFontsApiResponse
    const fontFamilies = data.items.map((item) => item.family)

    console.log(fontFamilies)

    const openGraph = await OpenGraph.findOrFail(params.id)
    const validatedData = await request.validateUsing(textValidator)
    try {
      await TextLine.create({
        ...validatedData,
        openGraphId: openGraph.id,
        textColor: UrlMakerService.hexToRgb(validatedData.textColor),
        text: UrlMakerService.replaceSpaces(validatedData.text),
      })
      const newOgUrl = await UrlMakerService.urlMaker(openGraph)

      openGraph.merge({ ogUrl: newOgUrl })

      await openGraph.save()

      session.flash('success', 'OpenGraph successfully modified !')
    } catch (error) {
      console.error(error)
      session.flash('error', 'An error occurred while created the textline')
    }
    return response.redirect().back()
  }

  async edit({ view, params }: HttpContext) {
    const textLine = await TextLine.findOrFail(params.id)
    const openGraph = await OpenGraph.query()
      .where('id', textLine.openGraphId)
      .preload('textline')
      .firstOrFail()

    openGraph.textline.forEach((textline) => {
      textline.text = UrlMakerService.replacePercent20WithSpace(textline.text)
    })

    textLine.text = UrlMakerService.replacePercent20WithSpace(textLine.text)
    textLine.textPolice = UrlMakerService.replacePercent20WithSpace(textLine.textPolice)
    textLine.textColor = UrlMakerService.rgbToHex(textLine.textColor)

    return view.render('pages/textline/edit', { textLine, openGraph })
  }

  async update({ request, response, params, session }: HttpContext) {
    const validatedData = await request.validateUsing(textValidator)
    const textLine = await TextLine.findOrFail(params.id)
    const trx = await db.transaction()
    try {
      textLine.useTransaction(trx).merge({
        ...validatedData,
        text: UrlMakerService.replaceSpaces(validatedData.text),
        textColor: UrlMakerService.hexToRgb(validatedData.textColor),
      })
      await textLine.useTransaction(trx).save()

      const openGraph = await OpenGraph.findOrFail(textLine.openGraphId)
      openGraph.ogUrl = await UrlMakerService.updateTextLineInUrl(openGraph, textLine)
      await openGraph.useTransaction(trx).save()

      await trx.commit()
      session.flash('success', 'Textline successfully updated!')
    } catch (error) {
      await trx.rollback()
      console.error(error)
      session.flash('error', 'An error occurred while updated the TextLine.')
    }
    return response.redirect().toRoute('textline.show', { id: textLine.openGraphId })
  }

  async destroyTextLine({ response, params, session }: HttpContext) {
    const trx = await db.transaction()
    try {
      const textLine = await TextLine.query()
        .where('id', params.id)
        .preload('openGraph')
        .firstOrFail()

      const openGraph = textLine.openGraph
      if (!openGraph) {
        session.flash('error', 'Associated OpenGraph not found.')
        await trx.rollback()
        return response.redirect().back()
      }
      const newOgUrl = await UrlMakerService.removeTextLineFromUrl(openGraph, textLine)
      openGraph.merge({ ogUrl: newOgUrl })
      await openGraph.useTransaction(trx).save()

      await textLine.useTransaction(trx).delete()
      await trx.commit()
      session.flash('success', 'TextLine successfully deleted!')
    } catch (error) {
      await trx.rollback()
      console.error(error)
      session.flash('error', 'An error occurred while deleting the TextLine.')
    }

    return response.redirect().back()
  }

  async destroyAllTextLines({ response, params, session }: HttpContext) {
    try {
      const openGraph = await OpenGraph.query()
        .where('id', params.id)
        .preload('textline')
        .firstOrFail()

      const textLines = openGraph.textline
      if (textLines.length === 0) {
        session.flash('error', 'No text lines found for this OpenGraph.')
        return response.redirect().back()
      }

      await TextLine.query().where('open_graph_id', openGraph.id).delete()

      const newOgUrl = await UrlMakerService.urlMakerWithoutText(openGraph)
      openGraph.merge({ ogUrl: newOgUrl })
      await openGraph.save()

      session.flash('success', 'All text lines for the OpenGraph have been successfully deleted!')
    } catch (error) {
      console.error(error)
      session.flash('error', 'An error occurred while deleting the text lines for this OpenGraph.')
    }

    return response.redirect().back()
  }
}
