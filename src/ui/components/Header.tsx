import React, { FC } from 'react';

export const Header: FC = (): JSX.Element => {
  return (
    <header className='header-outer sticky flex items-center bg-[#fbefe7] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]'>
      <div className='header-inner sticky top-0 mx-auto flex w-[90%] max-w-[1280px] items-center justify-center'>
        <div className='header-logo'>
          <img className='block' src='logo.png' />
        </div>
      </div>
    </header>
  );
};
