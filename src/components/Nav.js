import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//Logo
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="logo" />
        <h2>PremGames</h2>
      </Logo>
      <input type="text" />
      <button>Seacrh</button>
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
