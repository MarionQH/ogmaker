import vine from '@vinejs/vine'

export const textValidator = vine.compile(
  vine.object({
    text: vine.string().maxLength(100),
    textPolice: vine.string().maxLength(200),
    textSize: vine.string().regex(/^(?:[1-9][0-9]|1[0-9]{2}|2[0-5][0-9]|260)$/),
    textWeight: vine.string().maxLength(100),
    textColor: vine.string().regex(/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/),
    textLongitude: vine.string().regex(/^([1-9]|[1-9][0-9]|[1-8][0-9]{2}|900)$/),
    textLatitude: vine.string().regex(/^([1-9]|[1-9][0-9]|[1-6][0-9]{2}|7[01][0-9]|72[0-5])$/),
  })
)
