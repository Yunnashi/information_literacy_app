"use client";

import React from "react";
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
  ResponsiveContainer,
} from "recharts";
import IndicatorSupplement from "@/app/components/IndicatorSupplement";

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
    "あなたの性格はデザインの丁寧な実務に向いていますが、職場選びは安定性と明確な評価制度が鍵になります。",
  ai_keywords: [
    { label: "未経験", value: "未経験" },
    { label: "デザイン職", value: "デザイン職" },
    { label: "ポートフォリオ", value: "ポートフォリオ" },
  ],
  compatibility: {
    personalityType: "あなたは「防御系」",
    personalityDesc:
      "実務能力が必要な仕事で能力を発揮します。複雑なデータを念入りに処理するのがうまいため、慎重さを高く評価してくれるような業界が望ましいでしょう。",
    personalityDesc2:
      "適した職業：事務員、技術者、経理係、データアナリスト、弁護士など",
    occupation: "デザイナー",
    items: [
      { label: "ﾜｰｸﾗｲﾌﾊﾞﾗﾝｽ", occupation: 3, isDestroyer: true },
      { label: "雇用の安定", occupation: 2, isDestroyer: true },
      { label: "労働時間", occupation: 2, isDestroyer: true },
      { label: "ｼﾌﾄﾜｰｸ", occupation: 4, isDestroyer: true },
      { label: "自由", occupation: 4, isDestroyer: false },
      { label: "達成", occupation: 3, isDestroyer: false },
      { label: "明確", occupation: 2, isDestroyer: false },
      { label: "多様", occupation: 4, isDestroyer: false },
      { label: "焦点", occupation: 2, isDestroyer: false },
      { label: "仲間", occupation: 3, isDestroyer: false },
      { label: "貢献", occupation: 3, isDestroyer: false },
    ],
  },
  ai_explanation: `子育てを終えて新たに挑戦したいという気持ちは非常に前向きで、特に「防御系」の性格は、慎重かつ丁寧な作業が求められるデザインの現場でも一定の強みとなります。たとえば、広告バナーの調整、印刷物の入稿、UIの微調整など、細部への気配りが必要な作業に向いています。
    一方で、デザイン業界は「自由度」「多様性」「シフトの柔軟さ」が高い分、「雇用の安定性」や「労働時間の明確さ」に欠ける傾向があります。防御系の性格には不安要素になりうるため、実務未経験者を受け入れる体制の整った職場（例：インターン制度・育成重視・明確な評価体制）を選ぶことが重要です。
    自分の強みである「正確さ」や「粘り強さ」が発揮できる環境で、段階的にスキルと実績を積むことが、成功への近道になります。`,
  ai_tips: [
    {
      title: "基礎学習（1〜2ヶ月）",
      tips: [
        "Illustrator／Photoshopの基本操作をUdemyやYouTubeで学ぶ",
        "CanvaやFigmaで簡単なアウトプットに挑戦",
      ],
    },
    {
      title: "模擬制作と実績作り（3〜6ヶ月）",
      tips: [
        "NotionやBehanceでポートフォリオサイトを作成",
        "架空案件に取り組み「自分の色」を表現",
      ],
    },
    {
      title: "現場経験獲得（6〜12ヶ月）",
      tips: [
        "クラウドワークスやココナラで小さな案件を受注",
        "スクールの就職サポートやインターン制度を活用",
      ],
    },
    {
      title: "職場選びと長期的スキル形成",
      tips: [
        "育成体制のあるデザイン事務所や制作会社へ応募",
        "その後、UI/UXやWebデザイン、DTPなど専門性を拡張",
      ],
    },
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
      <Box mb={1}>
        <Typography variant="subtitle2" fontWeight="bold">
          質問内容
        </Typography>
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
      <Box mb={2}>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          職業との相性分析
        </Typography>
        {/* 性格分析セクションを枠で囲む */}
        <Box mb={2} p={1} bgcolor="grey.100" borderRadius={2}>
          <Box display="flex" alignItems="center" mb={1}>
            <Avatar sx={{ bgcolor: orange[500], width: 48, height: 48, mr: 2 }}>
              <PersonSearchIcon sx={{ fontSize: 32 }} />
            </Avatar>
            <Box flex={1}>
              <Typography variant="body1" fontWeight="bold">
                性格分析
              </Typography>
              <Typography variant="body2">
                {question.compatibility.personalityType}
              </Typography>
            </Box>
          </Box>
          <Box width="100%" mb={1}>
            <Typography variant="caption">
              {question.compatibility.personalityDesc}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {question.compatibility.personalityDesc2}
            </Typography>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" fontWeight="bold" mb={1}>
            {question.compatibility.occupation}の11タイプの適職評価
          </Typography>
          {/* レーダーチャート表示 */}
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="80%"
              data={question.compatibility.items.map((item) => ({
                subject: item.label,
                occupation: item.occupation,
                isDestroyer: item.isDestroyer,
              }))}
            >
              <PolarGrid />
              <PolarAngleAxis
                dataKey="subject"
                tick={(props) => {
                  const { payload, x, y, textAnchor, index } = props;
                  const item = question.compatibility.items[index];
                  const color =
                    item && item.isDestroyer ? "#ff9800" : "#1976d2";
                  return (
                    <text
                      x={x}
                      y={y}
                      textAnchor={textAnchor}
                      fill={color}
                      fontSize={12}
                    >
                      {payload && payload.value}
                    </text>
                  );
                }}
              />
              <PolarRadiusAxis angle={30} domain={[0, 4]} tickCount={5} />
              <Radar
                name=""
                dataKey="occupation"
                stroke="#ff9800"
                fill="#ff9800"
                fillOpacity={0.3}
              />
              {/* <Legend /> ラベル非表示のため削除 */}
            </RadarChart>
          </ResponsiveContainer>
          {/* 色分け説明を追加 */}
          <Box mt={1} mb={1}></Box>
          {/* 補足説明 */}
          <IndicatorSupplement />
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
        <Box mb={2} p={1} bgcolor="grey.100" borderRadius={2}>
          {question.ai_tips.map((step, idx) => (
            <React.Fragment key={idx}>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                color="primary.main"
              >
                {step.title}
              </Typography>
              <Typography variant="body2" mt={0.5} mb={1}>
                {step.tips.map((tip, i) => (
                  <React.Fragment key={i}>
                    ・{tip}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
            </React.Fragment>
          ))}
        </Box>
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

      <Box sx={{ height: "40px" }} />
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
