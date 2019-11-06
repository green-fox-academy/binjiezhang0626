import { FETCHED_POSTS, FETCHED_ADDPOST } from "./actions";

const initState = {
  posts: []
};

export default function(state = initState, action) {
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
  return state;
}
