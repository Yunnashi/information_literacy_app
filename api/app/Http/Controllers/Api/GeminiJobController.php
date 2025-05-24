<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Job;
use App\Helpers\PromptHelper;

class GeminiJobController extends Controller
{
    /**
     * 指定した職業質問（Job）に対してAIによる解答を返すAPI
     * @param int $jobId
     * @return \Illuminate\Http\JsonResponse
     */
    public function aiAnswer($jobId)
    {
        $job = Job::find($jobId);
        if (!$job) {
            return response()->json(['error' => '職業質問が見つかりません'], 404);
        }

        // プロンプト生成（Jobの説明文を元に）
        $prompts = PromptHelper::createJobOpinionPrompts($job->description);

        $responses = [];
        foreach ($prompts as $key => $prompt) {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post(env('GEMINI_API_URL'), [
                'contents' => [
                    [
                        'parts' => [
                            ['text' => $prompt]
                        ]
                    ]
                ]
            ]);
            if ($response->failed()) {
                $responses[$key] = [
                    'error' => 'Gemini APIへの接続に失敗しました',
                    'status' => $response->status(),
                    'body' => $response->body(),
                ];
            } else {
                $responses[$key] = $response->json();
            }
        }

        return response()->json([
            'job_id' => $jobId,
            'job_title' => $job->title,
            'ai_answers' => $responses,
        ]);
    }
}
