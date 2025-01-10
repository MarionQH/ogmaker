import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'open_graphs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('line_text_id').unsigned().references('text_lines.id').notNullable()
      table.string('og_url', 100).notNullable()
      table.string('name', 100).notNullable()
      table.string('card_width', 100).notNullable()
      table.string('card_height', 100).notNullable()
      table.string('img_width', 100).notNullable()
      table.string('img_height', 100).notNullable()
      table.string('img_quality', 100).notNullable()
      table.string('img_url', 100).notNullable()
      table.string('version', 100).notNullable()
      table.string('folder_name', 100).notNullable()
      table.string('file_name', 100).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
