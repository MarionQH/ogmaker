import env from '#start/env'

type GoogleFontsApiResponse = {
  items: {
    family: string
    variants: string[]
    subsets: string[]
    category: string
  }[]
}
export class ApipoliceService {
  static async fetchGoogleFonts(): Promise<GoogleFontsApiResponse> {
    const API_KEY = env.get('GOOGLE_FONTS_API_KEY', 'default_value')
    const API_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`

    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des polices.')
    }

    // Assurez-vous que la réponse JSON correspond au type défini
    const data = await response.json() // Étape intermédiaire
    // Vérifiez le type de `data` avant de l'utiliser
    if (
      typeof data === 'object' &&
      data !== null &&
      'items' in data &&
      Array.isArray((data as GoogleFontsApiResponse).items)
    ) {
      return data as GoogleFontsApiResponse
    }
    throw new Error('La structure des données est invalide.')
  }

  static async getLatinFonts() {
    try {
      const data = await ApipoliceService.fetchGoogleFonts()
      const latinFontFamilies = data.items
        .filter((item) => item.subsets.includes('latin')) // Filtrage basé sur le support du latin
        .map((item) => item.family) // Extraire le nom de la police

      return latinFontFamilies
    } catch (error) {
      console.error('Erreur lors de la récupération des polices :', error)
      throw new Error('Erreur lors de la récupération des polices Google Fonts')
    }
  }
}
