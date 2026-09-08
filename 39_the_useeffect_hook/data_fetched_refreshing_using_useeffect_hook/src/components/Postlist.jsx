import Post from "./Post";
import { useContext, useEffect } from "react";
// this PostList belong to CreateContext 
import { PostList as Postlistdata } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";

const Postlist = () => {
  // this below postlist should be equal to one which u passed in value in post-list-store
  const {postlist, addInitialPosts} = useContext(Postlistdata);

  useEffect(() => {
     fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts);
    });
  }, []);

  return (
  <>
  {postlist.length === 0 && 
  <Welcomemessage/>}
  {postlist.map((post) => 
    (<Post key={post.id} post={post}/>)
    )}
  </>
  );
}

export default Postlist;