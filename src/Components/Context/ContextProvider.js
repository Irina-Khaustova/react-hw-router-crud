import { useEffect, useState } from "react"
import { Context } from "./Context"

export function ContextProvider(props) {
    const [posts, setPosts] = useState([]);
    const [isEdit, setIsEdit] = useState(false);

    function getPosts() {
      fetch('http://localhost:7778/posts')
      .then(response => response.json())
      .then((posts) => {
        setPosts(posts);
        console.log(posts);
      })
    }

    useEffect(()=> getPosts(),[])

    function getPostById(id){
      console.log(posts[0].id === id);
      console.log(posts.find((i) => i.id === id))
      const post =  posts.find(i => i.id === id);
      return post;
    }


    return (
      <Context.Provider value={{posts, setPosts, getPosts, getPostById, isEdit, setIsEdit}}>
        {props.children}
      </Context.Provider>
    )
  }