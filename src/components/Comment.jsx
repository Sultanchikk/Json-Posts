import React from "react";
import "../styles/Comment.scss";

const Comment = ({ email, body }) => {
  return (
    <div className="comment">
      <h3>{email}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
