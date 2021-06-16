import axios from "axios";
import { gamesDetailsURL, gamesScreenURL } from "./api";

export const loadData = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAILS",
  });
  const gamesData = await axios.get(gamesDetailsURL(id));
  const gamesScreenshot = await axios.get(gamesScreenURL(id));
  dispatch({
    type: "FETCH_GAMES_DETAILS",
    payload: {
      game: gamesData.data,
      screenshot: gamesScreenshot.data,
    },
  });
};
