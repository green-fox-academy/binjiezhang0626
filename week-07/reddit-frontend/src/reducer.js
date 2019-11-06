import { FETCHED_POSTS } from "./actions";

const initState = {
  posts: []
};

export default function(state = initState, action) {
  if (action.type === FETCHED_POSTS) {
    return {
      posts: action.posts
    };
  }
  return state;
}
