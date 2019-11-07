import React from "react";
import style from "./Post.module.css";
import { connect } from "react-redux";
import { fetchVoteAction } from "../../actions";

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
    <div className={style.post}>
      <div className={style.vote}>
        <div className={style.upvote} onClick={upvote}></div>
        <span>{post.score}</span>
        <div className={style.downvote} onClick={downvote}></div>
      </div>
      <div className={style.content}>
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
