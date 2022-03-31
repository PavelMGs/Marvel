import { useRouter } from 'next/router'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { END } from 'redux-saga'
import Character from '../../../components/character'
import wrapper, { RootState } from '../../../redux'
import { getCharacter } from '../../../redux/actions/characters'

interface IProps {}

const CharacterPage: React.FC<IProps> = () => {
  const character = useSelector((state: RootState) => state.character.data)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    const { id } = router.query
    if (!Object.keys(character).length && typeof id === 'string') {
      dispatch(getCharacter(+id))
    }
  }, [])

  return <Character character={character.results[0]} />
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, res, params }): Promise<any> => {
  store.dispatch(getCharacter(+params!.id!))
  store.dispatch(END)
  await (store as any).sagaTask.toPromise()
})

export default memo(CharacterPage)
