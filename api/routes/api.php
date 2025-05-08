<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CommentController;

Route::prefix('comments')->group(function () {
    Route::get('/', [CommentController::class, 'index']);
    Route::post('/', [CommentController::class, 'store']);

    // コメント数取得
    Route::get('/numbers', [CommentController::class, 'getCommentNumbers']);
});
