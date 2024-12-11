import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 라우터를 사용하는 훅
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  Box,
  Fab,
} from '@mui/material';
import { Favorite, Share, Add } from '@mui/icons-material';

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // 이동 함수 사용

  useEffect(() => {
    const loadedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(loadedPosts);
  }, []);

  const handleCreatePost = () => {
    navigate('/post'); // '/create' 경로로 이동
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative', // 상대적 위치 설정
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 600 }}>
        <Typography
          component="h2"
          variant="h6"
          gutterBottom
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          게시물 목록
        </Typography>
        <List sx={{ width: '100%' }}>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Card key={index} variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" startIcon={<Favorite />}>
                    Like
                  </Button>
                  <Button size="small" color="primary" startIcon={<Share />}>
                    Share
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography>No posts to display.</Typography>
          )}
        </List>
      </Box>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'absolute', bottom: 16, right: 1 }}
        onClick={handleCreatePost}
      >
        <Add />
      </Fab>
    </Container>
  );
}

export default PostList;
