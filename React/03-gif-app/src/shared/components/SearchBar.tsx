import React, { useEffect, useState } from 'react'

interface Props{
    placeholder:string,
    onQuery: (query:string)=> void
}

export const SearchBar = ({placeholder, onQuery}:Props) => {

  const [query, setquery] = useState('');


  useEffect(()=>{

    const timeoutId = setTimeout(() => {
      onQuery(query)
    }, 700);

    return ()=>{
      clearTimeout(timeoutId)
    }
    
  }, [query, onQuery])

  const handleSearch = () =>{
    onQuery(query)
  
  }

  const handeleOnkeyDown =(event:React.KeyboardEvent<HTMLInputElement>)=>{
     if(event.key === 'Enter'){
        handleSearch()
      }
  }
  
  return (
   <div className="search-container">
    <input type="text" placeholder={placeholder} value={query}
    onChange={(value)=> setquery(value.target.value)}
    onKeyDown={handeleOnkeyDown}
    />
    <button
    onClick={handleSearch}
    >Buscar</button>
   </div>
  )
}
