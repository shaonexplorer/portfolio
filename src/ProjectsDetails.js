// import carrent from "./assets/projects/carrent.png";
// import jobit from "./assets/projects/jobit.png";
// import tripguide from "./assets/projects/tripguide.png";
import bookShop from "./assets/projects/book_shop.jpg";
import doctor from "./assets/projects/doctor-appointment.png";

import game from "./assets/projects/game.png";

export const projectsDetails = [
  {
    name: "Book Shop",
    description:
      "The app is responsive across all devices. It features login, signup and google sign in options. Redux is used for state management of the cart functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: bookShop,
    source_code_link: "https://github.com/shaonexplorer/book-store",
    website_link: "https://calm-maamoul-d1af45.netlify.app/",
  },
  {
    name: "Doctor Appointment App",
    description:
      "This is a full stack app which features form validation, admin page with data table which includes search, filter, modify and pagination features.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: doctor,
    source_code_link: "https://github.com/shaonexplorer/doctor-appointment",
    website_link: "https://doctor-appointment-six-pied.vercel.app/",
  },
  {
    name: "Guessing word game",
    description:
      "A simple game built in react. the app is responsive across different devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/shaonexplorer/game-guess-the-word",
    website_link: "https://stupendous-piroshki-8f5543.netlify.app/",
  },
];
