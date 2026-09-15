import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postlist : [],
  addpost : () => {},
  deletepost : () => {},
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
  // const [fetching, setfetching] = useState(false);

  const addpost = (post) => {
    dispatchpostlist({
      type : 'ADD_POST',
      payload : post,
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
    
    /* useEffect(() => {
      setfetching(true);
      const controller = new AbortController();
      const signal = controller.signal;
  
      
  
        return () => {
          // console.log("Cleaning up UseEffect");
          controller.abort();
        }
      }, []); */

  return <PostList.Provider value={
    {
      postlist,
      addpost,
      deletepost,
    }

  }>
    {children}
  </PostList.Provider>
};


export default Postlistprovider;