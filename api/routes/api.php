<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GeminiController;

Route::get('/news/{newsId}/opinions', [GeminiController::class, 'getNewsOpinions']);
