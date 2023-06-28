import "./styles/Paginate.css";

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
        Prev
      </button>
      <span className="number__page">{initPage}</span>
      <button
        className="btn__next"
        onClick={nextPage}
        disabled={currentPokemons?.length < pokemonsPerPage}
      >
        Next
      </button>
    </div>
  );
};

export default Paginate;
