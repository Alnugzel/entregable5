import "../components/Pokedex/styles/HeaderApi.css";
import { Link } from "react-router-dom";

const HeaderApi = () => {
  return (
    <div className="headerapi">
      <div className="headerapi__container">
        <div className="headerapi__content-img">
          <Link to={"/"}>
            <img className="headerapi__img" src="/pokedex.png" alt="" />
          </Link>
        </div>
        <div className="headerapi__red"></div>
        <div className="headerapi__black"></div>
        <div className="headerapi__circles">
          <div className="headerapi__circle-1"></div>
          <div className="headerapi__circle-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderApi;
