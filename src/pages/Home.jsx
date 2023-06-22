import React from "react";
import { useRef } from "react";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const trainerNameRef = useRef();

  const trainerName = useSelector((states) => states.trainerName);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerName(trainerNameRef.current.value.trim()));
    navigate("/pokedex");
  };

  console.log(trainerName);

  return (
    <article className="home">
      <header>
        <div className="home__content-img">
          <img className="home__img" src="/pokedex.png" alt="" />
        </div>
      </header>

      <section className="section__home">
        <h2 className="home__title">Hi Trainer!</h2>
        <p className="home_p">
          To start in this application, please, give me your trainer name.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="home__input">
            <input
              ref={trainerNameRef}
              className="home__trainer-name"
              type="text"
            />
            <button className="home__trainer-btn">Catch them all!</button>
          </div>
        </form>
      </section>

      <footer className="home__footer">
        <div className="pokeball">
          <div className="rectangle__red"></div>
          <div className="elipse1"></div>
          <div className="elipse2"></div>
          <div className="rectangle__black"></div>
        </div>
      </footer>
    </article>
  );
};

export default Home;
