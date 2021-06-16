import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//shoten image size
import { smallImage } from "../util";

const GameDetails = ({ pathID }) => {
  const history = useHistory();
  //handlers
  const exitLoadHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //Data
  const { game, screenshot, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <Shadow className="shadow" onClick={exitLoadHandler}>
          <Detail layoutId={pathID}>
            <Stats>
              <div className="rating">
                <motion.h3>{game.name}</motion.h3>
                <p>rating : {game.rating}</p>
              </div>
              <Info>
                <h3>Platform</h3>
                <Platform>
                  {game.platforms.map((data) => (
                    <h3 style={{ padding: 10 }} key={data.platform.id}>
                      {data.platform.name}
                    </h3>
                  ))}
                </Platform>
              </Info>
            </Stats>
            <Media>
              <motion.img
                src={smallImage(game.background_image, 1280)}
                alt=""
              />
            </Media>
            <h2>Description</h2>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshot.results.map((screen) => (
                <motion.img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt=""
                />
              ))}
            </div>
          </Detail>
        </Shadow>
      )}
    </>
  );
};

const Shadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0%;
  left: 0%;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #23d997;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
  font-weight: lighter;
`;
const Platform = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  img {
    margin-left: 2rem;
  }
`;
const Media = styled(motion.div)`
  margin-top: 3rem;
  img {
    width: 100%;
  }
`;
const Description = styled(motion.div)`
  margin: 0rem 0rem 2rem 0rem;
`;
export default GameDetails;
