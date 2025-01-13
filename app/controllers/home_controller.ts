// import type { HttpContext } from '@adonisjs/core/http'

import OpenGraph from '#models/open_graph'
import { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ view }: HttpContext) {
    const openGraphs = await OpenGraph.query().orderBy('created_at', 'desc').limit(9)

    return view.render('pages/home', { openGraphs })
  }
}
