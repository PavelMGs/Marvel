import React, { memo } from 'react'
import s from './filter.module.scss'

interface IProps {}

const Filter: React.FC<IProps> = () => {
  return (
    <div className={s.root}>
      <h1>Filter</h1>
    </div>
  )
}

export default memo(Filter)
