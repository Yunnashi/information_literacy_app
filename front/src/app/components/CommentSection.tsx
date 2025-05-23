import { Box, Typography } from "@mui/material";

interface Comment {
  author: string;
  content: string;
  likes: number;
  date: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        コメント
      </Typography>
      {comments.map((comment, index) => (
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
    </>
  );
};

export default CommentSection;