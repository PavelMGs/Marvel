import { useRouter } from 'next/router'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { END } from 'redux-saga'
import Characters from '../../components/characters'
import wrapper, { RootState } from '../../redux'
import { getCharacters } from '../../redux/actions/characters'

interface IProps { }

const CharactersPage: React.FC<IProps> = () => {
  const characters = useSelector((store: RootState) => store.characters)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (!Object.keys(characters).length) {
      const pageNumber = +(router.query.page || 1) - 1
      dispatch(getCharacters(pageNumber))
    }
  }, [])
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
