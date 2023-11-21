import React, { FC, useEffect, useState } from 'react';

import { getCreatorCards } from '../../adapters/creatorCardApiService';
import { CreatorCards } from '../../domain/creatorCard';
import { CreatorCardContainer, Header } from '../components';

const HomePage: FC = (): JSX.Element => {
  const [creatorCards, setCreatorCards] = useState<CreatorCards | null>(null);
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
  return (
    <>
      <Header />
      <main className='mt-12'>
        <div className='mx-auto w-[90%] max-w-[1280px]'>
          {error !== null ? (
            <div>Error: {error}</div>
          ) : (
            <CreatorCardContainer creatorCards={creatorCards} />
          )}
        </div>
      </main>
    </>
  );
};

export default HomePage;
