import React from "react";

const Paginate = ({
  setInitPage,
  initPage,
  currentPokemons,
  pokemonsPerPage,
}) => {
  const previousPage = () => {
    setInitPage((prevPage) => prevPage - 1);
  };

  const nextPage = () => {
    setInitPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="paginate">
      <button
        className="btn__prev"
        onClick={previousPage}
        disabled={initPage === 1}
      >
        Anterior
      </button>
      <span className="number__page">{initPage}</span>
      <button
        className="btn__next"
        onClick={nextPage}
        disabled={currentPokemons?.length < pokemonsPerPage}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginate;
