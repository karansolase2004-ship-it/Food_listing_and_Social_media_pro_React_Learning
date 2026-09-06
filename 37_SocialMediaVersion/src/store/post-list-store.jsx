import { createContext, useReducer } from "react";

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
  
  return newpostlist;
}

const Postlistprovider = ({children}) => {
  const [postlist, dispatchpostlist] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addpost = (userId, postTitle, postbody, postreactions, tags) => {
    // console.log(`${userId} ${postTitle} ${postbody} ${postreactions} ${tags}`)

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
    }

  }>
    {children}
  </PostList.Provider>
};

 const DEFAULT_POST_LIST = [
  {
    id : '1',
    title : 'Going to Mumbai',
    body : 'Hi Friends, I am going to Mumbai for my vacation. Hope to enjoy a lot. Peace out.',
    reactions : 10,
    userId : 'user-9',
    tags : ['vacation', 'Mumbai', 'Enjoying']
  },
  {
    id : '2',
    title : 'Having Vada Pav',
    body : 'Hi Friends, I am having the Crunchy and Spicy Vada pav at Delhi Gate',
    reactions : 15,
    userId : 'user-10',
    tags : ['Crunchy', 'Mouthwatering', 'Enjoying']
  }
];

export default Postlistprovider;