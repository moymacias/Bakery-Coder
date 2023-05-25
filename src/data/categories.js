import { COLORS } from "../constants/colors";
import harinasIntegrales from "../assets/harinasIntegrales.png";
import harinasPuras from "../assets/harinasPuras.png";
import otrosPanes from "../assets/otrosPanes.png";
import panesSaborizados from "../assets/panSaborizado.png";

export const CATEGORIES = [
  {
    id: "1",
    title: "Harinas Puras",
    img: harinasPuras,
    color: COLORS.primary,
    icon: "home",
  },
  {
    id: "2",
    title: "Harinas Integrales",
    img: harinasIntegrales,
    color: COLORS.secondary,
  },
  {
    id: "3",
    title: "Panes Saborizados",
    img: panesSaborizados,
    color: COLORS.tertiary,
  },
  {
    id: "4",
    title: "Otros productos de Panaderia",
    img: otrosPanes,
    color: COLORS.quaternary,
  },
];
