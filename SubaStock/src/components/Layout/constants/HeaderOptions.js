import { AuctionIcon, MoneyIcon, CowIcon, UserIcon } from "../icons";

const options = [
  {
    name: "Subastas",
    linksTo: "/",
    icon: AuctionIcon,
  },
  {
    name: "Subastar",
    linksTo: "/subastar",
    icon: MoneyIcon,
  },
  {
    name: "Mis Animales",
    linksTo: "/ver-animales",
    icon: CowIcon,
  },
  {
    name: "Iniciar",
    linksTo: "/login",
    icon: UserIcon,
  },
];

export default options;
