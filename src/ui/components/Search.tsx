import React, { useEffect, useState } from 'react';

export const Search = ({
  onSearchChange,
}: {
  onSearchChange: (value: string) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    onSearchChange(searchTerm);
  }, [searchTerm, onSearchChange]);
  return (
    <div className='flex items-center align-middle justify-center'>
      <input
        className='m-1 border-[.1rem] border-solid border-gray-800 p-1'
        placeholder='Filter cards...'
        type='text'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};
