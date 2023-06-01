import { StaticImageData } from "next/image";

interface _Card {
  header: string;
  description: string;
  cardImage: StaticImageData;
}

export interface Cards {
  image: StaticImageData;
  cards: Array<_Card>;
}
