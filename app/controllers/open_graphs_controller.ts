// import type { HttpContext } from '@adonisjs/core/http'

import OpenGraph from '#models/open_graph'
import TextLine from '#models/text_line'
import { UrlMakerService } from '#services/url_maker_service'
import { openGraphsValidator } from '#validators/graph'
import { HttpContext } from '@adonisjs/core/http'
import { textValidator } from '#validators/text'

export default class OpenGraphsController {
  async index({ view, auth }: HttpContext) {
    const user = auth.user
    if (!user) {
      return view.render('pages/erreurs/403')
    }
    const openGraphs = await OpenGraph.query().orderBy('name').where('userId', user.id)

    return view.render('pages/openGraph/index', { openGraphs, user })
  }

  async create({ view }: HttpContext) {
    return view.render('pages/openGraph/create', {})
  }

  async store({ request, response, auth, session }: HttpContext) {
    if (!auth.user) {
      return response.unauthorized('You must be logged in to create an OpenGraph entry.')
    }

    const validatedData = await request.validateUsing(openGraphsValidator)

    await OpenGraph.create({
      ...validatedData,
      userId: auth.user.id,
      prefixUrl: UrlMakerService.urlPrefix(validatedData.ogUrl),
      suffixUrl: UrlMakerService.urlSuffix(validatedData.ogUrl),
    })
    session.flash(
      'success',
      'OpenGraph successfully created! Check your OpenGraphs to edit and add text to them !'
    )

    return response.redirect().toRoute('openGraphs.index')
  }

  async show({ view, params }: HttpContext) {
    const openGraph = await OpenGraph.query()
      .where('id', params.id)
      .preload('textline') // Charge les TextLine associés
      .firstOrFail()
    return view.render('pages/openGraph/edit', { openGraph })
  }

  async edit({ response, session, request, params }: HttpContext) {
    const openGraph = await OpenGraph.findOrFail(params.id)
    const validatedData = await request.validateUsing(textValidator)
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

  async destroy({ response, params }: HttpContext) {
    const openGraph = await OpenGraph.findOrFail(params.id)

    await openGraph.delete()

    return response.redirect().back()
  }

  async destroyTextLine({ response, params, session }: HttpContext) {
    try {
      // Récupérer la TextLine avec son OpenGraph associé
      const textLine = await TextLine.query()
        .where('id', params.id)
        .preload('openGraph') // Charge l'OpenGraph lié
        .firstOrFail()

      // Vérifier si l'OpenGraph existe bien (préchargé via preload)
      const openGraph = textLine.openGraph
      if (!openGraph) {
        session.flash('error', 'Associated OpenGraph not found.')
        return response.redirect().back()
      }

      // Mettre à jour l'ogUrl de l'OpenGraph sans la TextLine supprimée
      const newOgUrl = await UrlMakerService.removeTextLineFromUrl(openGraph, textLine)
      openGraph.merge({ ogUrl: newOgUrl })
      await openGraph.save()

      // Supprimer la TextLine
      await textLine.delete()

      // Message de succès
      session.flash('success', 'TextLine successfully deleted!')
    } catch (error) {
      // Gestion des erreurs
      console.error(error)
      session.flash('error', 'An error occurred while deleting the TextLine.')
    }

    // Redirection vers la page précédente
    return response.redirect().back()
  }

  async textlineIndex({ view, params }: HttpContext) {
    const openGraph = await OpenGraph.query()
      .where('id', params.id)
      .preload('textline') // Charge les TextLine associés
      .firstOrFail()

    return view.render('pages/textline/index', { openGraph })
  }

  // async store({ request, response, auth }: HttpContext) {
  //   const { textline, ...data } = await request.validateUsing(openGraphsValidator)
  //   if (auth.user) {
  //     data.userId = auth.user.id
  //   }
  //   await db.transaction(async (trx) => {
  //     const opengraph = await OpenGraph.create(data, { client: trx })
  //     await OpenGraphService.syncTextline(opengraph, textline)
  //   })
  //   return response.redirect().toRoute('openGraphs.create')
  // }
}
