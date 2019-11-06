import React from "react";
import { connect } from "react-redux";
import { fetchVoteAction } from "../actions";

const Post = ({ post, vote }) => {
  const upvote = () => {
    vote(post.id, "upvote");
  };

  const downvote = () => {
    vote(post.id, "downvote");
  };

  const showTime = timestamp => {
    let date = new Date(timestamp * 1000);
    return date.toString();
  };

  return (
    <div className="post">
      <div className="vote">
        <div className="upvote" onClick={upvote}></div>
        <span>{post.score}</span>
        <div className="downvote" onClick={downvote}></div>
      </div>
      <div className="content">
        <span>{post.title}</span>
        <br />
        <span>{post.url}</span>
        <br />
        <span>{showTime(post.timestamp)}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    vote: (id, vote) => dispatch(fetchVoteAction(id, vote))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Post);
