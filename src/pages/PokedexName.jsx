import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { useEffect } from "react";

const PokedexName = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemon, hasError] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  return (
    <div>
      {hasError ? (
        <h1>This pokemon is not exist</h1>
      ) : (
        <>
          <img
            src={pokemon?.sprites.other["official-artwork"].front_default}
            alt=""
          />
          <h2>{pokemon?.name}</h2>
        </>
      )}
    </div>
  );
};

export default PokedexName;
