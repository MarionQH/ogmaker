import OpenGraph from '#models/open_graph'
import TextLine from '#models/text_line'

export class UrlMakerService {
  static async urlMaker(openGraph: OpenGraph) {
    const textLines = await TextLine.query().where('openGraphId', openGraph.id)
    const baseUrl = `${openGraph.prefixUrl}`
    const part1 = `/c_scale,w_600,h_506,f_auto/w_1200%2Ch_830,q_100/`

    const textJoin = textLines.map((textLine) => {
      return `l_text:${textLine.textPolice}_${textLine.textSize}_${textLine.textWeight}:${textLine.text},co_${textLine.textColor},c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_${textLine.textLongitude},y_${textLine.textLatitude}/`
    })

    const part2 = textJoin.join('/')
    const part3 = `${openGraph.suffixUrl}`

    const url = `${baseUrl}${part1}${part2}${part3}`
    return url
  }
  static async urlMakerWithoutText(openGraph: Partial<OpenGraph>) {
    const baseUrl = `${openGraph.prefixUrl}`
    const part1 = `/c_scale,w_600,h_506,f_auto/w_1200%2Ch_830,q_100/`
    const part2 = `${openGraph.suffixUrl}`
    const url = `${baseUrl}${part1}${part2}`
    return url
  }
  private static uploadSegment = '/image/upload'
  private static versionPattern = /\/v[0-9]+\// // Matches '/v<number>/'

  // Extract the prefix part of the URL
  static urlPrefix(ogUrl: string): string {
    const uploadIndex = ogUrl.indexOf(this.uploadSegment)

    if (uploadIndex === -1) {
      throw new Error("Invalid Cloudinary URL: missing '/image/upload/' segment.")
    }

    // Return the prefix (up to and including the upload segment)
    return ogUrl.substring(0, uploadIndex + this.uploadSegment.length)
  }

  // Extract the suffix part of the URL
  static urlSuffix(ogUrl: string): string {
    const versionMatch = ogUrl.match(this.versionPattern)

    if (!versionMatch || versionMatch.index === undefined) {
      throw new Error("Invalid Cloudinary URL: missing '/v<number>/' segment.")
    }

    // Return the suffix (starting from the version segment)
    return ogUrl.substring(versionMatch.index + 1)
  }

  static hexToRgb(hex: string): string {
    // Retirer le # du début
    hex = hex.replace('#', '')

    // Vérifier si la chaîne hexadécimale est valide
    if (hex.length !== 6) {
      throw new Error('La valeur hexadécimale doit être de 6 caractères.')
    }

    // Convertir les valeurs hexadécimales en valeurs RGB
    const r: number = Number.parseInt(hex.substring(0, 2), 16)
    const g: number = Number.parseInt(hex.substring(2, 4), 16)
    const b: number = Number.parseInt(hex.substring(4, 6), 16)

    // Retourner le format rgb:XXXXXX avec des zéros de remplissage et "rgb" en minuscule
    return `rgb:${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toLowerCase()
  }
}
