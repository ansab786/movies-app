import React from "react";
import { ListGroup, Tab } from "react-bootstrap";
import genreData from "../../constant/genre.json";
import { useGenreDataContext } from "../../context/activeGenreContext";

export default function List() {
  const [_activeGenre, { handleGenreChange }] = useGenreDataContext();

  const handleActiveGenreChange = (genre) => {
    handleGenreChange({
      name: genre.name,
      _id: genre._id,
    });
  };
  const handleShowAllMovies = () => {
    handleGenreChange({
      name: "All Movies",
      _id: "1122",
    });
  };

  return (
    <div>
      <Tab.Container defaultActiveKey="All Movies">
        <ListGroup>
          <ListGroup.Item
            onClick={handleShowAllMovies}
            as="li"
            action
            href="All Movies"
          >
            All Movies
          </ListGroup.Item>
          {genreData.map((genre, index) => {
            return (
              <ListGroup.Item
                as="li"
                action
                href={genre.name}
                key={index}
                onClick={() => handleActiveGenreChange(genre)}
              >
                {genre.name}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Tab.Container>
    </div>
  );
}
