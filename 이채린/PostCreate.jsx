import React, { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Snackbar,
  useTheme,
} from '@mui/material';

function PostCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false); // 알림 상태
  const theme = useTheme(); // 테마 접근

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !content) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    const newPost = { title, content };
    const currentPosts = JSON.parse(localStorage.getItem('posts')) || [];
    localStorage.setItem('posts', JSON.stringify([...currentPosts, newPost]));
    setTitle('');
    setContent('');
    setOpenSnackbar(true); // 알림 표시
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          marginBottom: 3,
          fontWeight: 'bold',
          color: theme.palette.primary.main, // 테마의 주 색상 사용
        }}
      >
        게시물 작성
      </Typography>
      <form onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <TextField
          name="title"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="제목"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          name="content"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="내용"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          게시물 등록
        </Button>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="게시물이 등록되었습니다."
      />
    </Container>
  );
}

export default PostCreate;
