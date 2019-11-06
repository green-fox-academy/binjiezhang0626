const FETCHED_POSTS = "FETCHED_POSTS";
const FETCHED_ADDPOST = "FETCHED_ADDPOST";

const fetchPostsAction = () => {
  return async dispatch => {
    try {
      const result = await fetch(" http://localhost:3001/api/posts/");
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

export { fetchPostsAction, fetchAddPostAction, FETCHED_POSTS, FETCHED_ADDPOST };
