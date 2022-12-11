import { useState, useContext } from "react"
import { Context } from '../Context/Context'
import { useNavigate } from 'react-router-dom';

export default function EditPost({id}) {
  let navigate = useNavigate();
  const { getPostById, posts, setPosts, setIsEdit } = useContext(Context);
  console.log(id, posts)
  const post = getPostById(id);
  console.log(post)
  const [text, setText] = useState(post.content);

  function handleChange(evt) {
    let value = evt.target.value;
    setText(value);
  }

  function handleSavePost() {
    const postNew = posts.find(post => post.id === id);
    postNew.content = text;
    setIsEdit(false);
    setPosts(posts);
    navigate(`/posts/${id}`)
  }
    
    return (
      <div className="post">
        <h2 className="edit-post-header" >редактирование</h2>
        <textarea className="edit-post-textarea" value={text} onChange={handleChange}></textarea>
        <button className="edit-post-save" onClick={handleSavePost}>сохранить</button>
      </div>
    )
  }