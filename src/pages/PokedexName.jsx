import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { useEffect } from "react";
import "../components/Pokedex/styles/PokedexName.css";

const PokedexName = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemon, hasError] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  return (
    <article className="pokedexName">
      {hasError ? (
        <h1>This pokemon is not exist</h1>
      ) : (
        <>
          <header className="pokedexName_header">
            <img
              className="pokedexName_img"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>

          <section className="pokedexName__body">
            <h2>{pokemon?.name}</h2>

            <h3 className="pokedexName__name">{pokemon?.name}</h3>
            <ul className="pokedexName__types">
              {pokemon?.types.map((typeInfo) => (
                <li className="pokedexName__types-item" key={typeInfo.type.url}>
                  {typeInfo.type.name}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default PokedexName;
