<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
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

    // TODO
    /**
     * コメント数を取得
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCommentNumbers(Request $request)
    {
        // コメント数を取得する処理
        return response()->json([
            'status' => 'success',
            'data' => [
                'positive' => 100, // 仮のコメント数
                'neutral' => 30, // 仮のコメント数
                'negative' => 50, // 仮のコメント数
            ],
        ]);
    }
}
