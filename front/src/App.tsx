import './App.css';
import Market from './components/ContentBox/pages/Market/Market';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/ContentBox/pages/Main/Main';
import ContentBox from './components/ContentBox/ContentBox';
import useWindowSize from './hooks/useWindowSize';
import { Registration } from './components/ContentBox/pages/Registration/Registration';

type UserEnv = string;
type PageFocus = string;
const App: React.FC = () => {
  
  const [userEnv, setUserEnv] = useState<UserEnv>('');
  const { width, height } = useWindowSize();
  const [pageFocus, setPageFocus] = useState<PageFocus>('main');

  useEffect(() => {
    if (typeof width === 'number') {
      if (width >= 1200) setUserEnv('desktop');
      if (width >= 744 && width < 1199) setUserEnv('tablet');
      if (width < 744) setUserEnv('mobile');
    }
  }, [width]);

  return (
    <BrowserRouter>
      <ContentBox userEnv={userEnv} pageFocus={pageFocus}>
        <Routes>
          <Route
            path="/"
            element={<Main userEnv={userEnv} setPageFocus={setPageFocus} />}
          />
          <Route
            path="/items"
            element={
              <Market
                userEnv={userEnv}
                pageFocus={pageFocus}
                setPageFocus={setPageFocus}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <Registration userEnv={userEnv} setPageFocus={setPageFocus} />
            }
          />
        </Routes>
      </ContentBox>
    </BrowserRouter>
  );
};

export default App;
