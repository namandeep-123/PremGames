const initstate = {
  game: { platforms: [] },
  screenshot: { results: [] },
  isLoading: true,
};

const detailsReducers = (state = initstate, action) => {
  switch (action.type) {
    case "FETCH_GAMES_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailsReducers;
