import axios from "axios";
import { popularGameURL, GamesURL, UpcomingURL, gamesSerach } from "./api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGameURL());
  const new_games = await axios.get(GamesURL());
  const upcomingData = await axios.get(UpcomingURL());

  dispatch({
    type: "FETCH_GAME",
    payload: {
      popular: popularData.data.results,
      newGames: new_games.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const searchGames = (gameName) => async (dispatch) => {
  const searchedGames = await axios.get(gamesSerach(gameName));

  dispatch({
    type: "SEARCHED_GAME",
    payload: {
      searched: searchedGames.data.results,
    },
  });
};
