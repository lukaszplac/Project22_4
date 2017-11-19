import { ADD_POST, ADD_POSTS, DELETE_POST, EDIT_POST, LIKES_UP, LIKES_DOWN } from './PostActions';

// Initial State
const initialState = { data: [] };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };
    case EDIT_POST :
      return {
        data: state.data.map(post => { return post.cuid === action.cuid ? Object.assign({}, post, action.post) : post }),
      };
    case LIKES_UP :
      var newPost = state.data.filter(post => post.cuid === action.cuid);
      newPost[0].likes = newPost[0].likes + 1;
      return { 
        data: state.data.map(post => { return post.cuid === action.cuid ? Object.assign({}, post, newPost) : post }),
      };

    case LIKES_DOWN :
      var newPost = state.data.filter(post => post.cuid === action.cuid);
      newPost[0].likes = newPost[0].likes - 1;
      return {
        data: state.data.map(post => { return post.cuid === action.cuid ? Object.assign({}, post, newPost) : post }),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
