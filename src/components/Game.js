import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { loadData } from "../redux/action/detailsAction";
//shoten image size
import { smallImage } from "../util";

const Game = ({ name, release, image, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadData(id));
  };
  return (
    <StyledGame layoutId={stringPathId} onClick={loadHandler}>
      <motion.h3>{name}</motion.h3>
      <p>{release}</p>
      <Link to={`/games/${id}`}>
        <motion.img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Game;
