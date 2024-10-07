import React , {useState} from 'react'

function Card({num,codeDiv,codeLink}) {
  const [reloadKey,setReloadKey] = useState(0);
  const handleReload = () => {
    console.log("you clicked")
    setReloadKey(prevKey => prevKey + 1);
  }
  return (
    <div className='w-full sm:w-fit sm:p-5 min-h-fit mt-8'>
    
    <h1 className='p-1 text-2xl mx-auto w-fit snap-start'>#Challenge{num}</h1>
    <div className='text-white border w-72 h-64 mx-auto rounded-sm'>
          {codeDiv}
    </div>
    <div
    className='w-72 min-h-fit mx-auto flex flex-row justify-between my-2'
    >
      <h1
      className='border p-1 rounded-lg font-bold bg-slate-800'
      >Code</h1>
      <i className="border ri-restart-line px-3 rounded-lg font-light bg-slate-800 pt-1"
      onClick={handleReload}
      >

      </i>
    </div>
    </div>
  )
}

export default Card