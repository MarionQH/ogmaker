import vine from '@vinejs/vine'

export const textValidator = vine.compile(
  vine.object({
    text: vine.string(),
    textPolice: vine.string(),
    textSize: vine.string(),
    textWeight: vine.string(),
    textColor: vine.string(),
    textLongitude: vine.string(),
    textLatitude: vine.string(),
  })
)
