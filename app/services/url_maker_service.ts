import OpenGraph from '#models/open_graph'
import TextLine from '#models/text_line'

export class UrlMakerService {
  static urlMaker(openGraph: OpenGraph) {
    const textLines = TextLine.query().where('openGraphId', openGraph.id)
    const baseUrl = `https://${openGraph.prefixUrl}`
    const part1 = `/c_scale,w_600,h_506,f_auto/w_1200%2Ch_830,q_100/`
    //faire une boucle pour nombre de ligne de texte
    const part2 = `l_text:${openGraph.textline.textPolice}_${openGraph.textline.textSize}_${openGraph.textline.textWeight}:${openGraph.textline.text},co_${openGraph.textline.textColor},c_fit,w_1400,h_240`
    const part3 = `/fl_layer_apply,g_south_west,x_${openGraph.textline.textLongitude},y_${openGraph.textline.textLatitude}:_150`
    const url = `${baseUrl}${part1}${part2}${part3}`
    return url
  }
}
