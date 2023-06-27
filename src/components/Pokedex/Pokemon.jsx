import React from "react";
import PokeCard from "./PokeCard";
import Paginate from "./Paginate";

const Pokemon = ({
  currentPokemons,
  setInitPage,
  initPage,
  pokemonsPerPage,
}) => {
  return (
    <>
      <Paginate
        setInitPage={setInitPage}
        initPage={initPage}
        currentPokemons={currentPokemons}
        pokemonsPerPage={pokemonsPerPage}
      />

      <div className="pokemon">
        {currentPokemons?.map((pokemon) => (
          <PokeCard key={pokemon.url} url={pokemon.url} />
        ))}
      </div>

      <Paginate
        setInitPage={setInitPage}
        initPage={initPage}
        currentPokemons={currentPokemons}
        pokemonsPerPage={pokemonsPerPage}
      />
    </>
  );
};

export default Pokemon;
