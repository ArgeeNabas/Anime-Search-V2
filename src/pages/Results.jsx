import React from 'react'
import AnimeList from '../components/AnimeList'

function Results({ loading, animeList, term, HandleSearch, setTerm }) {
  return (
	<>
	<AnimeList loading={loading} animeList={animeList} term={term} HandleSearch={HandleSearch} setTerm={setTerm}/>
	</>
  )
}

export default Results