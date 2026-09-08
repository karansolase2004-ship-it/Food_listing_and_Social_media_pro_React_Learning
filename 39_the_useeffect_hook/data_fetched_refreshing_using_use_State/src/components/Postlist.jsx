import Post from "./Post";
import { useContext } from "react";
// this PostList belong to CreateContext 
import { PostList as Postlistdata } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";

const Postlist = () => {
  // this below postlist should be equal to one which u passed in value in post-list-store
  const {postlist, addInitialPosts} = useContext(Postlistdata);
  const [datafetched, setdatafetched] = useState(false);

  if(!data){
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => {
      addInitialPosts(data.posts);
    });
    setdatafetched(true);
  }

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