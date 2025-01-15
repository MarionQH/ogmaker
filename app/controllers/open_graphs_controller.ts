// import type { HttpContext } from '@adonisjs/core/http'

import OpenGraph from '#models/open_graph'
import { OpenGraphService } from '#services/open_graph_service'
import { openGraphsValidator } from '#validators/graph'
import { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

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
    const { textline, ...data } = await request.validateUsing(openGraphsValidator)
    if (auth.user) {
      data.userId = auth.user.id
    }
    await db.transaction(async (trx) => {
      const opengraph = await OpenGraph.create(data, { client: trx })
      await OpenGraphService.syncTextline(opengraph, textline)
    })
    return response.redirect().toRoute('openGraphs.create')
  }
}
