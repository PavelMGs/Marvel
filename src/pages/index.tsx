import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/Home.module.scss'
import wrapper, { StoreType } from '../redux'
import { END } from 'redux-saga'
import { getCharacters } from '../redux/actions/characters'

const Home: NextPage = () => {
  const dispatch = useDispatch()
  const { characters } = useSelector((store: StoreType) => store.state);
  return (
    <div className={styles.root}>
      {
        characters?.results && characters.results.map((item: any) => item.name)
      }
    </div>
  )
}

export const getStaticProps = wrapper.getStaticProps(store => async ({ preview }): Promise<any> => {
  store.dispatch(getCharacters());
  store.dispatch(END);
  await (store as any).sagaTask.toPromise();
});

export default Home
