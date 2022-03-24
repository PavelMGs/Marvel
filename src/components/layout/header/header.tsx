import Link from 'next/link';
import React, { memo } from 'react';
import s from './header.module.scss';

interface IProps { }

const navlinks = [
  { name: 'Home', link: '/' },
  { name: 'Characters', link: '/characters' },
]

const Header: React.FC<IProps> = () => {
  return (
    <div className={s.root}>
      <nav>
        <ul className={s.navList}>
          {
            navlinks.map((item) => (
              <li className={s.listItem} key={`${item.name}/header-nav-keys`}>
                <Link href={item.link} as={item.link}>
                  {item.name}
                </Link>
              </li>))
          }
        </ul>
      </nav>
    </div>
  );
};

export default memo(Header);
