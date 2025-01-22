import OpenGraph from '#models/open_graph'
import TextLine from '#models/text_line'
import { UrlMakerService } from '#services/url_maker_service'
import { textValidator } from '#validators/text'
import { HttpContext } from '@adonisjs/core/http'

export default class TextLinesController {
  async show({ view, params }: HttpContext) {
    const openGraph = await OpenGraph.query()
      .where('id', params.id)
      .preload('textline')
      .firstOrFail()

    openGraph.textline.forEach((textline) => {
      textline.text = UrlMakerService.replacePercent20WithSpace(textline.text)
    })
    return view.render('pages/textline/create', { openGraph })
  }

  async create({ request, response, auth, session, params }: HttpContext) {
    if (!auth.user) {
      return response.unauthorized('You must be logged in to create textlines.')
    }

    const validatedData = await request.validateUsing(textValidator, {
      meta: { userId: auth.user.id },
    })

    const openGraph = await OpenGraph.findOrFail(params.id)

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

    return view.render('pages/textline/edit', { textLine, openGraph })
  }

  async update({ request, response, params, session }: HttpContext) {
    const validatedData = await request.validateUsing(textValidator)
    const textLine = await TextLine.findOrFail(params.id)

    textLine.merge({
      ...validatedData,
      text: UrlMakerService.replaceSpaces(validatedData.text),
      textColor: UrlMakerService.hexToRgb(validatedData.textColor),
    })
    await textLine.save()

    const openGraph = await OpenGraph.findOrFail(textLine.openGraphId)
    openGraph.ogUrl = await UrlMakerService.updateTextLineInUrl(openGraph, textLine)
    await openGraph.save()

    session.flash('success', 'Textline successfully updated!')
    return response.redirect().toRoute('textline.show', { id: textLine.openGraphId })
  }

  async destroyTextLine({ response, params, session }: HttpContext) {
    try {
      const textLine = await TextLine.query()
        .where('id', params.id)
        .preload('openGraph')
        .firstOrFail()

      const openGraph = textLine.openGraph
      if (!openGraph) {
        session.flash('error', 'Associated OpenGraph not found.')
        return response.redirect().back()
      }
      const newOgUrl = await UrlMakerService.removeTextLineFromUrl(openGraph, textLine)
      openGraph.merge({ ogUrl: newOgUrl })
      await openGraph.save()

      await textLine.delete()
      session.flash('success', 'TextLine successfully deleted!')
    } catch (error) {
      console.error(error)
      session.flash('error', 'An error occurred while deleting the TextLine.')
    }

    return response.redirect().back()
  }
}
