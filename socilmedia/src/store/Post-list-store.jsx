import {  createContext, useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}

})
const postListReducer=(currPostList,action)=>{
    let newPostList= currPostList
    if(action.type==="Delete"){
        newPostList=currPostList.filter(data=>data.id!==action.payload.id)
    }else if(action.type==="AddPost"){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
}
const PostListProvider=({children})=>{
const [postList,dispatchPostlist]=useReducer(postListReducer ,defaultvalue)


const addPost=(posttitle, postbody, postid, postreactions, posttags)=>{
   dispatchPostlist({
    type:"AddPost",
    payload:{
        id:postid,
        title:posttitle,
        body:postbody,
        reactions:postreactions,
        tags:posttags
        }


   });

};


const deletePost=(id)=>{ 
    dispatchPostlist({
        type:"Delete",
        payload:{id},
    })
};

    return (
        <PostList.Provider value={{postList , deletePost, addPost}}>{children}</PostList.Provider>
    )
}
const defaultvalue=[{
id:"1",
title:"Tomorrow art",
body:"hellotomorrow is another day before reaching job so i decided to quick my career via full sto ",
reactions:2,
tags:["greet","hello","mumbai"]
},
{
    id:"2",
    title:"Yesterday art",
    body:"hellotomorrow is another day before reaching job so i decided to quick my career via full sto ",
    reactions:8,
    tags:["greet","hello","mumbai"]
    
    }
]
export default PostListProvider