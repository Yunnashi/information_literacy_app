namespace App\Helpers;

class PromptHelper
{
    public static function createNewsSummaryPrompt(string $content): string
    {
        return "以下のニュースの概要をまとめてください: \n" . $content;
    }
}
