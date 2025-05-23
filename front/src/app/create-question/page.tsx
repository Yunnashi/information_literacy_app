"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Container,
  Typography,
  Stack,
  Paper,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const schema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  detail: z.string().min(1, "詳細な質問は必須です"),
  value: z.string().optional(),
  energy: z.string().optional(),
  q1: z.string().min(1, "回答を選択してください"),
  q2: z.string().min(1, "回答を選択してください"),
  q3: z.string().min(1, "回答を選択してください"),
  q4: z.string().min(1, "回答を選択してください"),
  q5: z.string().min(1, "回答を選択してください"),
  q6: z.string().min(1, "回答を選択してください"),
  q7: z.string().min(1, "回答を選択してください"),
  q8: z.string().min(1, "回答を選択してください"),
  q9: z.string().min(1, "回答を選択してください"),
  q10: z.string().min(1, "回答を選択してください"),
  q11: z.string().min(1, "回答を選択してください"),
  q12: z.string().min(1, "回答を選択してください"),
  q13: z.string().min(1, "回答を選択してください"),
  q14: z.string().min(1, "回答を選択してください"),
  q15: z.string().min(1, "回答を選択してください"),
  q16: z.string().min(1, "回答を選択してください"),
});

type FormInputs = z.infer<typeof schema>;

const questions = [
  "どうやったら自分の目標や希望をかなえられるか、よく想像することがある。",
  "私はたいてい、悪い出来事を避けることに意識を集中している。",
  "私はたいてい、将来自分が成し遂げたいことに意識を集中している。",
  "どうやったら失敗をふせげるかについて、よく考える。",
  "私は、自分の理想を最優先し、自分の希望や願い・大志をかなえようと努力する タイプだと思う。",
  "自分の責任や役割を果たせないのではないかと、よく心配になる。",
  "恐れている悪い出来事が自分にふりかかってくる様子を、よく想像する。",
  "私はたいてい、人生において良い成果をあげることに意識を集中している。",
  "職場(学校)での私は、仕事(学業)で自分の理想をかなえることを目指している。",
  "どうやったら良い成績がとれるかについて、よく考える。",
  "将来どんな人間になりたいかについて、よく考える。",
  "目標とする成績をとれないのではないかと、よく心配になる。",
  "こうなったらいいなと願っていることがかなう様子を、よく想像する。",
  "職場(学校)での私は、仕事(学業)での失敗を避けることを目指している。",
  "自分が将来そうなってしまったら嫌だと思う自分像について、よく考えることが ある。",
  "私にとっては、利益を得ることよりも、損失を避けることの方が大事だ。",
];

const QuestionPage: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormInputs) => {
    // 攻撃型・防御型の合計値を計算
    const offensiveKeys = ["q1", "q3", "q5", "q8", "q9", "q10", "q11", "q13"];
    const defensiveKeys = ["q2", "q4", "q6", "q7", "q12", "q14", "q15", "q16"];
    const offensiveSum = offensiveKeys.reduce(
      (sum, key) => sum + Number(data[key as keyof FormInputs] || 0),
      0,
    );
    const defensiveSum = defensiveKeys.reduce(
      (sum, key) => sum + Number(data[key as keyof FormInputs] || 0),
      0,
    );
    let type = "";
    if (offensiveSum > defensiveSum) {
      type = "攻撃型";
    } else if (offensiveSum < defensiveSum) {
      type = "防御型";
    } else {
      type = "同点";
    }
    alert(
      `攻撃型合計: ${offensiveSum}\n防御型合計: ${defensiveSum}\nあなたは「${type}」です`,
    );
    // ここでAPI送信など
    // alert(JSON.stringify(data, null, 2));
  };

  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h6" gutterBottom>
            質問タイトル
          </Typography>
          <TextField
            fullWidth
            placeholder="〇〇になりたい！"
            helperText="あなたの目指す職業について質問のタイトル。"
            {...register("title")}
            error={!!errors.title}
            sx={{ mb: 2 }}
          />
          {errors.title && (
            <Typography color="error" variant="caption">
              {errors.title.message}
            </Typography>
          )}

          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            詳細な質問
          </Typography>
          <TextField
            fullWidth
            multiline
            minRows={3}
            placeholder="どのようなことを知りたいですか？"
            helperText="具体的な質問を投稿してください。"
            {...register("detail")}
            error={!!errors.detail}
            sx={{ mb: 2 }}
          />
          {errors.detail && (
            <Typography color="error" variant="caption">
              {errors.detail.message}
            </Typography>
          )}

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            AIによる性格分析のための質問
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 1, fontSize: "12px" }}>
            以下の16個の質問に1〜6でお答えください
          </Typography>
          <Paper
            elevation={2}
            sx={{
              px: 1,
              py: 2,
              background: "#f5f5f5",
              borderRadius: 2,
              textAlign: "center",
              mb: 2,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: "bold", mb: 0.5, fontSize: "12px" }}
            >
              回答の基準
            </Typography>
            <Stack
              spacing={0.1}
              sx={{ alignItems: "flex-start", fontSize: "12px" }}
            >
              <Box>
                <span style={{ fontWeight: 600, color: "#1976d2" }}>1:</span>{" "}
                まったくあてはまらない
              </Box>
              <Box>
                <span style={{ fontWeight: 600, color: "#1976d2" }}>2:</span>{" "}
                ほとんどあてはまらない
              </Box>
              <Box>
                <span style={{ fontWeight: 600, color: "#1976d2" }}>3:</span>{" "}
                あまりあてはまらない
              </Box>
              <Box>
                <span style={{ fontWeight: 600, color: "#1976d2" }}>4:</span>{" "}
                どちらともいえない
              </Box>
              <Box>
                <span style={{ fontWeight: 600, color: "#1976d2" }}>5:</span>{" "}
                ややあてはまる
              </Box>
              <Box>
                <span style={{ fontWeight: 600, color: "#1976d2" }}>6:</span>{" "}
                かなりあてはまる
              </Box>
              <Box>
                <span style={{ fontWeight: 600, color: "#1976d2" }}>7:</span>{" "}
                非常にあてはまる
              </Box>
            </Stack>
          </Paper>
          <Paper
            elevation={1}
            sx={{ p: 1, background: "#fafafa", borderRadius: 2, mb: 2 }}
          >
            <Stack spacing={1}>
              {questions.map((q: string, idx: number) => (
                <Box key={idx} sx={{ mb: 0.5 }}>
                  <Typography
                    sx={{ mb: 0.5, fontSize: "12px", fontWeight: 500 }}
                  >{`${idx + 1}. ${q}`}</Typography>
                  <FormControl component="fieldset" sx={{ width: "100%" }}>
                    <RadioGroup
                      row
                      aria-label={`q${idx + 1}`}
                      sx={{ fontSize: "12px" }}
                      defaultValue=""
                    >
                      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <FormControlLabel
                          key={num}
                          value={num}
                          control={
                            <Radio
                              size="small"
                              {...register(`q${idx + 1}` as keyof FormInputs, {
                                required: true,
                              })}
                            />
                          }
                          label={
                            <span style={{ fontSize: "12px" }}>{num}</span>
                          }
                          sx={{ mr: 1 }}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  {errors[`q${idx + 1}` as keyof typeof errors] && (
                    <Typography
                      color="error"
                      variant="caption"
                      sx={{ fontSize: "11px" }}
                    >
                      回答を選択してください
                    </Typography>
                  )}
                </Box>
              ))}
            </Stack>
          </Paper>

          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button variant="outlined" fullWidth onClick={() => router.back()}>
              キャンセル
            </Button>
            <Button variant="contained" color="primary" fullWidth type="submit">
              質問を投稿する
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
};

export default QuestionPage;
