import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { useEffect } from "react";
import "../components/Pokedex/styles/PokedexName.css";
import HeaderApi from "../utils/HeaderApi";
import { useNavigate } from "react-router-dom";

const PokedexName = () => {
  const { name } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  const [pokemon, getPokemon, hasError] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [name]);

  console.log(pokemon);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate(`/pokedex/`);
  };

  return (
    <>
      <HeaderApi />
      <button onClick={handleSubmit} className="btn__return">
        <i class="bx bx-arrow-back"></i>
      </button>
      <div className={`pokedexName__container ${pokemon?.types[0].type.name}`}>
        <article className="pokedexName">
          {hasError ? (
            <h1 className="error__msg">This pokemon is not exist 😣</h1>
          ) : (
            <>
              <header
                className={`pokedexName__header type-${pokemon?.types[0].type.name}`}
              >
                <div className="prueba">
                  <img
                    className="pokedexName__img"
                    src={
                      pokemon?.sprites.other["official-artwork"].front_default
                    }
                    alt=""
                  />
                </div>
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
                <div className="pokedexName__content">
                  <div>
                    <h4>Type</h4>
                    <ul className="pokedexName__types">
                      {pokemon?.types.map((typeInfo) => (
                        <li
                          className={`pokedexName__types-item type-${typeInfo.type.name}`}
                          key={typeInfo.type.url}
                        >
                          {typeInfo.type.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Abilities</h4>
                    <ul className="pokedexName__abilities">
                      {pokemon?.abilities.map((abiliti) => (
                        <li
                          className="pokedexName__abilities-item"
                          key={abiliti.ability.url}
                        >
                          {abiliti.ability.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section className="pokedexName__stats-img">
                <div className="pokedexName__separator">
                  <img src="/stats.png" alt="stats" />
                </div>

                <ul className="pokedexName__stats-values">
                  {pokemon?.stats.map((sta) => (
                    <>
                      <li className="pokedexName__stats" key={sta.stat.url}>
                        <span>{sta.stat.name}</span>{" "}
                        <span>{sta.base_stat}</span>
                      </li>
                      <div className="p1">
                        <div
                          className="p2"
                          style={{
                            width: ((sta.base_stat * 150) / 100) * 1.5,
                          }}
                        ></div>
                      </div>
                    </>
                  ))}
                </ul>
              </section>
            </>
          )}
        </article>

        {hasError ? (
          ""
        ) : (
          <section className="pokedexName__moves">
            <div className="pokedexName__separator">
              <img
                className="pokedexName__movements-img"
                src="/movements.png"
                alt="movements"
              />
            </div>
            {pokemon?.moves.map((movement) => (
              <p className="pokedexName__moves-item" key={movement.move.url}>
                {movement.move.name}
              </p>
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default PokedexName;
