<?php

namespace App\Http\Controllers\Api;

use App\Helpers\PromptHelper;
use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CommentController extends Controller
{
    // TODO
    /**
     * コメント一覧を取得
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public  function index(Request $request)
    {
        // コメント一覧を取得する処理
        return response()->json([
            'message' => 'コメント一覧を取得しました。',
        ]);
    }

    // TODO
    /**
     * コメントを保存
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // コメントを保存する処理
        return response()->json([
            'message' => 'コメントを保存しました。',
        ]);
    }

    /**
     * コメント数を取得
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCommentNumbers(Request $request)
    {
        // リクエストからニュースIDを取得
        $newsId = $request->route('newsId');

        // 該当のニュース記事に関連するコメントを取得
        $comments = Comment::where('news_id', $newsId)->get();

        // それぞれのコメント数を取得
        $positiveCount = $comments->where('stance', 'positive')->count();
        $neutralCount = $comments->where('stance', 'neutral')->count();
        $negativeCount = $comments->where('stance', 'negative')->count();

        // コメント数を取得する処理
        return response()->json([
            'status' => 'success',
            'data' => [
                'positive' => $positiveCount,
                'neutral' => $neutralCount,
                'negative' => $negativeCount,
            ],
        ]);
    }

    /**
     * コメントのAI判定（肯定的・中立的・否定的）
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function aiDecision(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'comment' => 'required|string',
        ]);

        $name = $request->input('name');
        $comment = $request->input('comment');

        // プロンプト生成
        $prompt = PromptHelper::createCommentDecisionPrompt($comment, $name);

        // Gemini APIの設定
        $apiUrl = config('services.gemini.api_url');
        $apiKey = config('services.gemini.api_key'); // 必要なら

        // Gemini APIへリクエスト
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            // 'Authorization' => 'Bearer ' . $apiKey, // 必要なら
        ])->post($apiUrl, [
            'contents' => [
                [
                    'parts' => [
                        ['text' => $prompt]
                    ]
                ]
            ]
        ]);

        if ($response->failed()) {
            return response()->json([
                'error' => 'Gemini APIへの接続に失敗しました',
                'response' => $response->json(),
                'status' => $response->status(),
                'body' => $response->body(),
            ], 500);
        }

        // Geminiの返答からdecisionを抽出
        $geminiResult = $response->json();
        $text = $geminiResult['candidates'][0]['content']['parts'][0]['text'] ?? null;
        $decision = null;
        if ($text) {
            $json = json_decode($text, true);
            if (isset($json['decision'])) {
                $decision = (string)$json['decision'];
            }
        }

        // ラベルも返す場合
        $decision_label = '';
        if ($decision === '1') $decision_label = '肯定的';
        elseif ($decision === '2') $decision_label = '中立的';
        elseif ($decision === '3') $decision_label = '否定的';

        return response()->json([
            'decision' => $decision,
            'decision_label' => $decision_label,
        ]);
    }
}
