import moviesImg from '../../assets/images/movies-browser.png';
import weatherImg from '../../assets/images/weather-app.png';


export const dataProjects = [
    {
        title: "Movies Browser",
        description: {
            en: "Movie browser app using external API.",
            pl: "Aplikacja do przeglądania filmów z użyciem API."
        },
        image: moviesImg,
        video: "assets/video/movies-browser.mp4",
        tech: ["html5", "css3", "javascript", "react", "redux"],
        link: "https://sebastianjuszczynski.github.io/movies-browser"
    },
      {
    title: "Weather App",
    description: {
      en: "Simple weather forecast app with location search.",
      pl: "Prosta aplikacja pogodowa z wyszukiwaniem lokalizacji."
    },
    image: weatherImg,
    video: "assets/video/movies-browser.mp4",
    tech: ["html5", "css3", "javascript"],
    link: "https://sebastianjuszczynski.github.io/Weather-App/"
  },
];
