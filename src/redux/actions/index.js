export const userAction = (id) => ({ type: "SET_USER_ID", payload: id });
export const userDetailsAction = (user) => ({ type: "SET_USER", payload: user });

export const postsAction = (posts) => ({ type: "SET_POSTS", payload: posts });

export const commentsAction = (comments) => ({ type: "SET_COMMENTS", payload: comments });
