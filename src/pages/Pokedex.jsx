import { useEffect, useRef, useState } from "react";
import useFetch from "../hook/useFetch";
import { useSelector } from "react-redux";
import Pokemon from "../components/Pokedex/Pokemon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeaderApi from "../utils/HeaderApi";

const Pokedex = () => {
  const trainerName = useSelector((states) => states.trainerName);

  const [selectValue, setSelectValue] = useState("all-pokemons");

  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1250";
  const urlTypes = "https://pokeapi.co/api/v2/type";

  const [pokemons, getAllPokemons, hasError, setPokemons] = useFetch(url);

  const [initPage, setInitPage] = useState(1);
  const pokemonsPerPage = 20;

  const lastItem = initPage * pokemonsPerPage;
  const firstItem = lastItem - pokemonsPerPage;
  const currentPokemons = pokemons?.results.slice(firstItem, lastItem);

  const [types, getAllTypes] = useFetch(urlTypes);

  useEffect(() => {
    if (selectValue === "all-pokemons") {
      getAllPokemons();
    } else {
      axios
        .get(selectValue)
        .then((res) => {
          const data = {
            results: res.data.pokemon.map((pokeInfo) => pokeInfo.pokemon),
          };
          setPokemons(data);
        })
        .catch((err) => console.log(err));
    }
  }, [selectValue]);

  useEffect(() => {
    getAllTypes();
  }, []);

  const searchPokemon = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = searchPokemon.current.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
  };

  const handleChangeType = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <div className="pokedex">
      <HeaderApi />
      <h3 className="pokedex__welcome">
        <span className="pokedex__welcome-span">Welcome {trainerName},</span>{" "}
        you can find all pokemons here
      </h3>
      <form className="pokedex__form" onSubmit={handleSubmit}>
        <div>
          <input className="pokedex__input" ref={searchPokemon} type="text" />
          <button className="pokedex__btn">Search</button>
        </div>

        <select className="pokedex__select" onChange={handleChangeType}>
          <option className="pokedex__select-option" value="all-pokemons">
            All Pokemons
          </option>
          {types?.results.map((typeInfo) => (
            <option value={typeInfo.url} key={typeInfo.url}>
              {typeInfo.name}
            </option>
          ))}
        </select>
      </form>
      <Pokemon
        currentPokemons={currentPokemons}
        setInitPage={setInitPage}
        initPage={initPage}
        // pokemons={pokemons?.results}
        pokemonsPerPage={pokemonsPerPage}
      />
    </div>
  );
};

export default Pokedex;
