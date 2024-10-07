import React, { useRef } from 'react'


function SearchBar() {

  const searchRef = useRef(null);

  //The "search" function will get the user input and compare it with the index of the challenge then scroll the view to that particular challenge 
//else it will pop up a message " Not found ! "
function search(){
    console.log("You clicked Search");
    searchRef.current.value="";
 }

  return (
    <div className='w-36 h-6 flex flex-row-reverse border border-white  bg-slate-700 rounded-lg whitespace-nowrap ml-auto sticky mt-1 '>
      <i className="ri-search-line text-white"
      onClick={search}
      ></i>
         <input
         ref={searchRef} 
         className='w-full   text-indigo-700 px-3 bg-transparent' type="search" name="SearchBar" id="SearchBar" placeholder='Search Challenge'
         
       
          />

    </div>
   
  
    
  )
}

export default SearchBar