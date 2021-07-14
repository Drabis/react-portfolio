
import gameFinder from "../../assets/thumbnails/game-finder.png";
import quizApp from "../../assets/thumbnails/quiz.png";
import weatherDash from "../../assets/thumbnails/weather-dash.png";
import employeeDir from "../../assets/thumbnails/employeeDir.png";
import smarter2barter from "../../assets/thumbnails/smarter-barter.png";
import Jamana from "../../assets/thumbnails/jamana.png"

const projectsInfo = [
  {
    title: "Smarter To Barter",
    description:
      "The Smarter to Barter application can be used to offer services and seek services.",
    repo: "https://github.com/Drabis/smarter-to-barter",
    url: "https://smarter2barter.herokuapp.com/",
    image: smarter2barter,
  },
  {
    title: "NBA Game Finer",
    description:
      "This App will assist the user with getting their favorite NBA team's most updated stats and future games ticket information.",
    repo: "https://github.com/Drabis/nba-game-locator",
    url: "https://drabis.github.io/nba-game-locator/",
    image: gameFinder,
  },
  {
    title: "Jamana Blog App",
    description:
      "This is a MERN App that allows users to post delete and save data like a blog. This Blog app promote the culture and countries in Africa to facilitate your trip there.",
    repo: "https://github.com/Drabis/Jamana",
    url: "https://jamana101.herokuapp.com",
    image: Jamana,
  },

  {
    title: "Employee Directory",
    description:
      "For this assignment, I had to create an employee directory with React. This assignment required me to break up the application's UI into components, manage component state, and respond to user events. Employee data was generated with the randomuser.me API.",
    repo: "https://github.com/Drabis/react-employee-directory",
    url: "https://drabis.github.io/react-employee-directory/",
    image: employeeDir,
  },
  {
    title: "quiz App",
    description:
      "An application that will challenge you against your peers. This quiz app will test your knowledge on Javascript and store your progress along the way so get ready to test your JavaScript.",
    repo: "https://github.com/Drabis/Code-Quiz",
    url: "https://drabis.github.io/Code-Quiz/",
    image: quizApp,
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that features dynamically updated HTML and CSS and uses the OpenWeather API to retrieve weather data for cities. Type in a city and see the current and 5-Day forecasts. City searches are persistent.",
    repo: "https://github.com/Drabis/Weather-Dashboard",
    url: "https://drabis.github.io/Weather-Dashboard/",
    image: weatherDash,
  },
];

export default projectsInfo;
