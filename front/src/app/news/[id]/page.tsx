"use client";

import { useParams } from "next/navigation";
import { Container, Typography, Box, Button, Divider, Tab, Tabs } from "@mui/material";
import NewsSentiment from "@/app/components/NewsSentiment";
import CommentSection from "@/app/components/CommentSection";
import { useState } from "react";
import { News, ViewpointType } from "@/app/models/news";

const sampleNews: News[] = [
  {
    id: 1,
    category: 0, // ワクチン
    date: "2025年5月2日",
    title: "コロナワクチン第5世代、高齢者への優先接種開始",
    detail: "詳細なニュース内容はここに表示されます。",
    neutral_number: 12,
    positive_number: 8,
    negative_number: 4,
    details: {
      positive: {
        content: "肯定的な視点",
        link: "",
        comments: [],
      },
      neutral: {
        content: "中立的な視点",
        link: "",
        comments: [],
      },
      negative: {
        content:
          "このワクチンの開発は通常より短期間で行われ、長期的な安全性データが不足しています。一部の人々に重篤な副反応が報告されており、特定の持病を持つ人々への影響は十分に研究されていません。リスクとベネフィットの評価が不十分です。",
        link: "",
        comments: [
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
        ],
      },
    },
  },
];

const NewsDetailPage: React.FC = () => {
  const { id } = useParams();

  // ID に基づいてニュースを検索
  const news = sampleNews.find((item) => item.id === Number(id));

  const [selectedViewpoint, setSelectedViewpoint] = useState<ViewpointType>(ViewpointType.Positive);

  if (!news) {
    return (
      <Container
        maxWidth="md"
        sx={{
          padding: "40px",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">
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
        {news.detail}
      </Typography>
      <NewsSentiment
        positive={news.positive_number}
        neutral={news.neutral_number}
        negative={news.negative_number}
        sx={{ marginTop: 1 }}
      />

      {/* 視点タブ */}
      <Box sx={{ marginTop: 3, marginBottom: 2 }}>
        <Tabs
          value={selectedViewpoint}
          onChange={(event, newValue) => setSelectedViewpoint(newValue)}
          centered
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab
            label="👍 肯定的視点"
            value={ViewpointType.Positive}
            sx={{
              color: "orange",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            label="💬 中立的視点"
            value={ViewpointType.Neutral}
            sx={{
              color: "blue",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            label="⚠️ 否定的視点"
            value={ViewpointType.Negative}
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
        <Typography variant="body1">
          {news.details[selectedViewpoint].content}
        </Typography>
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
      <CommentSection comments={news.details[selectedViewpoint].comments} />

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