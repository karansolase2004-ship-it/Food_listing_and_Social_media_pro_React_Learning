import { Form, redirect } from "react-router-dom";

const Createpost = () => {

  return (
    <Form method="POST" className="create-post">

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" name="title" className="form-control" id="title" placeholder="How are you feeling today..."/>
  </div>

  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your User Id here</label>
    <input type="text" name="userId" className="form-control" id="userid" placeholder="Your user Id"/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" name="body" rows="4" className="form-control" id="body" placeholder="Tell us more about it"/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <textarea type="text" name="reactions" className="form-control" id="reactions" placeholder="Now Many people reacted to this post"/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Your Hastags Here</label>
    <textarea type="text" name="tags" className="form-control" id="tags" placeholder="Please Enter tags using multiple Space"/>
  </div>

  <button type="submit" className="btn btn-primary">Post</button>
  </Form>
  );
}

export async function CreatePostAction(data){
  console.log("Action Called");
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch('https://dummyjson.com/posts/add',{
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(
    postData
  ),
  })
  .then(res => res.json())
  .then((post) => {
  addpost(post);
  });

  return redirect("/");
}

export default Createpost;