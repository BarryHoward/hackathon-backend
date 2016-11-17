'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/posts', 'PostController.show');
Route.post('/posts', 'PostController.create');
Route.patch('/posts/:post_id', 'PostController.update');
Route.delete('/posts/:post_id', 'PostController.delete');


Route.get('/posts/:post_id/comments', 'CommentController.show');
Route.post('/posts/:post_id/comments', 'CommentController.create');
Route.patch('/posts/:post_id/comments/:comment_id', 'CommentController.update')
Route.delete('/posts/:post_id/comments/:comment_id', 'CommentController.delete')