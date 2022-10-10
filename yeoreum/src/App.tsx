import { ThemeProvider } from '@emotion/react';
import theme from './common/styles/theme';
import GlobalStyle from './common/styles/global';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './common/sidebar/components/Sidebar';
import MyPage from './pages/myPage/components/MyPage';
import Main from './pages/main/components/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/mypage" element={<Sidebar component={<MyPage />} />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
