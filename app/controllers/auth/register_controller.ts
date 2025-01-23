import User from '#models/user'
import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }

  async store({ request, response, auth, session }: HttpContext) {
    const honeypot = request.input('honeypot')
    if (honeypot) {
      console.log('Tentative de spam détectée !')
      return response.ok('Bien essayé !.')
    }
    const data = await request.validateUsing(registerValidator)
    const user = await User.register(auth, data)
    const baseMessage = `Welcome to ${app.appName}`

    session.flash('success', user.fullName ? `${baseMessage}, ${user.fullName}` : baseMessage)

    return response.redirect().toRoute('home')
  }
}
