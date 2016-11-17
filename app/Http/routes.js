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

Route.get('/post', 'PostController.index');
Route.post('/post', 'PostController.create');
Route.patch('/post/:post_id', 'PostController.update');
Route.delete('/post/:post_id', 'PostController.delete');


Route.get('/post/:post_id/comments', 'CommentController.index');
Route.post('/post/:post_id/comments', 'CommentControler.post');
Route.patch('/post/:post_id/comments/:comment_id', 'CommentController.update')
Route.delete('/post/:post_id/comments/:comment_id', 'CommentController.delete')