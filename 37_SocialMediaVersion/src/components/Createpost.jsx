import { useRef, useContext } from "react";
import { PostList } from "../store/post-list-store";

const Createpost = () => {

  const { addpost } = useContext(PostList);

  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = PostTitleElement.current.value;
    const postbody = PostBodyElement.current.value;
    const postreactions = reactionsElement.current.value;
    // tags are multiple. to store them in array we have split them
    const tags = tagsElement.current.value.split(/(\s+)/);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addpost(userId, postTitle, postbody, postreactions, tags);
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={PostTitleElement} className="form-control" id="title" placeholder="How are you feeling today..."/>
  </div>

  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your User Id here</label>
    <input type="text" ref={userIdElement} className="form-control" id="userid" placeholder="Your user Id"/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" ref={PostBodyElement} rows="4" className="form-control" id="body" placeholder="Tell us more about it"/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <textarea type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="Now Many people reacted to this post"/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Your Hastags Here</label>
    <textarea type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please Enter tags using multiple Space"/>
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
  </form>
  );
}

export default Createpost;