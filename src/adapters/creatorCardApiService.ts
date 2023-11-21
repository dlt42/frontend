import { getQueryString } from '../global/request';
import { getErrorMessage } from '../global/util';
import { validateResponse } from '../global/validate';
import {
  creatorCardsResponseDtoSchema,
  GetCreatorCards,
  GetCreatorCardsErrorResult,
  GetCreatorCardsOkResult,
} from '../ports/creatorCardService';

const baseUrl = 'data'; //'https://www.livelink.ai/api';

export const getCreatorCards: GetCreatorCards = async (params) => {
  const queryString = getQueryString(params);
  const url = `${baseUrl}/creatorCards${queryString.replace('?', '-')}.json`;
  const response = await fetch(url, {
    method: 'GET',
  })
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const validationResult = validateResponse(
        creatorCardsResponseDtoSchema,
        await res.json()
      );
      if (validationResult.isErr) {
        console.log(validationResult.error);
        throw new Error(validationResult.error.join(', '));
      }
      const result: GetCreatorCardsOkResult = {
        status: 'ok',
        creatorCards: validationResult.value.data,
      };
      return result;
    })
    .catch((err) => {
      console.log(err);
      const result: GetCreatorCardsErrorResult = {
        status: 'error',
        error: getErrorMessage(err),
      };
      return result;
    });
  return Promise.resolve(response);
};
