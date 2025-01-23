import { HttpContext } from '@adonisjs/core/http'

export default class InfosController {
  async infos({ view }: HttpContext) {
    // Render the Q&A page
    return view.render('pages/infos/qna')
  }
}
