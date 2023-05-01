import React, { useState } from "react";
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

const Nav = () => {
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
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={emptySearchHandler}>
        <img src={logo} alt="logo" />
        <h2>PremGames</h2>
      </Logo>
      <form>
        <input type="text" value={textInput} onChange={changeHandler} />
        <button type="submit" onClick={searchHandler}>
          Seacrh
        </button>
      </form>
    </StyledNav>
  );
};
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
    height: 2rem;
  }
`;
export default Nav;
