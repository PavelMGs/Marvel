import { useRouter } from 'next/router'
import React, { memo, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { CharactersResponse } from '../../types/characters'
import Card from '../card'
import s from './characters.module.scss'

interface IProps {
  characters: CharactersResponse;
}

const Characters: React.FC<IProps> = ({ characters }) => {
  const router = useRouter()
  const { query } = router
  const [isInit, setIsInit] = useState(true)

  const handleChangePage = (e: { selected: number }) => {
    if (isInit) {
      setIsInit(false)
      return
    }
    router.push({ pathname: router.pathname, query: { page: e.selected + 1 } })
  }
  return (
    <div className={s.root}>
      <div className={s.filtersContainer}></div>
      <div className={s.charactersContainer}>
        {characters.data.results && characters.data.results.map((character) => <Card character={character} key={character.id} />)}
      </div>
      {
          <ReactPaginate
            initialPage={query.page ? (+query.page - 1) : 0}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handleChangePage}
            pageRangeDisplayed={3}
            pageCount={characters.data.total / 20}
            previousLabel="< previous"
            renderOnZeroPageCount={() => null}
            className={s.pagination}
            pageClassName={s.page}
            activeClassName={s.activePagination}
            previousClassName={s.controlsPagination}
            nextClassName={s.controlsPaginationN}
            breakClassName={s.controlsPagination}
            forcePage={query.page ? +query.page - 1 : undefined}
          />
      }
    </div>
  )
}

export default memo(Characters)
