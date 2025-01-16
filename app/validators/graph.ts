import vine from '@vinejs/vine'

export const openGraphsValidator = vine.compile(
  vine.object({
    name: vine.string(),
    prefixUrl: vine.string(),
    suffixUrl: vine.string(),
    // userId: vine.number().isExists({ table: 'users', column: 'id' }),
    // ogUrl: vine.string(),
    // textline: vine
    //   .array(
    //     vine.object({
    //       id: vine.number(),
    //       openGhaphId: vine.number(),
    //       text: vine.string(),
    //       textPolice: vine.string(),
    //       textSize: vine.string(),
    //       textWeight: vine.string(),
    //       textColor: vine.string(),
    //       textLongitude: vine.string(),
    //       textLatitude: vine.string(),
    //     })
    //   )
    //   .optional(),
  })
)
