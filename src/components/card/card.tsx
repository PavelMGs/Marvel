import React, { memo } from 'react'
import { Character } from '../../types/characters'
import s from './card.module.scss'

interface IProps {
  character: Character
}

const Card: React.FC<IProps> = ({ character }) => {
  return (
    <div className={s.root}>
      {/* <div className={s.imageBlock}> */}
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
      {/* </div> */}
      <div className={s.infoBlock}>
        <span >{character.name}</span>
        {character.description}
      </div>
    </div>
  )
}

export default memo(Card)
