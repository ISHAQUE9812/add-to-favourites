import React from 'react'

function Card({data, handleClick,index}) {
  const {Name,artiust,Image, songName, added} = data;
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-5 pb-10'>
      <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
          <img className='w-full h-full object-cover' src={Image} alt="" />
      </div>
      <div>
        <h3 className='text-xl font-semibold leading-none'>{songName}</h3>
        <h6 className='text-sm'>{artiust}</h6>
        <button onClick={()=> handleClick(index) } className={`py-2 px-2 ${added === false ? "bg-orange-500" : "bg-green-400" } rounded-full text-xs text-white my-3`}>{added === false ? "Add to favourites" : "added"}</button>
      </div>

    </div>
  )
}

export default Card