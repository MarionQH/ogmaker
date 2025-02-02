import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'open_graphs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('user_id').unsigned().references('users.id').notNullable().onDelete('CASCADE')
      table.string('og_url', 3000)
      table.string('name', 100).notNullable()
      table.string('prefix_url', 100).notNullable()
      table.string('suffix_url', 100).notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
