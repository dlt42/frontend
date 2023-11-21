import { CreatorCard, CreatorCards } from 'domain/creatorCard';
import { z } from 'zod';

// API request payload
type GetCreatorCardsRequest = {
  index: number;
  length: number;
};

// API response payload
type GetCreatorCardsResponse = { data: CreatorCards };

// API response payload schema
export const creatorCardsResponseDtoSchema: z.Schema<GetCreatorCardsResponse> =
  z.object({
    data: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        heading: z.string(),
        content: z.string(),
        image: z.string(),
      })
    ),
  });

// Result
export type GetCreatorCardsOkResult = {
  status: 'ok';
  creatorCards: CreatorCard[];
};

export type GetCreatorCardsErrorResult = {
  status: 'error';
  error: string;
};

type GetCreatorCardsResult =
  | GetCreatorCardsOkResult
  | GetCreatorCardsErrorResult;

// Port
export type GetCreatorCards = (
  params: GetCreatorCardsRequest
) => Promise<GetCreatorCardsResult>;
