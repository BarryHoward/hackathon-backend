'use strict'

const Comment = use('App/Model/Comment')


class CommentController {

	* create (request, response) {
		let data = request.only('content');
		data.likes = 0;
		let postId = request.param('post_id');
		data.posts_id = postId;

		let comment = yield Comment.create(data)

		comment.save()
		response.status(201).json(comment)
	}

	* delete (request, response){
		let comment_id = request.param("comment_id")

		let comment = yield Comment.findBy('id', comment_id)

		if (!comment){
			response.status(404).json({text: "Comment not found"})
		} else {
	  		yield comment.delete()
	  		response.status(201).json({text: "Comment deleted!", comment: comment})
		}

	}

	* show (request, response){
		let postId = request.param('post_id')
		const comment_list = yield Comment.query().table('comments')
		.where('posts_id', postId)
		.orderBy('likes', 'desc')
		.orderBy('created_at', 'desc')
		response.json(comment_list)
	}

	* update(request, response){
		let commentId = request.param('comment_id')
		let comment = yield Comment.findBy('id', commentId)
		let data = request.only('content', 'likes')

		if (!comment){
			response.status(404).json({text: "Comment not found"})
		} else {
			comment.fill(data)
			yield comment.save()
			response.status(201).json(comment)
		}
	}
}

module.exports = CommentController
