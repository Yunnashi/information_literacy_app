import React from "react";
import { Box, Typography, SxProps, Theme } from "@mui/material";

interface NewsSentimentProps {
  positive: number;
  neutral: number;
  negative: number;
  sx?: SxProps<Theme>;
}

const NewsSentiment: React.FC<NewsSentimentProps> = ({ positive, neutral, negative, sx }) => {
  return (
    <Box sx={{ ...sx }}>
      <Typography variant="body2" component="span" sx={{ marginRight: 2, color: "green" }}>
        🟢 肯定: {positive}
      </Typography>
      <Typography variant="body2" component="span" sx={{ marginRight: 2 }}>
        ⚪ 中立: {neutral}
      </Typography>
      <Typography variant="body2" component="span" sx={{ color: "red" }}>
        🔴 否定: {negative}
      </Typography>
    </Box>
  );
};

export default NewsSentiment;