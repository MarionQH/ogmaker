import OpenGraph from '#models/open_graph'
import TextLine from '#models/text_line'

export class UrlMakerService {
  static async urlMaker(openGraph: OpenGraph) {
    const textLines = await TextLine.query().where('openGraphId', openGraph.id)
    const baseUrl = `https://${openGraph.prefixUrl}`
    const part1 = `/c_scale,w_600,h_506,f_auto/w_1200%2Ch_830,q_100/`

    const textJoin = textLines.map((textLine) => {
      return `l_text:${openGraph.textline.textPolice}_${openGraph.textline.textSize}_${openGraph.textline.textWeight}:${openGraph.textline.text},co_${openGraph.textline.textColor},c_fit,w_1400,h_240
    /fl_layer_apply,g_south_west,x_${openGraph.textline.textLongitude},y_${openGraph.textline.textLatitude}:_150`
    })

    const part2 = textJoin.join('/')

    const url = `${baseUrl}${part1}${part2}`
    return url
  }
}
