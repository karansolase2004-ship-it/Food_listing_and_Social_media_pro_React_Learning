import Post from "./Post";
import { useContext } from "react";
// this PostList belong to CreateContext 
import { PostList as Postlistdata } from "../store/post-list-store";

const Postlist = () => {
  // this below postlist should be equal to one which u passed in value in post-list-store
  const {postlist} = useContext(Postlistdata);

  return (
  <>
  {postlist.map((post) => 
    (<Post key={post.id} post={post}/>)
    )}
  </>
  );
}

export default Postlist;