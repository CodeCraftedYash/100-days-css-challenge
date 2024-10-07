import React from 'react'
import SearchBar from '../header/nav/SearchBar'
import Card from './Card'
import {Challeng1, Challenge2,Challenge3} from '../../Utils/importCodes'
function PageBody() {
  return (
    <div className='w-full min-h-screen pb-5 bg-gradient-to-b from-slate-900 to-teal-900 text-white scroll-smooth snap-y snap-mandatory overflow-hidden border' loading="lazy">
      <SearchBar />
      <div className=' sm:h-auto sm:mx-auto sm:w-[80%] sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:justify-between'>
      <Card num={1}
        codeDiv={<Challeng1 />}
        codeLink={3}
      />
      <Card num={2}
        codeDiv={<Challenge2 />}
        codeLink={3}
      />
      <Card num={3}
       codeDiv={<Challenge3 />}
       codeLink={3}
      />
     
     
      </div>
    </div>
  )
}

export default PageBody