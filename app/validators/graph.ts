import vine from '@vinejs/vine'

export const openGraphsValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(100).isUniqueByUser({
      table: 'open_graphs',
      column: 'name',
      userColumn: 'user_id', // Colonne représentant l'utilisateur
      userId: '12345', // ID de l'utilisateur (vous pouvez le passer dynamiquement)
    }),
    ogUrl: vine.string().maxLength(3000),
  })
)
