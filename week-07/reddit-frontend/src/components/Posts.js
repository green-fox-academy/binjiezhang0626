import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchPostsAction } from "../actions";

const Posts = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="Posts">
      {posts.map((post, key) => (
        <Post post={post} key={key} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return { posts: state.posts };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPostsAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
