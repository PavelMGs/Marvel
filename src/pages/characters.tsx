import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { END } from 'redux-saga'
import Characters from '../components/characters'
import wrapper, { RootState } from '../redux'
import { getCharacters } from '../redux/actions/characters'

interface IProps {}

const CharactersPage: React.FC<IProps> = () => {
  const characters = useSelector((store : RootState) => store.state.characters)
  return <Characters characters={characters} />
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, params }): Promise<any> => {
  const query = req.url?.split('?')[1]?.split('&')
  const page = query?.find(item => item.startsWith('page='))
  const pageNumber = +(page?.replace('page=', '') || 1) - 1
  store.dispatch(getCharacters(pageNumber))
  store.dispatch(END)
  await (store as any).sagaTask.toPromise()
})

export default memo(CharactersPage)
