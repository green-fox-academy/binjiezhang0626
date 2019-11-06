const FETCHED_POSTS = "FETCHED_POSTS";
const FETCHED_ADDPOST = "FETCHED_ADDPOST";
const FETCHED_VOTE = "FETCHED_VOTE";

const fetchPostsAction = () => {
  return async dispatch => {
    try {
      const result = await fetch(" http://localhost:3001/api/posts/", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });
      console.log(result);
      const data = await result.json();
      console.log(data);
      dispatch({
        type: FETCHED_POSTS,
        posts: data
      });
    } catch (error) {
      console.log(error);
    }
  };
};
const fetchAddPostAction = (title, url) => {
  return async dispatch => {
    const result = await fetch(" http://localhost:3001/api/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, url })
    });
    const data = await result.json();
    dispatch({
      type: FETCHED_ADDPOST,
      post: data
    });
  };
};
const fetchVoteAction = (id, vote) => {
  return async dispatch => {
    const result = await fetch(
      `http://localhost:3001/api/posts/${id}/${vote}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" }
      }
    );
    const data = await result.json();
    dispatch({
      type: FETCHED_VOTE,
      post: data
    });
  };
};

export {
  fetchPostsAction,
  fetchAddPostAction,
  fetchVoteAction,
  FETCHED_POSTS,
  FETCHED_ADDPOST,
  FETCHED_VOTE
};
