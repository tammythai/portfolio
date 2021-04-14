import React from "react";
import Home from "./pages/Home";
import LikedSongs from "./pages/LikedSongs";
import Browse from "./pages/Browse";
import Radio from "./pages/Radio";
import Artists from "./pages/Artists";
import Albums from "./pages/Albums";
import Playlist from "./components/Playlist";
import Healthwise from "./projects/Healthwise";
import Paciolan from "./projects/Paciolan";
import paciolan from "./images/paciolan.png";
import healthwise from "./images/healthwise.png";

export const projectRoutes = [
  {
    title: "Paciolan - Inventory in Distress",
    description:
      "React/Node.js project creating a sign-up portal for increasing ticket sales tailored to customers",
    image: paciolan,
    path: "/paciolan",
    main: () => <Paciolan />,
  },
  {
    title: "Healthwise - Mobile App/Admin Dashboard",
    description:
      "Angular project involving IoT and healthcare which focused on user provided data to generate better health solutions",
    image: healthwise,
    path: "/healthwise",
    main: () => <Healthwise />,
  },
];

export const navRoutes = [
  {
    path: "/home",
    title: "Home",
    main: () => <Home />,
  },
  {
    path: "/browse",
    title: "Browse",
    main: () => <Browse projects={projectRoutes} />,
  },
  {
    path: "/radio",
    title: "Radio",
    main: () => <Radio />,
  },
];

export const libraryRoutes = [
  {
    path: "/liked-songs",
    title: "Liked Songs",
    main: () => <LikedSongs />,
  },
  {
    path: "/artists",
    title: "Artists",
    main: () => <Artists />,
  },
  {
    path: "/albums",
    title: "Albums",
    main: () => <Albums />,
  },
];

export const playlistsRoutes = [
  {
    path: "/playlist/to-learn",
    title: "To learn",
    main: () => <Playlist playlistId="7AhOv6H9IkZqAR5wRYpNxR" />,
  },
  {
    path: "/playlist/feb-21",
    title: "feb '21",
    main: () => <Playlist playlistId="2FkEoyPkOGFEbiIwUW7bz7" />,
  },
  {
    path: "/playlist/top-songs-2020",
    title: "Your Top...",
    main: () => <Playlist playlistId="37i9dQZF1EMh8ohlGzGpOf" />,
  },
];

export const routesList = [
  navRoutes,
  libraryRoutes,
  playlistsRoutes,
  projectRoutes,
];
