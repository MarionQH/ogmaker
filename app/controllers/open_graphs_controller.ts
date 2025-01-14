// import type { HttpContext } from '@adonisjs/core/http'

import OpenGraph from '#models/open_graph'
import { OpenGraphService } from '#services/open_graph_service'
import { openGraphsFilterValidator } from '#validators/open_graph'
import { openGraphsValidator } from '#validators/graph'
import { HttpContext } from '@adonisjs/core/http'

export default class OpenGraphsController {
  async index({ view, request }: HttpContext) {
    const filters = await openGraphsFilterValidator.validate(request.qs())
    const openGraphs = await OpenGraph.query().orderBy('name')
    const openGraphSortOptions = OpenGraphService.sortOptions

    // openGraphs.baseUrl(router.makeUrl('openGraphs.index'))
    // openGraphs.queryString(filters)
    return view.render('pages/openGraph/index', { openGraphs, filters, openGraphSortOptions })
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
