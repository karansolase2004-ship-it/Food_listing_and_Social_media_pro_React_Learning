import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ( {post} ) => {

  // below PostList is the one in which createContext is stored.
  const {deletepost} = useContext(PostList);

  return(
    <div className="card post-card" style={{width: "18rem;"}}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{post.title}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      onClick={() => deletepost(post.id)}>
    <MdDelete />
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => (
    <span key={tag} className="badge text-bg-primary hashtag">{`#${tag}`}</span>
    ))}
    <div className="alert alert-success reactions" role="alert">
  This Post has been reacted by {post.reactions.likes} people.
</div>

    </div>
    </div>
  );
}

/* 
<div className="card" style={{width: "18rem;"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
*/

export default Post;