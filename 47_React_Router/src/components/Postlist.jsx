import Post from "./Post";
import { useContext, useEffect, useState } from "react";
// this PostList belong to CreateContext 
import { PostList as Postlistdata } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  // this below postlist should be equal to one which u passed in value in post-list-store
  const {postlist, fetching} = useContext(Postlistdata);

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