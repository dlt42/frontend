import { UUID } from './common';

export type CreatorCard = {
  id: UUID;
  name: string;
  heading: string;
  content: string;
  image: string;
};

export type CreatorCards = CreatorCard[];
