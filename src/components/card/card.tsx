import Link from 'next/link'
import React, { memo } from 'react'
import { Character } from '../../types/characters'
import s from './card.module.scss'

interface IProps {
  character: Character
}

const Card: React.FC<IProps> = ({ character }) => {
  return (
    <Link href={`characters/${character.id}`}>
      <div className={s.root}>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
        <div className={s.infoBlock}>
          <span >{character.name}</span>
          {character.description}
        </div>
      </div>
    </Link>
  )
}

export default memo(Card)
