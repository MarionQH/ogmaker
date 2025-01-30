import { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  async index({ view }: HttpContext) {
    return view.render('pages/home')
  }
  async about({ view }: HttpContext) {
    return view.render('pages/about')
  }
}
