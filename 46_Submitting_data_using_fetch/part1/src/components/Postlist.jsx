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

  console.log("Postlist is painted");
  
  // this is stopped to not show data fetched through dummyJson API 
  /* useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts', {signal} )
      .then(res => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetching(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
            console.log("Fetch request aborted.");
        } else {
            console.log(error);
        }
      });

      return () => {
        // console.log("Cleaning up UseEffect");
        controller.abort();
      }
    }, []); */

  return (
  <>
  {fetching  && <LoadingSpinner/>}
  {!fetching && postlist.length === 0 && 
  <Welcomemessage/>}
  {!fetching && postlist.map((post) => 
    (<Post key={post.id} post={post}/>)
    )}
  </>
  );
}

export default Postlist;