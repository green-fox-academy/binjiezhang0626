import { FETCHED_POSTS, FETCHED_ADDPOST, FETCHED_VOTE } from "./actions";

const initState = {
  posts: []
};
const updateState = (posts, updatedPost) => {
  posts = posts.map(post => (post.id === updatedPost.id ? updatedPost : post));
  return posts;
};

const rootReducer = (state = initState, action) => {
  if (action.type === FETCHED_POSTS) {
    return {
      posts: action.posts
    };
  }
  if (action.type === FETCHED_ADDPOST) {
    return {
      posts: [...state.posts, action.post]
    };
  }
  if (action.type === FETCHED_VOTE) {
    return {
      posts: updateState(state.posts, action.post)
    };
  }
  return state;
};
export default rootReducer;
