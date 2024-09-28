import React from 'react'

function Navbar({data}) {
  return (
    <div  className='w-full px-4 py-3 flex justify-between items-center'>
        <h3 className=''>orange</h3>
        <div className='flex p-2 bg-orange-600 rounded-3xl text-white text-sm gap-3'>
            <h3>Favourites</h3>
            <h4>{data.filter((item) => item.added).length

            }</h4>
             <h4>{data.filter((item)=> item.added).length}</h4>
        </div>

    </div>
  )
}

export default Navbar