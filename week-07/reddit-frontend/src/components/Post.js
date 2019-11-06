import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="vote">
        <div className="upvote"></div>
        <span>{post.score}</span>
        <div className="downvote"></div>
      </div>
      <div className="content">
        <span>{post.title}</span>
        <br />
        <span>{post.url}</span>
        <br />
        <span>{post.timestamp}</span>
      </div>
    </div>
  );
};

export default Post;
