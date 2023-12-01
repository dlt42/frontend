import { CreatorCard, CreatorCards } from 'domain/creatorCard';
import React, { FC, useState } from 'react';

import { CreatorCard as CreatorCardComp } from './CreatorCard';

export type CreatorCardsContainerProps = {
  creatorCards: CreatorCards | null;
};

export const CreatorCardContainer: FC<CreatorCardsContainerProps> = ({
  creatorCards,
}): JSX.Element => {
  const [showing, setShowing] = useState<string | null>(null);
  return (
    <div className='flex flex-col items-center justify-between p-2'>
      {creatorCards === null ? (
        <div>No Creator Cards</div>
      ) : (
        creatorCards.map((creatorCard: CreatorCard, index: number) => (
          <CreatorCardComp
            className={
              showing === creatorCard.id
                ? ''
                : showing === null
                  ? 'show'
                  : 'hide'
            }
            key={`${index}-${creatorCard.id}`}
            creatorCard={creatorCard}
            showContent={showing === creatorCard.id}
            onClick={() => {
              setShowing(showing ? null : creatorCard.id);
            }}
          />
        ))
      )}
    </div>
  );
};
