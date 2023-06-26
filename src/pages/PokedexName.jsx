import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { useEffect } from "react";
import "../components/Pokedex/styles/PokedexName.css";
import HeaderApi from "../utils/HeaderApi";

const PokedexName = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemon, hasError] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  console.log(pokemon);

  return (
    <>
      <HeaderApi />
      <div className="pokedexName__container">
        <article className="pokedexName">
          {hasError ? (
            <h1>This pokemon is not exist</h1>
          ) : (
            <>
              <header className="pokedexName_header">
                <img
                  className="pokedexName__img"
                  src={pokemon?.sprites.other["official-artwork"].front_default}
                  alt=""
                />
              </header>
              <div className="pokedexName__id">
                <h1> #{pokemon?.id}</h1>
              </div>

              <section className="pokedexName__body">
                <h2 className="pokedexName__name">{pokemon?.name}</h2>
                <div className="pokedexName__sizes">
                  <p>
                    <span>weight</span> <span>{pokemon?.weight}</span>
                  </p>
                  <p>
                    <span>height</span> <span>{pokemon?.height}</span>
                  </p>
                </div>
                <ul className="pokedexName__types">
                  {pokemon?.types.map((typeInfo) => (
                    <li
                      className="pokedexName__types-item"
                      key={typeInfo.type.url}
                    >
                      {typeInfo.type.name}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="pokedexName__stats-img">
                <div>
                  <img src="/stats.png" alt="stats" />
                </div>

                <ul>
                  <li>
                    <span>{pokemon?.stats[0].stat.name}</span>{" "}
                    <span>{pokemon?.stats[0].base_stat}</span>
                  </li>
                  <li>
                    <span>{pokemon?.stats[1].stat.name}</span>{" "}
                    <span>{pokemon?.stats[1].base_stat}</span>
                  </li>
                  <li>
                    <span>{pokemon?.stats[2].stat.name}</span>{" "}
                    <span>{pokemon?.stats[2].base_stat}</span>
                  </li>
                  <li>
                    <span>{pokemon?.stats[5].stat.name}</span>{" "}
                    <span>{pokemon?.stats[5].base_stat}</span>
                  </li>
                </ul>
              </section>
            </>
          )}
        </article>
      </div>
    </>
  );
};

export default PokedexName;
