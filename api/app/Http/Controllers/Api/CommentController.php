<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use Illuminate\Http\Request;

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
}
