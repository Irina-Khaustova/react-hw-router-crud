import { useContext } from "react";
import { useState } from "react";
import { Context } from "../Context/Context";
//import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

export default function NewPost(props) {
  const { posts, setPosts } = useContext(Context);
  const [text, setText] = useState('');
  let navigate = useNavigate();

    function handleChange(evt) {
    
        let value = evt.target.value;
        setText(value);
      }

      function handleSavePost() {
        const time = new Date().getTime();
        const date = new Date(time);
        const created = date.toString();
        
        console.log(created)
        const newPost = {id: 0, content: text, created: created};
        posts.push(newPost);
        setPosts(posts);
        console.log(posts)
        fetch('http://localhost:7778/posts', {
          method: 'POST',
          body: JSON.stringify(newPost)
        })
        .then(console.log('ok'))
        console.log(newPost)
        navigate('/');
      }

    return (
      <div className="new-post">
        <textarea className="new-post-text" value={text} onChange={handleChange}/>
        <button className="edit-post-save" onClick={handleSavePost}>опубликовать</button>
      </div>
    )
  }