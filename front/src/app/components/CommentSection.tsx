import { Box, Typography, Chip } from "@mui/material";

interface Comment {
  author: string;
  content: string;
  date: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <>
      <Box mb={2}>
        <Typography variant="subtitle2" fontWeight="bold" mb={1}>
          コメント
        </Typography>
        {comments.map((c, i) => {
          let chipColor:
            | "primary"
            | "success"
            | "warning"
            | "error"
            | "default"
            | undefined = undefined;
          switch (c.date) {
            case "肯定的":
              chipColor = "success";
              break;
            case "中立的":
              chipColor = "warning";
              break;
            case "否定的":
              chipColor = "default";
              break;
            default:
              chipColor = undefined;
          }
          return (
            <Box key={i} mb={1}>
              <Typography variant="body2" fontWeight="bold">
                {c.author}
              </Typography>
              <Box display="flex" alignItems="center" mb={0.5}>
                <Typography variant="caption" color="text.secondary" mr={1}>
                  AI判定:
                </Typography>
                <Chip
                  label={c.date}
                  size="small"
                  color={chipColor}
                  variant="outlined"
                />
              </Box>
              <Typography variant="body2">{c.content}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default CommentSection;
