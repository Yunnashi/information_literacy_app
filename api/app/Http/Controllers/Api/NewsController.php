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
}
