<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\JsonResponse;
use App\Models\News;
use App\Helpers\PromptHelper; // 新しいヘルパークラスをインポート

class GeminiController extends Controller
{
    public function getNewsSummary($newsId): JsonResponse
    {
        // ニュースデータを取得
        $news = News::find($newsId);

        if (!$news) {
            return response()->json(['error' => 'News not found'], 404);
        }

        // プロンプトをヘルパークラスから取得
        $prompt = PromptHelper::createNewsSummaryPrompt($news->content);

        // Gemini APIにリクエストを送信
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('GEMINI_API_KEY'),
        ])->post(env('GEMINI_API_URL'), [
            'prompt' => $prompt,
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Failed to connect to Gemini API'], 500);
        }

        // Gemini APIのレスポンスを返す
        return response()->json($response->json());
    }

    public function getNewsOpinions($newsId): JsonResponse
    {
        // ニュースデータを取得
        $news = News::find($newsId);

        if (!$news) {
            return response()->json(['error' => 'News not found'], 404);
        }

        // プロンプトをヘルパークラスから取得
        $prompts = PromptHelper::createOpinionPrompts($news->content);

        // 各プロンプトに対してGemini APIにリクエストを送信
        $responses = [];
        foreach ($prompts as $key => $prompt) {
            $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . env('GEMINI_API_KEY'),
            ])->post(env('GEMINI_API_URL'), [
                'prompt' => $prompt,
            ]);

            if ($response->failed()) {
                $responses[$key] = ['error' => 'Failed to connect to Gemini API'];
            } else {
                $responses[$key] = $response->json();
            }
        }

        // Gemini APIのレスポンスを返す
        return response()->json($responses);
    }
