import React, { memo } from 'react';
import Header from '../header';
import s from './main-layout.module.scss';

interface IProps {
  children: React.ReactChild
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={s.root}>
      <Header />
      {children}
    </div>
  )
}

export default memo(MainLayout);
