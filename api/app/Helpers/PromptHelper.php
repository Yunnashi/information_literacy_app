namespace App\Helpers;

class PromptHelper
{
    public static function createNewsSummaryPrompt(string $content): string
    {
        return "以下のニュースの概要をまとめてください: \n" . $content;
    }

    public static function createOpinionPrompts(string $content): array
    {
        return [
            'agree' => "以下のニュースに賛成する意見を述べてください: \n" . $content,
            'disagree' => "以下のニュースに反対する意見を述べてください: \n" . $content,
            'neutral' => "以下のニュースに対して中立的な意見を述べてください: \n" . $content,
        ];
    }
}
