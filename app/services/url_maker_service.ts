import OpenGraph from '#models/open_graph'
import TextLine from '#models/text_line'

export class UrlMakerService {
  static async urlMaker(openGraph: OpenGraph) {
    const textLines = await TextLine.query().where('openGraphId', openGraph.id)
    const baseUrl = `${openGraph.prefixUrl}`
    const part1 = `/c_scale,w_900,h_506,f_auto/w_1200%2Ch_830,q_100/`

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
    const part1 = `/c_scale,w_900,h_506,f_auto/w_1200%2Ch_830,q_100/`
    const part2 = `${openGraph.suffixUrl}`
    const url = `${baseUrl}${part1}${part2}`
    return url
  }
  private static uploadSegment = '/image/upload'
  private static versionPattern = /\/v[0-9]+\//

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
    hex = hex.replace('#', '')

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

  static rgbToHex(rgb: string): string {
    // Vérifier si le format commence par "rgb:"
    if (!rgb.startsWith('rgb:')) {
      throw new Error('Le format RGB attendu est "rgb:XXXXXX" ou "rgbXXX".')
    }

    // Extraire les valeurs après "rgb:"
    let hex = rgb.substring(4).toLowerCase()

    // Si le format est compact (ex: rgb000), le convertir au format standard (ex: rgb:000000)
    if (/^[0-9a-f]{3}$/.test(hex)) {
      hex = hex
        .split('')
        .map((char) => char + char)
        .join('')
    }

    // Vérifier que le format est maintenant valide (6 caractères hexadécimaux)
    if (!/^[0-9a-f]{6}$/.test(hex)) {
      throw new Error(
        'Les caractères après "rgb:" doivent être un code hexadécimal valide de 3 ou 6 caractères.'
      )
    }

    // Retourner le code hexadécimal avec un #
    return `#${hex}`
  }

  static replaceSpaces(input: string): string {
    return input.replace(/ /g, '%20')
  }

  static replacePercent20WithSpace(input: string): string {
    return input.replace(/%20/g, ' ')
  }

  static async removeTextLineFromUrl(
    openGraph: OpenGraph,
    textLineToRemove: TextLine
  ): Promise<string> {
    const baseUrl = `${openGraph.prefixUrl}`
    const part1 = `/c_scale,w_900,h_506,f_auto/w_1200%2Ch_830,q_100/`
    const textLines = await TextLine.query().where('openGraphId', openGraph.id)

    // Construire les segments d'URL pour toutes les TextLines sauf celle à supprimer
    const textJoin = textLines
      .filter((textLine) => textLine.id !== textLineToRemove.id) // Exclure la TextLine supprimée
      .map((textLine) => {
        return `l_text:${textLine.textPolice}_${textLine.textSize}_${textLine.textWeight}:${textLine.text},co_${textLine.textColor},c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_${textLine.textLongitude},y_${textLine.textLatitude}/`
      })

    const part2 = textJoin.join('/')
    const part3 = `${openGraph.suffixUrl}`
    const url = `${baseUrl}${part1}${part2}${part3}`
    return url
  }

  static async updateTextLineInUrl(
    openGraph: OpenGraph,
    updatedTextLine: TextLine
  ): Promise<string> {
    const baseUrl = `${openGraph.prefixUrl}`
    const part1 = `/c_scale,w_900,h_506,f_auto/w_1200%2Ch_830,q_100/`
    const textLines = await TextLine.query().where('openGraphId', openGraph.id)

    // Construire les segments d'URL avec la TextLine mise à jour
    const textJoin = textLines.map((textLine) => {
      // Si l'ID correspond, utiliser les propriétés mises à jour
      if (textLine.id === updatedTextLine.id) {
        return `l_text:${updatedTextLine.textPolice}_${updatedTextLine.textSize}_${updatedTextLine.textWeight}:${updatedTextLine.text},co_${updatedTextLine.textColor},c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_${updatedTextLine.textLongitude},y_${updatedTextLine.textLatitude}/`
      }
      // Sinon, utiliser les propriétés existantes
      return `l_text:${textLine.textPolice}_${textLine.textSize}_${textLine.textWeight}:${textLine.text},co_${textLine.textColor},c_fit,w_1400,h_240/fl_layer_apply,g_south_west,x_${textLine.textLongitude},y_${textLine.textLatitude}/`
    })

    const part2 = textJoin.join('/')
    const part3 = `${openGraph.suffixUrl}`
    const url = `${baseUrl}${part1}${part2}${part3}`

    return url
  }

  static async extractAndCreateTextLinesFromUrl(ogUrl: string, openGraphId: number) {
    // Décoder l'URL pour garantir une analyse correcte
    ogUrl = decodeURIComponent(ogUrl)

    // Définition du pattern pour extraire les informations des lignes de texte
    const textLinePattern =
      /l_text:(?<textPolice>[a-zA-Z0-9_]+)_(?<textSize>[0-9]+)_(?<textWeight>[a-zA-Z]+):(?<text>[^,]+),co_(?<textColor>[a-zA-Z0-9:]+),[^x]*x_(?<textLongitude>[0-9]+),y_(?<textLatitude>[0-9]+)/g

    // Extraction des correspondances avec le pattern
    const matches = [...ogUrl.matchAll(textLinePattern)]

    // Si aucune correspondance, lever une erreur
    if (matches.length === 0) {
      return []
    }

    // Transformation des correspondances en objets TextLine
    const textLines = matches.map((match) => ({
      openGraphId: openGraphId,
      textPolice: match.groups?.textPolice || '',
      textSize: (match.groups?.textSize || '0').toString(),
      textWeight: match.groups?.textWeight || '',
      text: match.groups?.text || '',
      textColor: match.groups?.textColor || '',
      textLongitude: (match.groups?.textLongitude || '0').toString(),
      textLatitude: (match.groups?.textLatitude || '0').toString(),
    }))

    // Validation des lignes extraites
    textLines.forEach((line, index) => {
      console.log(`Ligne ${index + 1}:`, line)
    })

    // Insérer chaque ligne de texte dans la base de données
    for (const textLine of textLines) {
      await TextLine.create(textLine)
    }

    // Retourner les lignes de texte créées pour un éventuel usage
    return textLines
  }
}
