// import type { HttpContext } from '@adonisjs/core/http'

import OpenGraph from '#models/open_graph'
import TextLine from '#models/text_line'
import { UrlMakerService } from '#services/url_maker_service'
import { textValidator } from '#validators/text'
import { HttpContext } from '@adonisjs/core/http'

export default class TextLinesController {
  async show({ view, params }: HttpContext) {
    const openGraph = await OpenGraph.query()
      .where('id', params.id)
      .preload('textline')
      .firstOrFail()

    openGraph.textline.forEach((textline) => {
      textline.text = UrlMakerService.replacePercent20WithSpace(textline.text)
    })
    return view.render('pages/textline/createoredit', { openGraph })
  }

  async create({ request, response, auth, session, params }: HttpContext) {
    if (!auth.user) {
      return response.unauthorized('You must be logged in to create textlines.')
    }

    const validatedData = await request.validateUsing(textValidator, {
      meta: { userId: auth.user.id },
    })

    const openGraph = await OpenGraph.findOrFail(params.id)

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
}
