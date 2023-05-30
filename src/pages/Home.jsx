import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import "../styles/Home.scss";
import Navbar from "../components/Navbar";
import Paginate from "../components/Paginate";
import SortList from "../components/SortList";
import { Spinner } from "react-bootstrap";
// import { userAction } from '../redux/actions';

const Home = () => {
  const { posts, comments } = useSelector((state) => state);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("Выберите...");

  const params = {
    limit: limit,
    page: page,
    id: 1,
    order: "desc",
    sortType: sortType?.sortBy,
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "LOAD_DATA", payload: params });
    window.scrollTo(0, 0);
  }, [page, sortType]);

  return (
    <>
      <div className="container">
        <Navbar />
        <SortList setSortType={setSortType} sortType={sortType} />
        {posts.length >= 1 ? (
          <div className="posts">
            {posts?.map((item, i) => (
              <Post item={item} comments={comments} key={i} />
            ))}
          </div>
        ) : (
          <div className="spinner">
            <Spinner
              style={{ width: "4rem", height: "4rem" }}
              animation="border"
              variant="primary"
            />
          </div>
        )}
        {posts.length >= 1 && <Paginate setPage={setPage} count={10} />}
      </div>
    </>
  );
};

export default Home;
