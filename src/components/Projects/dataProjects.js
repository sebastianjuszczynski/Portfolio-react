import moviesImg from '../../assets/images/movies-browser.png';
import weatherImg from '../../assets/images/weather-app.png';
import moviesVideo from '../../assets/video/movies-browser.mp4';


export const dataProjects = [
    {
        title: "Movies Browser",
        description: {
            en: "Movie browser app using external API.",
            pl: "Aplikacja do przeglądania filmów z użyciem API."
        },
        image: moviesImg,
        video: moviesVideo,
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
    video: moviesVideo,
    tech: ["html5", "css3", "javascript"],
    link: "https://sebastianjuszczynski.github.io/Weather-App/"
  },
];
