import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import profile from "../assets/user.png";
import Post from "../components/Post";
import "../styles/UserDetails.scss";
import { Button, Spinner } from "react-bootstrap";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, user, comments } = useSelector((state) => state);
  const filteredPosts = posts?.filter((item, i) => item.userId === +id);
  // console.log("FILTER", filteredPosts);
  const params = {
    id,
  };
  useEffect(() => {
    dispatch({ type: "LOAD_DATA", payload: params });
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="user-details">
      <div className="content">
        {posts.length >= 1 ? (
          <Link style={{ textDecoration: "none" }} to="/">
            <Button variant="outline-primary">Назад</Button>
          </Link>
        ) : (
          ""
        )}
        {user?.map((item) => (
          <div className="user">
            <div className="user-header">
              <img width={50} height={50} src={profile} alt="" />
              <h3>{item?.name}</h3>
            </div>
            <p>
              <span>Email:</span> {item?.email}
            </p>
            <b>
              <span>Phone:</span> {item?.phone}
            </b>
          </div>
        ))}
      </div>
      {posts?.length >= 1 ? (
        <div className="posts">
          {filteredPosts?.map((item) => (
            <Post item={item} comments={comments} />
          ))}
        </div>
      ) : (
        <div className="spinner">
          <Spinner style={{ width: "4rem", height: "4rem" }} animation="border" variant="primary" />
        </div>
      )}
    </div>
  );
};

export default UserDetails;
