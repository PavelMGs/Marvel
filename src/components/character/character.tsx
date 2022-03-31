import React, { memo, useState } from 'react';
import { Character as CharacterType } from '../../types/characters';
import cn from 'classnames';
import s from './character.module.scss';
import Link from 'next/link';

interface IProps {
  character: CharacterType;
}

const Character: React.FC<IProps> = ({ character }) => {
  const {
    name,
    description,
    comics,
    series,
    events,
    thumbnail: { path, extension },
  } = character;

  const [isComicsOpen, setIsComicsOpen] = useState(false);
  const [isSeriesOpen, setIsSeriesOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  return (
    <div className={s.root}>
      <img src={`${path}.${extension}`} alt="Photo isn`t available" className={s.photo} />
      <h1 className={s.name}>{name}</h1>
      <p className={s.description}>{description || 'No available data...'}</p>
      <button className={s.blockTitle} onClick={() => setIsComicsOpen(!isComicsOpen)}>
        Comics
      </button>
      <div className={cn(s.block, { [s.isOpen]: isComicsOpen })}>
        <div className={cn(s.list, { [s.isOpen]: isComicsOpen })}>
          {comics.items.length
            ? comics.items.map((item) => (
                <div className={s.listItem} key={item.name + item.resourceURI}>
                  <div>{item.name}</div>
                </div>
              ))
            : 'No data'}
        </div>
      </div>
      <button className={s.blockTitle} onClick={() => setIsSeriesOpen(!isSeriesOpen)}>
        Series
      </button>
      <div className={cn(s.block, { [s.isOpen]: isSeriesOpen })}>
        <div className={cn(s.list, { [s.isOpen]: isSeriesOpen })}>
          {series.items.length
            ? series.items.map((item) => (
                <div className={s.listItem} key={item.name + item.resourceURI}>
                  <div>{item.name}</div>
                </div>
              ))
            : 'No data'}
        </div>
      </div>
      <button className={s.blockTitle} onClick={() => setIsEventsOpen(!isEventsOpen)}>
        Events
      </button>
      <div className={cn(s.block, { [s.isOpen]: isEventsOpen })}>
        <div className={cn(s.list, { [s.isOpen]: isEventsOpen })}>
          {events.items.length
            ? events.items.map((item) => (
                <div className={s.listItem} key={item.name + item.resourceURI}>
                  <div>{item.name}</div>
                </div>
              ))
            : 'No data'}
        </div>
      </div>
    </div>
  );
};

export default memo(Character);
