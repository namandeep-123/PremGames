import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { loadData } from "../redux/action/detailsAction";
//shoten image size
import { smallImage } from "../util";
//animation
import { popup } from "../animation";

const Game = ({ name, release, image, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadData(id));
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadHandler}
    >
      <Link to={`/games/${id}`} style={{ textDecoration: "none" }}>
        <h3>{name}</h3>
        <p>{release}</p>

        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  background: #121212;
  cursor: pointer;
  color: white;
  overflow: hidden;
  text-decoration: none;
  h3,
  p {
    color: white;
  }
  img {
    width: 100%;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
