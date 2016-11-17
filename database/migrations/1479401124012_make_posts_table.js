'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {

  up () {
    this.create('posts', table => {
      table.timestamps()
      table.increments()
      
      table.string('title')
      table.string('destination_url')
      table.text('description')
      table.integer('likes')

    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
