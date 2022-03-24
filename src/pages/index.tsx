import React from 'react'
import type { NextPage } from 'next'
import Home from '../components/pages/home';
import { END } from 'redux-saga';
import wrapper from '../redux';
import { getCharacters } from '../redux/actions/characters';

const HomePage: NextPage = () => {
  return <Home />
}

export const getStaticProps = wrapper.getStaticProps(store => async ({ preview }): Promise<any> => {
  store.dispatch(getCharacters());
  store.dispatch(END);
  await (store as any).sagaTask.toPromise();
});

export default HomePage;
