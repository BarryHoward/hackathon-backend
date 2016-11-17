# root URL

https://hackathon-backend.herokuapp.com

# Routes:

	/posts
		method: get
		function:  gets list of images
		parameters:  []

	/posts
		method: post
		function:  post new image
		parameters:  title, description, destination_url

	/posts/:post_id
		method: delete
		function: delete post with id equal to post_id
		paramters: []

	/posts/:post_id
		method: patch
		function: update whichever post parameters that are passed in data.  Others remain same.
		parameters:  title, description, destination_url, likes



	/posts/:post_id/comments
		method: get
		function:  gets list of comments for post with id equal to post_id
		parameters:  []

	/posts/:post_id/comments
		method: post
		function:  post new comment for post with id equal to post_id
		parameters:  content

	/posts/:post_id/comments/:comment_id
		method: delete
		function: delete post with comment id equal to comment_id
		paramters: []

	/posts/:post_id/comments
		method: patch
		function: update comment parameters that are passed in data.  Others remain same.
		parameters:  content, likes