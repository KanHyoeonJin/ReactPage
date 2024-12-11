import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Box,
  Container,
  CssBaseline,
  Typography,
} from '@mui/material/';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Material-UI를 사용한 테마 설정
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

function LoginPage() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (userId === 'root' && password === '1234') {
      navigate('/admin'); // 관리자 페이지로 이동
    } else {
      const existingUsers = JSON.parse(localStorage.getItem('userData')) || [];
      const userExists = existingUsers.some(
        (user) => user.userId === userId && user.password === password
      );
      if (userExists) {
        alert('로그인 되었습니다!');
        navigate('/complete'); // 로그인 완료시 로그인 완료 페이지로 이동
      } else {
        alert('해당 아이디는 존재하지 않습니다.');
      }
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup'); // 회원가입 페이지로 이동
  };

  // 테마와 스타일이 적용된 컴포넌트 렌더링
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userId"
              label="아이디"
              name="userId"
              autoComplete="userId"
              autoFocus
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              로그인
            </Button>
            <Button
              type="button"
              fullWidth
              variant="outlined"
              sx={{ mt: 1, mb: 2 }}
              onClick={handleSignUpRedirect}
            >
              회원가입
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
