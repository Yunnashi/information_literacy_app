<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\GeminiController;
use App\Http\Controllers\Api\NewsController;

Route::prefix('comments')->group(function () {
    Route::get('/', [CommentController::class, 'index']);
    Route::post('/', [CommentController::class, 'store']);

    // コメント数取得
    Route::get('/numbers/{newsId}', [CommentController::class, 'getCommentNumbers']);
});

Route::prefix('news')->group(function () {
    Route::get('/', [NewsController::class, 'index']);
    Route::get('/{newsId}', [NewsController::class, 'detail']);
});

Route::prefix('gemini')->group(function () {
    Route::prefix('news')->group(function () {
        // ニュースのサマリー取得
        Route::get('/summary/{newsId}', [GeminiController::class, 'getNewsSummary']);
        // ニュースに対する意見作成
        Route::get('/opinion/{newsId}', [GeminiController::class, 'createNewsOpinion']);
    });
});

Route::get('/gemini/news-summary/{newsId}', [GeminiController::class, 'getNewsSummary']);
Route::get('/gemini/news-opinions/{newsId}', [GeminiController::class, 'getNewsOpinions']);

Route::post('/gemini/prompt', [GeminiController::class, 'postPromptToGemini']);
