import React from "react";
import { Box, Typography } from "@mui/material";

const negativeItems = [
  {
    label: "ワークライフバランス",
    desc: "休暇と仕事を切り分けていないと、うつ病や不安障害の発症率が1.7倍ほど上昇し、幸福度は40%ほど下がる",
  },
  {
    label: "雇用の安定",
    desc: "不安定な賃金や勤務スケジュール、次の仕事が見つからない不安などでストレスが蓄積する。ただし高度なスキルを持った人はフリーによるメリットを得やすい",
  },
  {
    label: "労働時間",
    desc: "長時間労働は脳卒中のリスクをあげる。毎日3時間以上の残業を続けると確実に心身崩壊に向かう",
  },
  {
    label: "シフトワーク",
    desc: "体内時計のリズムを破壊し、睡眠の質が低下する。メンタルと体の両方に悪影響をもたらす",
  },
];

const positiveItems = [
  { label: "自由", desc: "仕事のコントロール権、裁量権" },
  { label: "達成", desc: "フィードバックシステムの有無" },
  { label: "明確", desc: "タスク、ビジョン、評価の明確さ" },
  { label: "多様", desc: "プロジェクト全体への関与" },
  { label: "焦点", desc: "モチベーションタイプとの一致度" },
  { label: "仲間", desc: "ソーシャルサポートの有無" },
  { label: "貢献", desc: "他人へどれだけ役立っているかが目に見える" },
];

const ListSection = ({
  title,
  color,
  items,
  mb = 2,
}: {
  title: string;
  color: string;
  items: { label: string; desc: string }[];
  mb?: number;
}) => (
  <>
    <Box display="flex" alignItems="center" mt={1} mb={1}>
      <Box
        component="span"
        sx={{
          width: 12,
          height: 12,
          bgcolor: color,
          borderRadius: "50%",
          display: "inline-block",
          mr: 1,
        }}
      />
      <Typography variant="subtitle2" fontWeight="bold" fontSize={14}>
        {title}
      </Typography>
    </Box>
    <Box component="ul" sx={{ pl: 2, mb: mb, mt: 0 }}>
      {items.map((item) => (
        <Box component="li" key={item.label}>
          <Typography variant="caption">
            <b>{item.label}</b>：{item.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  </>
);

const IndicatorSupplement = () => (
  <Box mt={2}>
    <Typography variant="caption" color="text.secondary" fontSize={13}>
      <b>補足説明</b>
    </Typography>
    <ListSection
      title="仕事の幸福を破壊する要素"
      color="#ff9800"
      items={negativeItems}
      mb={2}
    />
    <ListSection
      title="仕事の幸福につながりやすい要素"
      color="#1976d2"
      items={positiveItems}
      mb={0}
    />
  </Box>
);

export default IndicatorSupplement;
