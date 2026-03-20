import wowImage from "/src/assets/wow.webp";
import gbooksImage from "/src/assets/bookfinder.webp";
import aikidoImage from "/src/assets/aikido.webp";
import dungeon from "/src/assets/mainMenu.png";
import ani from "/src/assets/anihero.webp";
import mScrapper from "/src/assets/mschapters.webp";

export const projectsData = [
  {
    title: "Endless Dungeon",
    description: {
      en: "Turn-based RPG game with character selection and combat",
      es: "Juego RPG por turnos con selección de personajes y sistema de combate",
    },
    imgSrc: dungeon,
    link: "/projectBlog/Dungeon",
  },
  {
    title: "Manga Scrapper",
    description: {
      en: "Web App for Manga content discovery",
      es: "Aplicación Web para descubrimiento de contenido Manga",
    },
    imgSrc: mScrapper,
    link: "/projectBlog/Manga",
  },
  {
    title: "Ani Web App",
    description: {
      en: "Web App for Anime content discovery",
      es: "Aplicación Web para descubrimiento de contenido de Anime",
    },
    imgSrc: ani,
    link: "/projectBlog/Ani",
  },
  {
    title: "Book Finder",
    description: {
      en: "Implementation of Google Books API",
      es: "Implementación de la API de Google Books para búsqueda de libros",
    },
    imgSrc: gbooksImage,
    link: "/projectBlog/gBooks",
  },
  {
    title: "Aikido Mobile App",
    description: {
      en: "Mobile App for Aikido Dojo",
      es: "Aplicación móvil desarrollada para un Dojo de Aikido",
    },
    imgSrc: aikidoImage,
    link: "/projectBlog/Aikido",
  },
  {
    title: "WoW - Clone",
    description: {
      en: "Clone of World of Warcraft Website using Astro and Tailwind",
      es: "Clon de la página oficial de World of Warcraft usando Astro y Tailwind CSS",
    },
    imgSrc: wowImage,
    link: "/projectBlog/wowClone",
  },
];
