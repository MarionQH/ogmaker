// import type { HttpContext } from '@adonisjs/core/http'

import OpenGraph from '#models/open_graph'
import { openGraphsValidator } from '#validators/graph'
import { HttpContext } from '@adonisjs/core/http'

export default class OpenGraphsController {
  async index({ view, auth }: HttpContext) {
    const user = auth.user
    if (!user) {
      return view.render('pages/erreurs/403')
    }
    const openGraphs = await OpenGraph.query().orderBy('name').where('userId', user.id)

    return view.render('pages/openGraph/index', { openGraphs })
  }

  async create({ view }: HttpContext) {
    return view.render('pages/openGraph/create', {})
  }

  async store({ request, response }: HttpContext) {
    const { ...data } = await request.validateUsing(openGraphsValidator)
    console.log('first itteration -----------------------------------', data)
    await OpenGraph.create(data)
    console.log('second itteration -----------------------------------', data)
    return response.redirect().toRoute('openGraphs.create')
  }
}
