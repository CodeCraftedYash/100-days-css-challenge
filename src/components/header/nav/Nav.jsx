import React from 'react'
import WhatsThis from './WhatsThis'
import SearchBar from './SearchBar'
import HowJ from './HowJ'

function nav() {
  return (
    //first div is container, it should be fixed at left side and be accessible when clicking the three bar button .
    <div className='border border-teal-600 w-max min-h-[85vh] mt-4 border-l-0 fixed left-0s opacity-0'>   
            <ul>
              <li className='text-white font-bold text-lg mb-1 w-full bg-slate-100 bg-opacity-10 border border-white border-opacity-15  px-2'>About<span className='text-cyan-600'>Me</span></li>
            </ul>
            <WhatsThis/>
            <HowJ />

    </div>
  )
}
//<li className='text-white font-semibold hover:cursor-pointer hover:scale-105  hover:transition-transform hover:ease-in hover:duration-150'>About<span className='text-cyan-600 '>Me</span></li>
export default nav