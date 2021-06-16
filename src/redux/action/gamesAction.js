import axios from "axios";
import { popularGameURL, GamesURL, UpcomingURL } from "./api";

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
