import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import TextLine from './text_line.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class OpenGraph extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare ogUrl: string

  @column()
  declare prefixUrl: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => TextLine)
  declare textline: BelongsTo<typeof TextLine>
}
