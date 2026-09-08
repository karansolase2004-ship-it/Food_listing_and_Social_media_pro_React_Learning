import Post from "./Post";
import { useContext, useEffect, useState } from "react";
// this PostList belong to CreateContext 
import { PostList as Postlistdata } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  // this below postlist should be equal to one which u passed in value in post-list-store
  const {postlist, addInitialPosts} = useContext(Postlistdata);
  const [fetching, setfetching] = useState(false);
  
  useEffect(() => {
    setfetching(true);
    console.log("fetched Started");
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addInitialPosts(data.posts);
        setfetching(false);
        console.log("fetched Returned");
      });
      console.log("fetched ended");
    }, []);

  return (
  <>
  { fetching  &&  <LoadingSpinner/>}
  {!fetching && postlist.length === 0 && 
  <Welcomemessage/>}
  {!fetching && postlist.map((post) => 
    (<Post key={post.id} post={post}/>)
    )}
  </>
  );
}

export default Postlist;