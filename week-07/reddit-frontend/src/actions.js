const FETCHED_POSTS = "FETCHED_POSTS";

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

export { fetchPostsAction, FETCHED_POSTS };
