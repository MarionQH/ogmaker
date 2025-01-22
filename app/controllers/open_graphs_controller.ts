import OpenGraph from '#models/open_graph'
import TextLine from '#models/text_line'
import { UrlMakerService } from '#services/url_maker_service'
import { openGraphsValidator } from '#validators/graph'
import { HttpContext } from '@adonisjs/core/http'
import { textValidator } from '#validators/text'

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

  async store({ request, response, auth, session }: HttpContext) {
    if (!auth.user) {
      return response.unauthorized('You must be logged in to create an OpenGraph entry.')
    }

    const validatedData = await request.validateUsing(openGraphsValidator, {
      meta: { userId: auth.user.id },
    })

    const openGraph = await OpenGraph.create({
      ...validatedData,
      userId: auth.user.id,
      prefixUrl: UrlMakerService.urlPrefix(validatedData.ogUrl),
      suffixUrl: UrlMakerService.urlSuffix(validatedData.ogUrl),
    })
    openGraph.ogUrl = await UrlMakerService.urlMakerWithoutText(openGraph)
    await openGraph.save()

    session.flash(
      'success',
      'OpenGraph successfully created! Check your OpenGraphs to edit and add text to them !'
    )

    return response.redirect().toRoute('openGraphs.index')
  }

  async update({ request, response, session }: HttpContext) {
    const { id, name } = request.only(['id', 'name'])

    try {
      const openGraph = await OpenGraph.findOrFail(id)

      openGraph.name = name
      await openGraph.save()

      session.flash('success', 'OpenGraph name updated successfully!')
      return response.redirect().back()
    } catch (error) {
      session.flash('error', 'Failed to update the OpenGraph name.')
      return response.redirect().back()
    }
  }

  async edit({ response, session, request, params }: HttpContext) {
    const openGraph = await OpenGraph.findOrFail(params.id)
    const validatedData = await request.validateUsing(textValidator)
    await TextLine.create({
      ...validatedData,
      openGraphId: openGraph.id,
      textColor: UrlMakerService.hexToRgb(validatedData.textColor),
      text: UrlMakerService.replaceSpaces(validatedData.text),
    })
    const newOgUrl = await UrlMakerService.urlMaker(openGraph)
    openGraph.merge({ ogUrl: newOgUrl })
    await openGraph.save()

    session.flash('success', 'OpenGraph successfully modified !')
    return response.redirect().back()
  }

  async destroy({ response, params }: HttpContext) {
    const openGraph = await OpenGraph.findOrFail(params.id)

    await openGraph.delete()

    return response.redirect().back()
  }
}
