import vine from '@vinejs/vine'

export const openGraphsValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(100),
    ogUrl: vine.string().maxLength(3000),
  })
)
