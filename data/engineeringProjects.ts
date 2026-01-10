import { StaticImageData } from "next/image";
import sevenpng from "../public/sevenpng.png";
import sevenpng2 from "../public/sevenpng2.png";
import sevenpng3 from "../public/sevenpng3.png";
import apipiePng from "../public/apipie.png";
import apipiePng1 from "../public/apipie-1.png";
import apipiePng2 from "../public/apipie-2.png";
import apipiePng3 from "../public/apipie-3.png";
import apipiePng4 from "../public/apipie-4.png";
import daimmerGif from "../public/daimmer-macbook.png";

export type EngineeringProject = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  stack: string;
  source: string;
  live: string;
  images: StaticImageData[];
};

export const engineeringProjects: EngineeringProject[] = [
  {
    slug: "seven",
    label: "SEVEN",
    eyebrow: "Project: SEVEN",
    title: "Plan your next seven days with geolocation superpowers.",
    description:
      "SEVEN is the way to realistically plan your free time for the next 7 days. This full-stack app revolves around geolocation thanks to Mapbox and the Google Maps API, along with the Geocoder library to transform coordinates to formatted addresses.",
    stack: "React / MongoDB / Mapbox / Tailwind / Google Cloud",
    source: "https://github.com/AdDanNiTom",
    live: "http://app-seven.herokuapp.com",
    images: [sevenpng, sevenpng2, sevenpng3],
  },
  {
    slug: "apipie",
    label: "Apipie",
    eyebrow: "Project: Apipie",
    title: "The collaborative recipe book.",
    description:
      "Even though it's not as technically advanced as SEVEN, this project is my personal favourite because it was fun to build and also my first full stack app. The experience stays responsive, clean, and warm.",
    stack: "HTML / Express / Mongoose / Bootstrap",
    source: "https://github.com/AdDanNiTom",
    live: "http://apipie.herokuapp.com/",
    images: [apipiePng, apipiePng1, apipiePng2, apipiePng3, apipiePng4],
  },
  {
    slug: "daimmer",
    label: "Daimmer",
    eyebrow: "Project: Daimmer",
    title: "An eye-hand coordination game.",
    description:
      "My first build: a keyboard + pointer reflex game where headless Puppeteer-tested flows simulate tiles, teaching me DOM control and timing curves.",
    stack: "HTML / Pure CSS / Express.js / Socket-style interactions",
    source: "https://github.com/adrianarandac/daimmer",
    live: "https://adrianarandac.github.io/daimmer/",
    images: [daimmerGif],
  },
];

export const getEngineeringProject = (slug: string) =>
  engineeringProjects.find((project) => project.slug === slug);
