import { OpenGraphService } from '#services/open_graph_service'
import vine from '@vinejs/vine'

const OpenGraphsFilter = vine.object({
  search: vine.string().optional(),
  sort: vine
    .string()
    .exists(async (_db, value) => {
      return OpenGraphService.sortOptions.some((option) => option.id === value)
    })
    .optional(),
})
export const openGraphsFilterValidator = vine.compile(OpenGraphsFilter)
