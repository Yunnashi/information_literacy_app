"use client";

import CommentSection from "@/app/components/CommentSection";
import {
  Container,
  Typography,
  Box,
  Button,
  Divider,
  Avatar,
  Card,
  CardContent,
  Chip,
  Grid,
} from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { orange } from "@mui/material/colors";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

// サンプルデータ
const sampleQuestionResult = {
  id: 1,
  user: {
    name: "ユーザー名",
    avatar: "",
  },
  title: "デザイン未経験でも仕事に就けますか？",
  detail:
    "子育てがひと段落し、昔から興味のあったデザイン職に挑戦してみたいと考えています。専業主婦を10年以上していたので、まったくの未経験です。IllustratorやPhotoshopはこれから学ぶ予定ですが、こんな私でも現場で通用するでしょうか？また、実務未経験者が採用されやすい職場にはどんな特徴がありますか？",
  ai_summary:
    "AIによる回答: デザイン職は未経験からでも挑戦可能ですが、ポートフォリオや実績作りが重要です。柔軟な働き方や協調性が求められる職場も多いので、自分に合ったスタイルを選びましょう。",
  ai_keywords: [
    { label: "未経験", value: "未経験" },
    { label: "デザイン職", value: "デザイン職" },
    { label: "ポートフォリオ", value: "ポートフォリオ" },
  ],
  compatibility: {
    personalityType: "現実志向/環境適応タイプ",
    personalityDesc:
      "バランスを考えた働き方を模索しており、状況に応じた最適解を選ぶ柔軟性がある。",
    occupation: "デザイナー",
    items: [
      { label: "主休性", user: 1, occupation: 4 },
      { label: "共感力", user: 4, occupation: 4 },
      { label: "協調性", user: 4, occupation: 4 },
      { label: "創造性", user: 1, occupation: 4 },
    ],
  },
  ai_explanation:
    "あなたは現実志向で協調性が高く、環境に応じた柔軟な選択ができるタイプで、積極的に仕事を重視しつつ、人との関わりやつながりを感じる傾向があります。在宅でのデザイン業務の中でもコミュニケーションや取りまとめがリーダーシップや案件に向いています。生活と仕事のバランスを大切にしながら、信頼と共感を軸に活躍できるスタイルを選ぶとよいでしょう。",
  ai_tips: [
    "ToDo管理やポモドーロなどを活用し、自律的な時間設計力を磨く",
    "ポートフォリオや実績紹介に力を入れ、安心感・信頼感で勝負するスタイルが合う",
    "CanvaやFigmaなどのツールからスタートすると、技術より発想力や提案力を伸ばしやすい",
  ],
  resources: [
    {
      title: "キャリアガイド本",
      description: "仕事に役立つ知識が満載の新刊",
      link: "#",
    },
    {
      title: "オンラインコース",
      description: "スキルを磨いてキャリアアップ",
      link: "#",
    },
    {
      title: "キャリアに役立つ書籍",
      description: "仕事に役立つ知識",
      link: "#",
    },
    {
      title: "プログラミングコース",
      description: "スキルを磨いてキャリアアップ",
      link: "#",
    },
  ],
  related_questions: [
    { id: 2, title: "Webデザイナーになるには？" },
    { id: 3, title: "未経験コーダーに必要なスキル" },
  ],
  comments: [
    {
      author: "名無しのデザイナー",
      content:
        "デザイナー職は、そんなに甘くない。若者の自分でも職を探すのに非常に苦労した。目指すなら覚悟したほうがいい。",
      date: "否定的",
    },
    {
      author: "採用担当だった人",
      content:
        "デザイナー職は、スキルだけじゃない。スキルがあると感じたことはあまりありませんが、コミュニケーションが取れたり、要件を相手に合わせたりするようなコミュニケーションスキルのほうが大事だと思ったりすることも多い。アピールポイントを工夫すれば是非人材になると思います！頑張ってください。",
      date: "肯定的",
    },
    {
      author: "フリーのデザイナー",
      content:
        "ひたすらポートフォリオを洗練させてまずは、小さい案件でも実績を作れば仕事にしていくのも難しくないと思う。質問者の頑張次第です。",
      date: "中立的",
    },
  ],
};

const QuestionDetailPage = () => {
  const question = sampleQuestionResult; // 本来はidで取得

  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      {/* ユーザー情報・タイトル */}
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar sx={{ mr: 2 }}>{question.user.name[0]}</Avatar>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {question.user.name}
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            {question.title}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" mb={2}>
        {question.detail}
      </Typography>
      {/* AI要約 */}
      <Box bgcolor="grey.100" p={2} borderRadius={2} mb={2}>
        <Typography
          variant="subtitle2"
          color="primary"
          fontWeight="bold"
          mb={1}
        >
          AIによる要約
        </Typography>
        <Typography variant="body2">{question.ai_summary}</Typography>
      </Box>
      {/* AIキーワード */}
      <Box mb={2}>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          AIによる注目キーワード
        </Typography>
        {question.ai_keywords.map((kw) => (
          <Chip
            key={kw.value}
            label={kw.label}
            sx={{ mr: 1, mb: 1 }}
            color="primary"
            variant="outlined"
          />
        ))}
      </Box>
      {/* 職業との相性分析 */}
      <Box mb={2} p={2}>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          職業との相性分析
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <Avatar sx={{ bgcolor: orange[500], width: 48, height: 48, mr: 2 }}>
            <PersonSearchIcon sx={{ fontSize: 32 }} />
          </Avatar>
          <Box>
            <Typography variant="body1" fontWeight="bold">
              性格分析
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {question.compatibility.personalityType}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ whiteSpace: "pre-line" }}
            >
              {question.compatibility.personalityDesc}
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            項目ごとの比較
          </Typography>
          {/* レーダーチャート表示 */}
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={question.compatibility.items.map((item) => ({
                subject: item.label,
                user: item.user,
                occupation: item.occupation,
              }))}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 4]} tickCount={5} />
              <Radar
                name="あなた"
                dataKey="user"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name={question.compatibility.occupation}
                dataKey="occupation"
                stroke="#ff9800"
                fill="#ff9800"
                fillOpacity={0.3}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
      {/* AI解説 */}
      <Box mb={2}>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          解説
        </Typography>
        <Typography variant="body2">{question.ai_explanation}</Typography>
      </Box>
      {/* AIロードマップ */}
      <Box mb={2}>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          今後の成長のヒント
        </Typography>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {question.ai_tips.map((tip, i) => (
            <li key={i}>
              <Typography variant="body2">{tip}</Typography>
            </li>
          ))}
        </ul>
      </Box>
      {/* おすすめリソース */}
      <Box mb={2}>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          おすすめのリソース
        </Typography>
        <Grid container spacing={2}>
          {question.resources.map((res, i) => (
            <Grid key={i} size={{ xs: 6 }}>
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="body2" fontWeight="bold">
                    {res.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {res.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* 関連質問 */}
      <Box mb={2}>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          関連する質問
        </Typography>
        {question.related_questions.map((q) => (
          <Button
            key={q.id}
            variant="text"
            sx={{
              textAlign: "left",
              justifyContent: "flex-start",
              width: "100%",
              mb: 1,
            }}
          >
            {q.title}
          </Button>
        ))}
      </Box>
      {/* コメント */}
      <Divider sx={{ my: 2 }} />
      <CommentSection comments={question.comments} />
      {/* 意見追加ボタン */}
      <Button
        variant="contained"
        size="large"
        sx={{
          position: "fixed",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          textTransform: "none",
          fontWeight: "bold",
          width: "80%",
          borderRadius: "8px",
        }}
      >
        自分の意見を追加する
      </Button>
    </Container>
  );
};

export default QuestionDetailPage;
