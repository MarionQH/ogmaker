import vine from '@vinejs/vine'

const OpenGraphsFilter = vine.object({
  search: vine.string().optional(),
})
export const openGraphsFilterValidator = vine.compile(OpenGraphsFilter)
