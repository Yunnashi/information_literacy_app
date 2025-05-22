<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * ニュース一覧を取得する
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        // id, title, published_atを取得
        $news = News::select('id', 'title', 'published_at')
            ->orderBy('published_at', 'asc')
            ->get();

        return response()->json([
            'status' => 'success',
            'data' => [
                'news' => $news,
            ],
        ]);
    }

    /**
     * ニュースの詳細を取得する
     *
     * @param Request $request
     * @param int $newsId
     * @return \Illuminate\Http\JsonResponse
     */
    public function detail(Request $request, int $newsId)
    {
        $news = News::find($newsId);
        // 記事が見つからない場合は404エラー
        if (!$news) {
            return response()->json([
                'status' => 'error',
                'message' => 'News not found',
            ], 404);
        }

        // TODO
        // コメントの内容を取得
        // コメント数を取得

        // TODO
        // Geminiを使って、summaryを生成
        $summary = '';

        // TODO
        // Geminiを使って、肯定・中立・否定の意見を生成
        $opinion = '';

        return response()->json([
            'id' => $news->id,
            'category' => $news->category,
            'date' => $news->published_at,
            'title' => $news->title,
            'summary' => $summary,
            'positive_number' => 0,
            'neutral_number' => 0,
            'negative_number' => 0,
            'opinions' => [
                'positive' => '',
                'neutral' => '',
                'negative' => '',
            ],
        ]);
    }
}
