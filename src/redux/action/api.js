//basic url
const basic_urla = "https://api.rawg.io/api/";
const API_KEY = "4778b275d7a247d5b31dae4b17a11331";

//Getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const date = new Date().getDate();
  if (date < 10) {
    return `0${date}`;
  } else {
    return date;
  }
};
const getCurrentYear = new Date().getFullYear();
const getDate = getCurrentDay();
const getMonth = getCurrentMonth();
const currentDay = `${getCurrentYear}-${getMonth}-${getDate}`;
const lastYear = `${getCurrentYear - 1}-${getMonth}-${getDate}`;
const upcomingYear = `${getCurrentYear + 1}-${getMonth}-${getDate}`;

//popular games
const popular_games = `games?dates=${lastYear},${currentDay}&key=${API_KEY}&ordering=-rating&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDay}&key=${API_KEY}&ordering=-added&page_size=10`;
const upcoming_games = `games?dates=${currentDay},${upcomingYear}&key=${API_KEY}&ordering=-releasing&page_size=10`;

export const popularGameURL = () => `${basic_urla}${popular_games}`;
export const GamesURL = () => `${basic_urla}${new_games}`;
export const UpcomingURL = () => `${basic_urla}${upcoming_games}`;

//Gaming Details
export const gamesDetailsURL = (gameid) =>
  `${basic_urla}games/${gameid}?key=${API_KEY}`;
export const gamesScreenURL = (gameid) =>
  `${basic_urla}games/${gameid}/screenshots?key=${API_KEY}`;

//game Search

export const gamesSerach = (gameName) =>
  `${basic_urla}games?search=${gameName}&key=${API_KEY}&page_size=9`;
