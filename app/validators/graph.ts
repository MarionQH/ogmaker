import vine from '@vinejs/vine'

export const openGraphsValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(100).isUniqueByUser({
      table: 'open_graphs',
      column: 'name',
      userColumn: 'user_id',
      userId: '12345',
    }),
    ogUrl: vine.string().maxLength(3000),
  })
)
