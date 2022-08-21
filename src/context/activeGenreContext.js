import React from "react";

const CreateActiveGenreStateContext = React.createContext(undefined);
const CreateActiveGenreDispatchContext = React.createContext(undefined);

function ActiveGenreContextProvider({ children }) {
  const [activeGenre, setActiveGenre] = React.useState({
    name: "All Movies",
    _id: "1122",
  });

  const handelGenreChange = (activeGenre) => {
    setActiveGenre(activeGenre);
  };

  return (
    <CreateActiveGenreStateContext.Provider value={{ activeGenre }}>
      <CreateActiveGenreDispatchContext.Provider value={{ handelGenreChange }}>
        {children}
      </CreateActiveGenreDispatchContext.Provider>
    </CreateActiveGenreStateContext.Provider>
  );
}

const useActiveGenreStateContext = () => {
  const context = React.useContext(CreateActiveGenreStateContext);

  if (context === undefined) {
    throw Error("Create Active Genre Not Working");
  }

  return context;
};
const useActiveGenreDispatchContext = () => {
  const context = React.useContext(CreateActiveGenreDispatchContext);

  if (context === undefined) {
    throw Error("Create Active Genre Not Working");
  }

  return context;
};

const useGenreDataContext = () => {
  return [useActiveGenreStateContext(), useActiveGenreDispatchContext()];
};

export { ActiveGenreContextProvider, useGenreDataContext };
