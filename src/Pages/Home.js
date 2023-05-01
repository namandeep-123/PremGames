import React, { useEffect } from "react";
//Redux Tools
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../redux/action/gamesAction";
//styling
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
//components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
//Location
import { useLocation } from "react-router-dom";
//animation
import { fadeIn } from "../animation";

const Home = () => {
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.game
  );
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="switch">
        <AnimatePresence>
          {pathID && <GameDetails pathID={pathID} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  release={game.released}
                  image={game.background_image}
                  id={game.id}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              release={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              release={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              release={game.released}
              image={game.background_image}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  background: #1b1b1b;
  color: white;
  padding: 0rem 3rem;
  h2 {
    padding: 3rem 0rem;
    color: white;
  }
`;
const Games = styled(motion.div)`
  color: white;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
`;

export default Home;
