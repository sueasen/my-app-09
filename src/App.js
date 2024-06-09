import { appRouter } from './pages/AppRouter';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
// css 追加
import './App.css';

// import ColorText1 from './components/ColorText1';
// import ColorText2 from './components/ColorText2';
import Title1 from './components/Title1';
import { AuthContextProvider } from './contexts/AuthContext';

// ページ情報を定義して appRouter に設定
const pages = [
  { key: 'Home', path: '/', element: <Home /> },
  { key: 'Page1', path: '/page1', element: <Page1 /> },
  { key: 'Page2', path: '/page2', element: <Page2 text="text sample" /> },
  { key: 'Page3', path: '/page3', element: <Page3 /> },
  { key: 'Page4', path: '/page4', element: <Page4 /> },
  { key: 'Page5', path: '/page5', element: <Page5 /> },
];
const router = appRouter(pages);

const App = () => {
  const styles = {
    color: 'blue',
    fontSize: '20px',
  };

  return (
    <>
      <AuthContextProvider>
        {router.navbarLink}
        {/* 位置調整で main で括る */}
        <main>
          <Title1
            h1text={'Hello World'}
            h1style={styles}
            divstyle={{ color: 'pink', fontSize: '18px' }}
          >
            <p>App.jsx</p>
          </Title1>

          {/* <h1 style={styles}>Hello World</h1> */}
          {/* <p style={{ color: 'pink', fontSize: '18px' }}>App.jsx</p> */}
          {/* <ColorText1
          color="blue"
          fontSize="30px"
          text="color text1 です"
        ></ColorText1>
        <ColorText2 color="red" fontSize="30px">
          <p>text2のやつ</p>
          <button>text2のやつ</button>
        </ColorText2> */}

          {router.browserRouter}
        </main>
      </AuthContextProvider>
    </>
  );
};

export default App;
