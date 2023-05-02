import React, { useState, useCallback } from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//Logo
import logo from "../img/logo.svg";
//redux
import { useDispatch } from "react-redux";
import { searchGames } from "../redux/action/gamesAction";
//animation
import { fadeIn } from "../animation";
//particlejs
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleConfig } from "../utils/particleConfig";

const Nav = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();
  //search Handler
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(searchGames(textInput));
    setTextInput("");
  };
  const changeHandler = (e) => {
    setTextInput(e.target.value);
  };
  const emptySearchHandler = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };
  return (
    <StyledParticle>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleConfig}
      />
      <StyledNav variants={fadeIn} initial="hidden" animate="show">
        <Logo onClick={emptySearchHandler}>
          <img src={logo} alt="logo" />
          <h2>PremGames</h2>
        </Logo>
        <form>
          <input type="text" value={textInput} onChange={changeHandler} />
          <button type="submit" onClick={searchHandler}>
            Search
          </button>
        </form>
      </StyledNav>
      <Heading>
        <h1>Explore New games </h1>
      </Heading>
    </StyledParticle>
  );
};

const StyledParticle = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 80vh;
  background: #1b1b1b;
  overflow: hidden;
  z-index: 1;
`;

const StyledNav = styled(motion.div)`
  text-align: center;
  padding: 2rem 4rem;

  input {
    font-size: 1rem;
    width: 30%;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1rem;
    color: White;
    cursor: pointer;
    padding: 0.55rem 2rem;
    border: none;
    background: #23d997;
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    margin: 0.4rem 0.4rem 0rem 0rem;
    height: 2rem;
  }
  h2 {
    color: white;
  }
`;

const Heading = styled(motion.div)`
  display: block;
  margin: auto;

  line-height: 1;
  font-family: monospace;
  font-weight: bold;

  //background-image: linear-gradient(var(--deg), #e66465, #9198e5);
  background-image: url("data:image/svg+xml,<svg width='150px' height='150px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='130px' font-size='130px' clip-path='url(%23emojiClipPath)'>🎮</text></svg>");

  background-repeat: no-repeat;
  background-size: contain;

  animation: bg 2s infinite alternate;

  -webkit-background-clip: text;
  background-clip: text;
  color: rgb(0, 0, 0, 0.4);

  h1 {
    margin-top: 8rem;
    font-size: 3rem;
    text-align: center;
  }

  @keyframes bg {
    0% {
      background-position-x: 20%;
    }
    100% {
      background-position-x: 80%;
    }
  }
`;

export default Nav;
