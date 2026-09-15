import Post from "./Post";
import { useContext, useEffect, useState } from "react";
// this PostList belong to CreateContext 
import { PostList as Postlistdata } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const Postlist = () => {
  // this below postlist should be equal to one which u passed in value in post-list-store
  // const {postlist, fetching} = useContext(Postlistdata);

  const postlist = useLoaderData();

  return (
  <>
  {/* {fetching  && <LoadingSpinner/>}
  {!fetching && postlist.length === 0 && 
  <Welcomemessage/>}
  {!fetching && postlist.map((post) => 
    (<Post key={post.id} post={post}/>)
    )} */}
  {postlist.length === 0 && 
  <Welcomemessage/>}
  {postlist.map((post) => 
    (<Post key={post.id} post={post}/>)
    )} 
  </>
  );
}

export const postloader = () => {
  return fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => {
      // addInitialPosts(data.posts);
      return data.posts;
    })
    .catch((error) => {
      if (error.name === "AbortError") {
          console.log("Fetch request aborted.");
      } else {
          console.log(error);
      }
    });
}

export default Postlist;