import OpenGraph from '#models/open_graph'
import { openGraphsFilterValidator } from '#validators/open_graph'
import { Infer } from '@vinejs/vine/types'

type OpenGraphSortOption = {
  id: string
  text: string
  field: string
  dir: 'asc' | 'desc' | undefined
}

export class OpenGraphService {
  static sortOptions: OpenGraphSortOption[] = [
    { id: 'createdAt_asc', text: 'created Date (asc)', field: 'createdAt', dir: 'asc' },
    { id: 'createdAt_desc', text: 'created Date (desc)', field: 'createdAt', dir: 'desc' },
  ]
  static getFiltered(filters: Infer<typeof openGraphsFilterValidator>) {
    const sort =
      this.sortOptions.find((option) => option.id === filters.sort) || this.sortOptions[0]
    return OpenGraph.query()
      .if(filters.search, (query) => query.whereILike('name', `%${filters.search}%`))
      .if(['createdAt_asc', 'createdAt_desc'].includes(sort.id), (query) => {
        query.orderBy(sort.field, sort.dir)
      })
      .select('open_graphs.*')
  }
}
