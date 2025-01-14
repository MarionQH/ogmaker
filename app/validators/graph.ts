import { OpenGraphService } from '#services/open_graph_service'
import vine from '@vinejs/vine'

export const openGraphsValidator = vine.compile(
  vine.object({
    name: vine.string(),
    prefixUrl: vine.string(),
  })
)
