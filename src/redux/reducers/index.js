const initialState = {
  posts: [],
  user: [],
  comments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_POSTS": {
      return {
        ...state,
        posts: [...action.payload],
      };
    }
    case "SET_COMMENTS": {
      return {
        ...state,
        comments: [...action.payload],
      };
    }
    case "SET_USER_ID": {
      console.log(action);
    }
    case "SET_USER": {
      return {
        ...state,
        user: [action.payload],
      };
    }
    default:
      return state;
  }
}
