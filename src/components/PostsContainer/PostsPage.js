//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  const data = props.data;
  
  return (
    <div className="posts-container-wrapper">
      {data.map((obj) => (
        <Post post={obj}/>
      ))}      
    </div>
  );
};

export default PostsPage;

