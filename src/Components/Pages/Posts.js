import { useContext, useEffect } from "react";
import { Context } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import Post from './Post';

export default function Posts() {
  const { posts, getPosts } = useContext(Context);
  console.log(posts)
  let navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, [])

  function handleNewPost() {
    navigate('/posts/new');
  }

    return ( 
      <div className="posts-container">
        <button className="create-post-button" onClick={handleNewPost}>Создать пост</button>
  
      {posts.map((post) =>
          <Post className="post-created" key={post.id} id={post.id} content={post.content}/>
      )}
      
      </div>
    )
  }