import React from "react";
import { Pagination } from "react-bootstrap";

const Paginate = ({ count, setPage }) => {
  return (
    <Pagination style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, id) => (
        <Pagination.Item onClick={() => setPage(item)} key={item} active={item === id}>
          {item}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Paginate;
