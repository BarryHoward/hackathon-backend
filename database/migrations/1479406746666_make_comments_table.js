'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', table => {
      table.timestamps()
      table.increments()
      
      table.text('content')

      table.integer('posts_id')
      table.foreign('posts_id').references('posts.id')

      table.integer('likes')

    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
