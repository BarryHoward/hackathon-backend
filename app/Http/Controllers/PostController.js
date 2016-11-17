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

}

module.exports = PostController
