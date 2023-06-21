import React from "react";
import PokeCard from "./PokeCard";

const Pokemon = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <div className="pokemon">
      {pokemons?.map((pokemon) => (
        <PokeCard key={pokemon.url} url={pokemon.url} />
      ))}
    </div>
  );
};

export default Pokemon;
