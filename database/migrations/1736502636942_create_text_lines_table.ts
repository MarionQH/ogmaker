import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'text_lines'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table
        .integer('open_graph_id')
        .unsigned()
        .references('open_graphs.id')
        .notNullable()
        .onDelete('CASCADE')
      table.string('text ', 100).notNullable()
      table.string('text_police', 100).notNullable()
      table.string('text_size', 100).notNullable()
      table.string('text_weight', 100).notNullable()
      table.string('text_color', 100).notNullable()
      table.string('text_longitude', 100).notNullable()
      table.string('text_latitude', 100).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
