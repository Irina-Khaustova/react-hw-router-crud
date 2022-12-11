import {Routes, Route} from 'react-router-dom';
import './App.css';
import Posts from './Components/Pages/Posts';
import NewPost from './Components/Pages/NewPost';
import PostView from './Components/Pages/PostView.js'
import { ContextProvider } from './Components/Context/ContextProvider';

function App() {
  
  return (
    <>
      <ContextProvider>
          <Routes>
            <Route path="/" exact element={<Posts/>}/>
            <Route path="/posts/new" element={<NewPost/>} />
            <Route path="/posts/:id" element={<PostView/>} />
            <Route path='*' element={<Posts/>} />
          </Routes>
      </ContextProvider>
      </>
  );
}

export default App;

