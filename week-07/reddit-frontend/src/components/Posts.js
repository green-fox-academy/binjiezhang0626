import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import { fetchPostsAction } from "../actions";

const Posts = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="Posts">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
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
