import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import TextLine from './text_line.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class OpenGraph extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare lineTextId: number

  @column()
  declare name: string

  @column()
  declare ogUrl: string

  @column()
  declare cardWidht: string

  @column()
  declare cardHeight: string

  @column()
  declare imgWidht: string

  @column()
  declare imgHeigh: string

  @column()
  declare imgQuality: string

  @column()
  declare imgUrl: string

  @column()
  declare version: string

  @column()
  declare folderName: string

  @column()
  declare fileName: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => TextLine)
  declare textline: HasMany<typeof TextLine>
}
