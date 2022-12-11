import { useContext } from "react"
import { Context } from '../Context/Context';
import { useParams, useNavigate } from "react-router-dom";
import EditPost from './EditPost';
import Post from './Post';

export default function PostView() {
  let navigate = useNavigate();
  console.log()
  const {  posts, setPosts, isEdit, setIsEdit, getPostById } = useContext(Context);
  let { id } = useParams();
  const post = getPostById(id);
  console.log(id)

  function handleEdit() {
    setIsEdit(true);
  }

  function handleDelete() {
    const newPosts = posts.filter(el => el.id !==id);
    setPosts(newPosts);
    console.log(posts)
    fetch(`http://localhost:7778/posts/${id}`,
    {
      method: "DELETE"
    })
    navigate('/posts')
  }

  function handleClose() {
    navigate('/posts');
  }
    
    return (
        !isEdit? 
      <div className="post-view">
        <Post  id={id} content={post.content}></Post>
        <div className="button-container">
          <button className="post-edit" onClick={handleEdit}>изменить</button>
          <button className="post-delete" onClick={handleDelete}>удалить</button>
          <button className="post-close" onClick={handleClose}>x</button>
        </div>
      </div>
      : <EditPost id={id}/>
    )
  }