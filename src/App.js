import logo from './logo.svg';
import './App.css';
import AddArticle from './components/AddArticle';
import ArticlePreviewTest from './components/ArticlePreviewTest';
import { AppContainer, Landing } from './App.style';
import { Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <AppContainer>

      <Route path="/" exact>
        <Landing>
          <h1>pintereach</h1>
          <h2>collect your [...]</h2>
          <Login />
        </Landing>
      </Route>

    </AppContainer>
  );
}

export default App;
