import { CreatorCard as DomainCreatorCard } from 'domain/creatorCard';
import React, { FC } from 'react';

type CreatorCardProps = {
  creatorCard: DomainCreatorCard;
  showContent: boolean;
  className: string;
  onClick: (id: string) => void;
};

export const CreatorCard: FC<CreatorCardProps> = ({
  creatorCard,
  showContent,
  className,
  onClick,
}): JSX.Element => {
  const { name, heading, content, image, id } = creatorCard;
  return (
    <article
      className={
        (className ?? '') +
        ` gap-3 flex w-full flex-grow cursor-pointer flex-row flex-nowrap items-start m-2 rounded-[.5rem] border-[.1rem] border-solid border-slate-800 bg-white p-4`
      }
      onClick={() => {
        onClick(id);
      }}
    >
      <span>
        <img
          className='profile-view aspect-square h-14 min-w-[3.5rem] rounded-[1.75rem] border-[.1rem] border-solid border-slate-500 object-cover'
          src={`images/${image}`}
        />
      </span>
      <span className='p-1'>
        <h1 className='text-base font-bold'>{name}</h1>
        <h2 className='text-base'>{heading}</h2>
        {showContent && <p>{content}</p>}
      </span>
    </article>
  );
};
