"use client";

import { useParams } from "next/navigation";
import { Container, Typography, Box, Button, Divider, Tab, Tabs } from "@mui/material";
import NewsSentiment from "@/app/components/NewsSentiment";
import { useState } from "react";

const sampleNews = {
  ワクチン: [
    {
      id: 1,
      date: "2025年5月2日",
      title: "コロナワクチン第5世代、高齢者への優先接種開始",
      content:
      "このワクチンの開発は通常より短期間で行われ、長期的な安全性データが不足しています。一部の人々に重篤な副反応が報告されており、特定の持病を持つ人々への影響は十分に研究されていません。リスクとベネフィットの評価が不十分です。",
      neutral: 12,
      positive: 8,
      negative: 4,
    },
    {
      id: 2,
      date: "2025年4月30日",
      title: "ワクチン接種率、都市部と地方の格差が拡大傾向に",
      content: "",
      neutral: 7,
      positive: 3,
      negative: 9,
    },
    {
      id: 3,
      date: "2025年4月28日",
      title: "新型インフルワクチン、来月より一般供給へ",
      content: "",
      neutral: 15,
      positive: 11,
      negative: 2,
    },
  ],
  同性婚: [
    {
      id: 4,
      date: "2025年5月1日",
      title: "同性婚法案、国会での議論が本格化",
      content: "",
      neutral: 10,
      positive: 12,
      negative: 3,
    },
  ],
  経済政策: [
    {
      id: 5,
      date: "2025年4月25日",
      title: "新しい経済政策、地方経済への影響は？",
      content: "",
      neutral: 8,
      positive: 5,
      negative: 7,
    },
  ],
};

const sampleComments = [
  {
    author: "医療倫理研究者",
    content:
      "インフォームドコンセントの観点から、リスクについてもっと明確に説明すべきです。不確実性を隠すべきではありません。",
    likes: 32,
    date: "3日前",
  },
  {
    author: "免疫学研究者",
    content:
      "特定の遺伝的背景を持つ集団での試験データが少なすぎます。より多様な集団での検証が必要です。",
    likes: 27,
    date: "4日前",
  },
];

// 視点の種類を enum で定義
enum ViewType {
  Positive = "positive",
  Neutral = "neutral",
  Negative = "negative",
}

const NewsDetailPage: React.FC = () => {
  const { id } = useParams();

  // ID に基づいてニュースを検索
  const news = Object.values(sampleNews)
    .flat()
    .find((item) => item.id === Number(id));

    const [selectedView, setSelectedView] = useState<ViewType>(ViewType.Positive);

  if (!news) {
    return (
      <Container
        maxWidth="md"
        sx={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6" >
          ニュースが見つかりません。
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {news.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {news.date}
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        詳細なニュース内容はここに表示されます。
      </Typography>
      <NewsSentiment
        positive={news.positive}
        neutral={news.neutral}
        negative={news.negative}
        sx={{ marginTop: 1 }}
      />

      {/* 視点タブ */}
      <Box sx={{ marginTop: 3, marginBottom: 2 }}>
        <Tabs
          value={selectedView}
          onChange={(event, newValue) => setSelectedView(newValue)}
          centered
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab
            label="👍 肯定的視点"
            value={ViewType.Positive}
            sx={{
              color: "orange",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            label="💬 中立的視点"
            value={ViewType.Neutral}
            sx={{
              color: "blue",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            label="⚠️ 否定的視点"
            value={ViewType.Negative}
            sx={{
              color: "red",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
        </Tabs>
      </Box>

      {/* ニュース内容 */}
      <Box
        sx={{
          backgroundColor: "#ffecec",
          padding: 2,
          borderRadius: 2,
          marginBottom: 2,
        }}
      >
        <Typography variant="body1">{news.content}</Typography>
      </Box>

      {/* リンクボタン */}
      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          marginBottom: 2,
        }}
      >
        副反応報告データベースを見る
      </Button>

      <Divider sx={{ marginY: 2 }} />

      {/* コメントセクション */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        コメント
      </Typography>
      {sampleComments.map((comment, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            {comment.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {comment.content}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            👍 {comment.likes} ・ {comment.date}
          </Typography>
        </Box>
      ))}
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
          backgroundColor: "#007bff",
          color: "#fff",
          "&:hover": { backgroundColor: "#0056b3" },
          width: "80%",
          borderRadius: "8px",
        }}
      >
        + 自分の意見を追加する
      </Button>
    </Container>
  );
};

export default NewsDetailPage;