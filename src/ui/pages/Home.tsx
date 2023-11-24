import React, { FC, useCallback, useEffect, useState } from 'react';

import { getCreatorCards } from '../../adapters/creatorCardApiService';
import { CreatorCards } from '../../domain/creatorCard';
import { CreatorCardContainer, Header } from '../components';
import { Search } from '../components/Search';

const HomePage: FC = (): JSX.Element => {
  const [creatorCards, setCreatorCards] = useState<CreatorCards | null>(null);
  const [filteredCards, setFilteredCards] = useState<CreatorCards | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const request = async () => {
      const result = await getCreatorCards({ index: 0, length: 10 });
      if (result.status === 'error') {
        setError(result.error);
        return;
      }
      setCreatorCards(result.creatorCards);
    };
    request();
  }, [setCreatorCards, setError]);
  const onSearchChange = useCallback(
    (value: string) => {
      if (creatorCards) {
        setFilteredCards(
          creatorCards?.filter(
            (currentCard) =>
              currentCard.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          )
        );
      }
    },
    [creatorCards]
  );
  return (
    <>
      <Header>
        <Search onSearchChange={onSearchChange}></Search>
      </Header>

      <main className='mt-12'>
        <div className='mx-auto w-[90%] max-w-[1280px]'>
          {error !== null ? (
            <div>Error: {error}</div>
          ) : (
            <CreatorCardContainer creatorCards={filteredCards} />
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
