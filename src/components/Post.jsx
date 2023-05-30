import React, { useState } from "react";
import "../styles/Post.scss";
import { Link } from "react-router-dom";
import avatar from "../assets/user.png";
import Comment from "./Comment";
import { Button } from "react-bootstrap";

const Post = ({ item, comments }) => {
  const [open, setOpen] = useState(false);
  const filteredComments = comments?.filter((el) => el.postId === item.id);
  console.log(filteredComments);
  return (
    <div className="post" key={item.id}>
      <div className="head">
        <Link to={`/users/${item.userId}`}>
          <img width={40} height={40} src={avatar} alt="" />
        </Link>
        <h2 className="title">{item.title}</h2>
      </div>
      <p>{item.body}</p>
      <div className="comments">
        <Button variant="outline-primary" onClick={() => setOpen(!open)}>
          Коментарии
        </Button>
        {open ? filteredComments?.map((item) => <Comment {...item} />) : ""}
      </div>
    </div>
  );
};

export default Post;
