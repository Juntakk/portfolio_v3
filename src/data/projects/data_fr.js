import { icons, mainIcons } from "../icons"; // Importer les icônes
import images from "../../../public/assets/images";

// Données des projets avec catégories
export const projects_fr = [
  //   {
  //     id: 1,
  //     title: "Chatbot",
  //     desc: "Chatbot alimenté par l'IA simulant des conversations humaines, exploitant le traitement du langage naturel et des systèmes backend évolutifs.",
  //     icons: [icons.python, icons.django, icons.numpy],
  //     languages: ["Python", "Django", "Numpy"],
  //     demo: "",
  //     github: "https://github.com/Juntakk/chat-bot",
  //     category: "IA",
  //     screenShots: images.chatbotScreenShot,
  //     icon: mainIcons.chatbot,
  //   },
  {
    id: 1,
    title: "Floppy Bird",
    desc: "Une version moderne du jeu classique Flappy Bird, avec des animations simples et des mécaniques de jeu.",
    icons: [icons.javascript],
    languages: ["Javascript"],
    demo: "https://floppy-bird-tau.vercel.app/",
    github: "https://github.com/Juntakk/floppy-bird",
    category: "Jeux",
    screenShots: images.floppybirdScreenshots,
    icon: mainIcons.floppybird,
  },
  {
    id: 2,
    title: "Grocerease",
    desc: "Plateforme e-commerce intuitive pour l’achat de produits d’épicerie en ligne, avec paiement sécurisé et gestion efficace des stocks via un tableau de bord administrateur.",
    icons: [icons.next, icons.shadcn, icons.tailwind],
    languages: ["Next", "Shadcn", "Tailwind"],
    demo: "https://ngdev-store.vercel.app/",
    github: "https://github.com/Juntakk/grocerease",
    category: "Web",
    screenShots: images.grocerease,
    icon: mainIcons.grocerease,
  },
  {
    id: 3,
    title: "Seeflix",
    desc: "Plateforme interactive de découverte de films avec une recherche fluide et une interface utilisateur conviviale, intégrant une gestion robuste des bases de données.",
    icons: [icons.react, icons.node, icons.mongo],
    languages: ["React", "Node", "Mongo"],
    demo: "https://seeflix.netlify.app/",
    github: "https://github.com/Juntakk/seeflix",
    category: "Web",
    screenShots: images.seeflixScreenshots,
    icon: mainIcons.seeflix,
  },
  {
    id: 4,
    title: "Steem",
    desc: "Plateforme e-commerce complète permettant la navigation, l'achat et des transactions sécurisées.",
    icons: [icons.react, icons.node, icons.mongo],
    languages: ["React", "Node", "Mongo"],
    demo: "https://steemgames.netlify.app/",
    github: "https://github.com/Juntakk/steem",
    category: "Web",
    screenShots: images.steemScreenshots,
    icon: mainIcons.steem,
  },
  {
    id: 5,
    title: "Survivors",
    desc: "Jeu de tir 2D rapide avec des vagues d'ennemis dynamiques et des contrôles réactifs pour une expérience immersive.",
    icons: [icons.cPlusPlus, icons.godot],
    languages: ["C++", "Godot"],
    demo: "",
    github: "https://github.com/Juntakk/survivors",
    category: "Jeux",
    screenShots: images.survivorsScreenshots,
    icon: mainIcons.survivors,
  },
  {
    id: 6,
    title: "RPG",
    desc: "RPG en 2D vue du dessus avec exploration, combats et quêtes, des visuels riches et un gameplay engageant.",
    icons: [icons.cPlusPlus, icons.raylib, icons.unreal],
    languages: ["C++", "Raylib", "Unreal"],
    demo: "",
    github: "https://github.com/Juntakk/mini-game-3",
    category: "Jeux",
    screenShots: images.game3ScreenShot,
    icon: mainIcons.rpg,
  },
  {
    id: 7,
    title: "Portfolio",
    desc: "Mon ancien Portfolio développé avec React, Redux et CSS, offrant une navigation fluide et une interface utilisateur moderne pour présenter mes projets et compétences de manière dynamique.",
    icons: [icons.react, icons.css, icons.javascript],
    languages: ["React", "CSS", "Javascript"],
    demo: "https://nicolasgauthier.netlify.app/",
    github: "https://github.com/Juntakk/portfolio-v2",
    category: "Web",
    screenShots: images.oldfolio,
    icon: mainIcons.oldfolio,
  },
  {
    id: 8,
    title: "Régime",
    desc: "Application de planification des repas et de suivi de la nutrition avec une interface utilisateur intuitive et une expérience utilisateur fluide.",
    icons: [icons.next, icons.tailwind, icons.shadcn],
    languages: ["Next", "Tailwind", "Shadcn"],
    demo: "https://diet-app-ten.vercel.app/",
    github: "https://github.com/Juntakk/diet_app",
    category: "Web",
    screenShots: images.dietAppScreenshot,
    icon: mainIcons.diet,
  },
  {
    id: 9,
    title: "Dino Jump",
    desc: "Un jeu simple mais addictif où vous contrôlez un dinosaure pour sauter par-dessus des obstacles, avec des animations fluides et des contrôles réactifs.",
    icons: [icons.javascript],
    languages: ["Javascript"],
    demo: "https://dino-kappa.vercel.app/",
    github: "https://github.com/Juntakk/dino",
    category: "Jeux",
    screenShots: images.dinoScreenshots,
    icon: mainIcons.dino,
  },
];
