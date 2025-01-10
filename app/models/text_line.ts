import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import OpenGraph from './open_graph.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class TextLine extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare text: string

  @column()
  declare textPolice: string

  @column()
  declare textHeight: string

  @column()
  declare textwidth: string

  @column()
  declare textcolor: string

  @column()
  declare textLongitude: string

  @column()
  declare textLatitude: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => OpenGraph)
  declare openGraph: BelongsTo<typeof OpenGraph>
}