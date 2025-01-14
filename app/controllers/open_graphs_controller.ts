// import type { HttpContext } from '@adonisjs/core/http'

import OpenGraph from '#models/open_graph'
import { OpenGraphService } from '#services/open_graph_service'
import { openGraphsFilterValidator } from '#validators/open_graph'
import { HttpContext } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'

export default class OpenGraphsController {
  async index({ view, request }: HttpContext) {
    const filters = await openGraphsFilterValidator.validate(request.qs())
    const openGraphs = await OpenGraph.query().orderBy('name')
    const openGraphSortOptions = OpenGraphService.sortOptions

    // openGraphs.baseUrl(router.makeUrl('openGraphs.index'))
    // openGraphs.queryString(filters)
    return view.render('pages/openGraph/index', { openGraphs, filters, openGraphSortOptions })
  }
}
