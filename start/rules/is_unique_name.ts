import type { FieldContext } from '@vinejs/vine/types'
import db from '@adonisjs/lucid/services/db'
import vine from '@vinejs/vine'
import { VineString } from '@vinejs/vine'

type Options = {
  table: string
  column: string
  userColumn: string // Colonne pour l'utilisateur
  userId: string | number // ID de l'utilisateur
}

async function isUniqueByUser(value: unknown, options: Options, field: FieldContext) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return
  }

  // Récupération de l'ID utilisateur depuis les métadonnées
  const userId = field.meta.userId
  if (!userId) {
    throw new Error('User ID is required for this validation.')
  }

  // Requête pour vérifier unicité du champ `column` pour un `userId`
  const result = await db
    .from(options.table)
    .select(options.column)
    .where(options.column, value)
    .andWhere(options.userColumn, userId)
    .first()

  if (result) {
    field.report(
      `The {{ field }} "${value}" is already taken for this user`,
      'isUniqueByUser',
      field
    )
  }
}

// Crée la règle
export const isUniqueByUserRule = vine.createRule(isUniqueByUser)

// Étend VineString pour inclure la méthode personnalisée
declare module '@vinejs/vine' {
  interface VineString {
    isUniqueByUser(options: Options): this
  }
}

// Ajout de la méthode via un macro
VineString.macro('isUniqueByUser', function (this: VineString, options: Options) {
  return this.use(isUniqueByUserRule(options))
})
