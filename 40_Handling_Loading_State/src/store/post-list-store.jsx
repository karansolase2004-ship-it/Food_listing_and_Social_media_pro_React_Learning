import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist : [],
  addpost : () => {},
  deletepost : () => {},
  addInitialPosts : () => {},
});

const postListReducer = (currPostList, action) => {
  let newpostlist = currPostList;
  if(action.type === 'DELETE_POST')
  {
    newpostlist = currPostList.filter((post) => post.id !== action.payload.postId)
  }
  else if(action.type === 'ADD_POST')
  {
    newpostlist = [action.payload, ...currPostList];
  }
  else if(action.type === 'ADD_INITIAL_POSTS')
  {
    newpostlist = action.payload.posts;
  }
  
  return newpostlist;
}

const Postlistprovider = ({children}) => {
  const [postlist, dispatchpostlist] = useReducer(postListReducer, []);

  const addpost = (userId, postTitle, postbody, postreactions, tags) => {
    dispatchpostlist({
      type : 'ADD_POST',
      payload : {
        id : Date.now(),
        title : postTitle, 
        body : postbody, 
        reactions : postreactions, 
        userId : userId, 
        tags : tags
      }
    })
  }

  const addInitialPosts = (posts) => {
    dispatchpostlist({
      type : 'ADD_INITIAL_POSTS',
      payload : {
        posts,
      },
    });
  };

  const deletepost = (postId) => {
    // console.log(`delete post called for ${postId}`);
    dispatchpostlist({
      type : 'DELETE_POST',
      payload : {
        postId
      }
    })
  }

  return <PostList.Provider value={
    {
      postlist,
      addpost,
      deletepost,
      addInitialPosts,
    }

  }>
    {children}
  </PostList.Provider>
};


export default Postlistprovider;