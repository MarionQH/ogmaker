// import type { HttpContext } from '@adonisjs/core/http'

import OpenGraph from '#models/open_graph'
import { UrlMakerService } from '#services/url_maker_service'
import { openGraphsValidator } from '#validators/graph'
import { HttpContext } from '@adonisjs/core/http'

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

  async store({ request, response, auth }: HttpContext) {
    if (!auth.user) {
      return response.unauthorized('You must be logged in to create an OpenGraph entry.')
    }

    // Validez les données d'entrée
    const validatedData = await request.validateUsing(openGraphsValidator)

    // Créez l'entrée OpenGraph sans passer par une variable intermédiaire "data"
    await OpenGraph.create({
      ...validatedData,
      userId: auth.user.id, // Associez l'utilisateur connecté
      ogUrl: await UrlMakerService.urlMakerWithoutText(validatedData), // Générez l'ogUrl
    })

    // Redirigez l'utilisateur après succès
    return response.redirect().toRoute('openGraphs.create')
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
