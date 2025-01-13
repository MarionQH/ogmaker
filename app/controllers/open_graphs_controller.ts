// import type { HttpContext } from '@adonisjs/core/http'

import OpenGraph from '#models/open_graph'
import { openGraphsFilterValidator } from '#validators/open_graph'
import { HttpContext } from '@adonisjs/core/http'

export default class OpenGraphsController {
  async index({ view, request }: HttpContext) {
    const filters = await openGraphsFilterValidator.validate(request.qs())
    const openGraphs = await OpenGraph.query().orderBy('name')

    return view.render('pages/openGraph/index', { openGraphs, filters })
  }
}
