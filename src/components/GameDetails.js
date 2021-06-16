import React from "react";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//shoten image size
import { smallImage } from "../util";
//images
import playstation from "../img/playstation.svg";
import apple from "../img/apple.svg";
import nintendo from "../img/nintendo.svg";
import gamepad from "../img/gamepad.svg";
import xbox from "../img/xbox.svg";
import steam from "../img/steam.svg";
import fullStar from "../img/star-full.png";
import emptyStar from "../img/star-empty.png";

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
  //Star Rating
  const starRating = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={fullStar}></img>);
      } else {
        stars.push(<img src={emptyStar} key={i} alt="star"></img>);
      }
    }
    return stars;
  };
  //platform images
  const platformImages = (platform) => {
    switch (platform) {
      case "Xbox One":
        return xbox;
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return "";
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
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
              <Rating>
                <h3>{game.name}</h3>
                <p>rating : {game.rating}</p>
                {starRating()}
              </Rating>
              <Info>
                <h3>Platform</h3>
                <Platform>
                  {game.platforms.map((data) => (
                    <img
                      style={{ padding: 10 }}
                      key={data.platform.id}
                      src={platformImages(data.platform.name)}
                    />
                  ))}
                </Platform>
              </Info>
            </Stats>
            <Media>
              <img src={smallImage(game.background_image, 1280)} alt="" />
            </Media>
            <h2>Description</h2>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshot.results.map((screen) => (
                <img
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
  position: fixed;
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
const Rating = styled(motion.div)`
  img {
    width: 2rem;
    height: 2rem;
    display: inline-block;
  }
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
