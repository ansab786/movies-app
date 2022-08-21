import React from "react";
import { Pagination as PaginationReactBootstrap } from "react-bootstrap";

function Pagination({
  totalMovies,
  moviesPerPage,
  currentPage,
  handlePaginate,
}) {
  const pages = new Array(Math.ceil(totalMovies / moviesPerPage)).fill(0);
  return (
    <PaginationReactBootstrap>
      {pages.map((_value, index) => {
        const number = index + 1;
        return (
          <PaginationReactBootstrap.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePaginate(number)}
          >
            {number}
          </PaginationReactBootstrap.Item>
        );
      })}
    </PaginationReactBootstrap>
  );
}

export default Pagination;
