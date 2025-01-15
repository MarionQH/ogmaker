import OpenGraph from '#models/open_graph'
import { openGraphsValidator } from '#validators/graph'
import { Infer } from '@vinejs/vine/types'

export class OpenGraphService {
  static async syncTextline(
    openGraph: OpenGraph,
    textline: Infer<typeof openGraphsValidator>['textline']
  ) {
    const textlines = textline?.map((row, index) => ({
      title: row.text, // Le texte de la ligne
      sort_order: index, // L'ordre de tri, basé sur l'index
      open_graph_id: openGraph.id, // Ajout de l'ID de l'OpenGraph pour lier la relation
      textPolice: 'Arial', // Valeur par défaut pour textPolice
      textSize: '14px', // Valeur par défaut pour textSize
      textWeight: 'normal', // Valeur par défaut pour textWeight
      textColor: 'black', // Valeur par défaut pour textColor
      textLongitude: '0', // Valeur par défaut pour textLongitude
      textLatitude: '0',
    }))

    // Si des lignes sont présentes, on les crée
    if (textlines && textlines.length > 0) {
      await openGraph.related('textline').createMany(textlines)
    }
  }
}
