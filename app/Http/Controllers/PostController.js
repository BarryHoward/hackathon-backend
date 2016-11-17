'use strict'

const Post = use('App/Model/Post')

class PostController {

	* create (request, response) {
		let data = request.only('title', 'destination_url', 'description')
		data.likes = 0;

		let post = yield Post.create(data)

		post.save()
		response.status(201).json(post)
	}

	* show (request, response){
		const post_list = yield Post.query().table('posts')
		.orderBy('likes', 'desc')
		.orderBy('created_at', 'desc')
		.limit(50)
		response.json(post_list)
	}

	* delete (request, response){
		let post_id = request.param("post_id")

		let post = yield Post.findBy('id', post_id)

		if (!post){
			response.status(404).json({text: "Post not found"})
		} else {
	  		yield post.delete()
	  		response.status(201).json({text: "Post deleted!", post:post})
		}

		// add code for deleting comments
	}

	* update(request, response){
		let postId = request.param('post_id')
		let post = yield Post.findBy('id', postId)
		let data = request.only('title', 'description', 'destination_url', 'likes')

		if (!post){
			response.status(404).json({text: "Post not found"})
		} else {
			post.fill(data)
			yield post.save()
			response.status(201).json(post)
		}
	}
}

module.exports = PostController
