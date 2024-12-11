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
import { Favorite, Share, Add, Delete } from '@mui/icons-material'; // Delete 아이콘 추가

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // 이동 함수 사용
  const [likeStatus, setLikeStatus] = useState(posts.map(() => false));
  const [shareStatus, setShareStatus] = useState(posts.map(() => false));
  const [deleteStatus, setDeleteStatus] = useState(posts.map(() => false));

  useEffect(() => {
    const loadedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(loadedPosts);
  }, []);

  const handleCreatePost = () => {
    navigate('/postcreate'); // '/create' 경로로 이동
  };

  // 게시물 삭제 함수
  const handleDeletePost = (indexToDelete) => {
    const newPosts = posts.filter((_, index) => index !== indexToDelete); // 선택한 게시물을 제외하고 새 배열 생성
    setPosts(newPosts);
    localStorage.setItem('posts', JSON.stringify(newPosts)); // 로컬 스토리지 업데이트
  };

  // like 색상 변환
  const handleLikeClick = (index) => {
    const newLikeStatus = [...likeStatus];
    newLikeStatus[index] = !newLikeStatus[index];
    setLikeStatus(newLikeStatus);
  };

  // share 색상 변환
  const handleShareMouse = (index) => {
    const newShareStatus = [...shareStatus];
    newShareStatus[index] = !newShareStatus[index];
    setShareStatus(newShareStatus);
  };

  // delete 색상 변환
  const handleDeleteMouse = (index) => {
    const newDeleteStatus = [...deleteStatus];
    newDeleteStatus[index] = !newDeleteStatus[index];
    setDeleteStatus(newDeleteStatus);
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        position: 'relative',
        marginTop: '60px',
      }}
    >
      <Box sx={{ width: '100%', minHeight: '100vh' }}> 
        <Typography
          component="h2"
          variant="h3"
          gutterBottom
          sx={{ color: '#79d0d1',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'flex-start',
                borderBottom: '1px solid #ccc',
                padding: '20px',
              }}
        >
          게&nbsp;&nbsp;시&nbsp;&nbsp;판 
        </Typography>
        <List sx={{ width: '100%' }}>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Card key={index} variant="outlined" sx={{ marginBottom: 2,  width: '100%', marginLeft: '0px'}}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" style={{ color: likeStatus[index] ? 'red' : '#ccc' }} startIcon={<Favorite />} onClick={() => handleLikeClick(index)}>
                    Like
                  </Button>
                  <Button size="small" style={{ color: shareStatus[index] ? 'black' : '#ccc' }} 
                          startIcon={<Share />} onMouseOver={() => handleShareMouse(index)} onMouseOut={() => handleShareMouse(index)}
                  >
                    Share
                  </Button>
                  <Button size="small" style={{ color: deleteStatus[index] ? 'skyblue' : '#ccc' }} startIcon={<Delete />}
                          onClick={() => handleDeletePost(index)} onMouseOver={() => handleDeleteMouse(index)} onMouseOut={() => handleDeleteMouse(index)}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <Typography sx={{display: 'flex', flexDirection: 'center', fontSize: '40px', color: '#bbb', textAlign: 'center'}}>No posts to display.</Typography>
          )}
        </List>
      </Box>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 50, right: 260 }}
        onClick={handleCreatePost}
      >
        <Add />
      </Fab>
    </Container>
  );
}

export default PostList;
