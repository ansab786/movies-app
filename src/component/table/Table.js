import React from "react";
import movieData from "../../constant/data.json";
import { useGenreDataContext } from "../../context/activeGenreContext";
import Pagination from "../Pagination";
export default function Table() {
  const [data, setData] = React.useState(movieData);
  const [order, setOrder] = React.useState("asc");
  const [{ activeGenre }] = useGenreDataContext();
  const [moviesPerPage, _setMoviesPerPage] = React.useState(3);
  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredGenreData = data.filter((movie) => {
    if (activeGenre._id === "1122") {
      return movie.genre._id !== activeGenre._id;
    }

    return movie.genre._id === activeGenre._id;
  });

  const handelDelete = (id) => {
    const deleteMovies = data.filter((movie) => {
      return movie._id !== id;
    });
    setData(deleteMovies);
  };

  const handleSort = (columnPath) => {
    order === "asc" ? setOrder("dsc") : setOrder("asc");

    // special case for genre sort
    if (columnPath === "genre") {
      order === "asc"
        ? data.sort((a, b) => {
            return a.genre.name > b.genre.name ? 1 : -1;
          })
        : data.sort((a, b) => {
            return a.genre.name < b.genre.name ? 1 : -1;
          });

      setData(data);
      return;
    }

    if (order === "asc") {
      data.sort((a, b) => {
        return a[columnPath] > b[columnPath] ? 1 : -1;
      });
    } else {
      data.sort((a, b) => {
        return a[columnPath] < b[columnPath] ? 1 : -1;
      });
    }
    setData(data);
  };

  // Pagination
  const startIndex = currentPage * moviesPerPage - moviesPerPage;
  const endIndex = startIndex + moviesPerPage - 1;
  const totalMovies = filteredGenreData.length;
  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const movieToShow = filteredGenreData.filter((movie, index) => {
    if (index >= startIndex && index <= endIndex) {
      return true;
    }
    return false;
  });

  return (
    <>
      {filteredGenreData.length === 0 ? (
        <div>No Movies in database</div>
      ) : (
        <div>
          <div>show movie {filteredGenreData.length} in table</div>
          <table className="table">
            <thead>
              <tr>
                <th onClick={() => handleSort("title")}>Title</th>
                <th onClick={() => handleSort("genre")}>Genre</th>
                <th onClick={() => handleSort("numberInStock")}>Stock</th>
                <th onClick={() => handleSort("dailyRentalRate")}>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {movieToShow.map((movie, index) => {
                return (
                  <tr key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handelDelete(movie._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            handlePaginate={handlePaginate}
            totalMovies={totalMovies}
            moviesPerPage={moviesPerPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
}
