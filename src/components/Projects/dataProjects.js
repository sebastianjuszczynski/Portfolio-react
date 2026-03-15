import moviesImg from '../../assets/images/movies-browser.png';
import weatherImg from '../../assets/images/weather-app.png';
import todosImg from '../../assets/images/todos-react.png';
import portfolioJSimg from '../../assets/images/portfolio-vanillaJS.png';
import MPimg from '../../assets/images/MP.png';
import organicImg from '../../assets/images/organic.png';
import restImg from '../../assets/images/rest.png';


export const dataProjects = [
    {
        title: "Movies Browser",
        description: {
            en: "Movie browser app using external API.",
            pl: "Aplikacja do przeglądania filmów z użyciem API."
        },
        image: moviesImg,
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
    tech: ["html5", "css3", "javascript"],
    link: "https://sebastianjuszczynski.github.io/Weather-App/"
  },
  {
    title: "Todo List React",
    description: {
      en: "Simple task manager built with React for adding, completing and removing tasks.",
      pl: "Prosta aplikacja do zarządzania zadaniami stworzona w React."
    },
    image: todosImg,
    tech: ["html5", "css3", "javascript", "react"],
    link: "https://sebastianjuszczynski.github.io/Todos-list-react/"
  },
  {
    title: "Portfolio Vanilla JS",
    description: {
      en: "Responsive personal portfolio built with HTML, CSS and Vanilla JavaScript.",
      pl: "Responsywne portfolio stworzone w HTML, CSS i czystym JavaScript."
    },
    image: portfolioJSimg,
    tech: ["html5", "css3", "javascript"],
    link: "https://sebastianjuszczynski.github.io/Portfolio/"
  },
    {
    title: "M&P Removals - website",
    description: {
      en: "Business website for a removals company with services and contact section.",
      pl: "Strona firmowa dla firmy przeprowadzkowej z ofertą usług i sekcją kontaktową."
    },
    image: MPimg,
    tech: ["html5", "css3", "javascript"],
    link: "https://sebastianjuszczynski.github.io/M-P-Removals---website/"
  },
      {
    title: "Organic Food - website",
    description: {
      en: "Landing page for an organic food brand with modern responsive design.",
      pl: "Landing page dla marki ekologicznej żywności z nowoczesnym designem."
    },
    image: organicImg,
    tech: ["html5", "css3", "javascript"],
    link: "https://sebastianjuszczynski.github.io/organic-website/"
  },
       {
    title: "Restaurant - website",
    description: {
      en: "Responsive restaurant website with menu, gallery and contact information.",
      pl: "Responsywna strona restauracji z menu, galerią i sekcją kontaktową."
    },
    image: restImg,
    tech: ["html5", "css3", "javascript"],
    link: "https://sebastianjuszczynski.github.io/restaurant/"
  },
];
