import {
  AuctionIcon,
  MoneyIcon,
  CowIcon,
  UserIcon,
  HomeIcon,
  ExitIcon,
} from "../icons";

const optionsLogged = [
  {
    name: "Subastas",
    linksTo: "/",
    icon: AuctionIcon,
  },
  {
    name: "Menú",
    linksTo: "/sesion-iniciada",
    icon: HomeIcon,
  },
  {
    name: "Cerrar sesión",
    linksTo: "/logout",
    icon: ExitIcon,
  },
];

const optionsUnlogged = [
  {
    name: "Subastas",
    linksTo: "/",
    icon: AuctionIcon,
  },
  {
    name: "Iniciar sesión",
    linksTo: "/login",
    icon: UserIcon,
  },
  {
    name: "Registrarse",
    linksTo: "/registro",
    icon: UserIcon,
  },
];

export { optionsLogged, optionsUnlogged };
