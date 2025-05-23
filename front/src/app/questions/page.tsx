"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";

// サンプル質問データ
const sampleQuestions = [
  {
    id: 1,
    title: "デザイン未経験でも仕事に就けますか？",
    created_at: "2025-05-20",
    ai_keywords: [
      { label: "未経験", value: "未経験" },
      { label: "デザイン職", value: "デザイン職" },
      { label: "ポートフォリオ", value: "ポートフォリオ" },
    ],
  },
  {
    id: 2,
    title: "Webデザイナーになるには？",
    created_at: "2025-05-18",
    ai_keywords: [
      { label: "Webデザイン", value: "Webデザイン" },
      { label: "スキル", value: "スキル" },
      { label: "未経験", value: "未経験" },
    ],
  },
  {
    id: 3,
    title: "未経験コーダーに必要なスキル",
    created_at: "2025-05-15",
    ai_keywords: [
      { label: "コーディング", value: "コーディング" },
      { label: "未経験", value: "未経験" },
      { label: "学習方法", value: "学習方法" },
    ],
  },
  {
    id: 4,
    title: "フリーランスデザイナーの働き方",
    created_at: "2025-05-10",
    ai_keywords: [
      { label: "フリーランス", value: "フリーランス" },
      { label: "デザイン職", value: "デザイン職" },
      { label: "働き方", value: "働き方" },
    ],
  },
];

const getAllTags = (questions: typeof sampleQuestions) => {
  const tagSet = new Set<string>();
  questions.forEach((q) => q.ai_keywords.forEach((kw) => tagSet.add(kw.value)));
  return Array.from(tagSet);
};

const QuestionsListPage = () => {
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = useMemo(() => getAllTags(sampleQuestions), []);

  const filteredQuestions = useMemo(() => {
    if (!selectedTag) return sampleQuestions;
    return sampleQuestions.filter((q) =>
      q.ai_keywords.some((kw) => kw.value === selectedTag),
    );
  }, [selectedTag]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* タグ絞り込みサブタイトル */}
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        タグで絞り込む
      </Typography>
      {/* タグ絞り込み */}
      <Box mb={3}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip
            icon={<TagIcon />}
            label="すべて"
            color={!selectedTag ? "primary" : "default"}
            onClick={() => setSelectedTag(null)}
            sx={{ mb: 1 }}
          />
          {allTags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              color={selectedTag === tag ? "primary" : "default"}
              onClick={() => setSelectedTag(tag)}
              sx={{ mb: 1 }}
            />
          ))}
        </Stack>
      </Box>
      {/* 質問一覧サブタイトル */}
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        職業に関する質問一覧
      </Typography>
      {/* 質問一覧 */}
      <Grid container spacing={2}>
        {filteredQuestions.map((q) => (
          <Grid key={q.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card
              variant="outlined"
              sx={{ height: "100%", cursor: "pointer" }}
              onClick={() => router.push(`/questions/${q.id}`)}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    mb={0.5}
                  >
                    投稿日: {q.created_at}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {q.title}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {q.ai_keywords.map((kw) => (
                      <Chip
                        key={kw.value}
                        label={kw.label}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 0.5 }}
                      />
                    ))}
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        {filteredQuestions.length === 0 && (
          <Grid size={{ xs: 12 }}>
            <Typography color="text.secondary" align="center">
              該当する質問がありません。
            </Typography>
          </Grid>
        )}
      </Grid>
      <Box sx={{ height: "40px" }} />
      {/* 質問ボタン */}
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
        onClick={() => router.push("/create-question")}
      >
        + 職業に関する質問を追加する
      </Button>
    </Container>
  );
};

export default QuestionsListPage;
