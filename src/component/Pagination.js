import React from "react";
import { Pagination as PRB } from "react-bootstrap";

function Pagination({
  totalMovies,
  moviesPerPage,
  currentPage,
  handlePaginate,
}) {
  const pages = new Array(Math.ceil(totalMovies / moviesPerPage)).fill(0);
  return (
    <PRB>
      {pages.map((_value, index) => {
        const number = index + 1;
        return (
          <PRB.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePaginate(number)}
          >
            {number}
          </PRB.Item>
        );
      })}
    </PRB>
  );
}

export default Pagination;
