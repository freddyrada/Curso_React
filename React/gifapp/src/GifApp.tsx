import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock';
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'

export const GifApp = () => {

  const [previousTerms, SetpreviousTerms] = useState(['dragon ball z'])

  const handleTermClicked = (term:string) => {
    console.log({term})
  }

  const handelSearch = (query:string) =>{
    query=  query.trim().toLowerCase()
    if(query.length === 0) return

     if(previousTerms.includes(query))return

     SetpreviousTerms([query, ...previousTerms].splice(0,8))

    
  }

  return (
   <>
     <CustomHeader title='Buscadir de Gif' description='Descubrey comparte'></CustomHeader>
     <SearchBar placeholder='Buscar Gif' onQuery={handelSearch}></SearchBar>
        <PreviousSearches searches={previousTerms} onLabelClicked={(term:string)=> handleTermClicked(term)}></PreviousSearches>
          <GifList data={mockGifs}></GifList>


   </>
  )
}
