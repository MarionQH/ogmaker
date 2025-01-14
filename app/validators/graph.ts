import vine from '@vinejs/vine'

export const openGraphsValidator = vine.compile(
  vine.object({
    name: vine.string(),
    prefixUrl: vine.string(),
  })
)
