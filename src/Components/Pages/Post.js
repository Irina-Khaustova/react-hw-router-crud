import { useNavigate } from 'react-router-dom';

export default function Post(props) {
  let navigate = useNavigate();
  console.log(props)

  function handleClick() {
    navigate(`/posts/${props.id}`)
  }
  
    return (
      <div className="post" id={props.id} onClick={handleClick}>
        <div className="post-created" >{props.created}</div>
        <div className="post-content">{props.content}</div>
      </div>
    )
}