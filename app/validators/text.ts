import vine from '@vinejs/vine'

export const textValidator = vine.compile(
  vine.object({
    text: vine.string().maxLength(100),
    textPolice: vine.string().maxLength(200),
    textSize: vine.string().regex(/^(?:[1-9][0-9]|[1-2][0-9]{2}|300)$/),
    textWeight: vine.string().maxLength(100),
    textColor: vine.string().regex(/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/),
    textLongitude: vine.string().regex(/^(?:[1-9][0-9]?|[1-9][0-9]{2}|900)$/),
    textLatitude: vine.string().regex(/^(?:[1-9][0-9]?|[1-7][0-9]{2})$/),
  })
)
