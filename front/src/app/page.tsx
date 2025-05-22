"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography, Stack, Paper, Button } from "@mui/material";
import NewsSentiment from "./components/NewsSentiment";

const sampleNews = {
  ワクチン: [
    {
      id: 1,
      date: "2025年5月2日",
      title: "コロナワクチン第5世代、高齢者への優先接種開始",
      neutral: 12,
      positive: 8,
      negative: 4,
    },
    {
      id: 2,
      date: "2025年4月30日",
      title: "ワクチン接種率、都市部と地方の格差が拡大傾向に",
      neutral: 7,
      positive: 3,
      negative: 9,
    },
    {
      id: 3,
      date: "2025年4月28日",
      title: "新型インフルワクチン、来月より一般供給へ",
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
      neutral: 8,
      positive: 5,
      negative: 7,
    },
  ],
};

const HomePage: React.FC = () => {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState<keyof typeof sampleNews>("ワクチン");

  return (
    <Container maxWidth="md" style={{ padding: "20px" }}>
      {/* 注目のトピック */}
      <Typography variant="h5" gutterBottom>
        注目のトピック
      </Typography>
      <Stack direction="row" spacing={2} sx={{ marginBottom: 3 }}>
        {Object.keys(sampleNews).map((topic) => (
          <Button
            key={topic}
            variant={selectedTopic === topic ? "contained" : "outlined"}
            onClick={() => setSelectedTopic(topic as keyof typeof sampleNews)}
          >
            {topic}
          </Button>
        ))}
      </Stack>

      {/* トピックに応じたニュース */}
      <Typography variant="h6" gutterBottom>
        {selectedTopic} に関する最新ニュース
      </Typography>
      <Stack spacing={2}>
        {sampleNews[selectedTopic].map((news, idx) => (
          <Paper
            key={idx}
            elevation={3}
            onClick={() => router.push(`/news/${news.id}`)}
            sx={{
              padding: 2,
              borderRadius: 2,
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {news.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {news.date}
            </Typography>
            <NewsSentiment
              positive={news.positive}
              neutral={news.neutral}
              negative={news.negative}
              sx={{ marginTop: 1 }}
            />
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};

export default HomePage;