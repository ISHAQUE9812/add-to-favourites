import React, { useState } from 'react'
import Card from './assets/Componanent/Card'
import Navbar from './assets/Componanent/Navbar'
function App() {
  const data = [
   {Name:"Ishaque",songName:"one-night-dubai", artiust:"atif aslam",added: false,Image:" https://cms.imgworlds.com/assets/2c4dc42b-d341-480f-8e98-327b983353ca.png"} ,
   {Name:"Ishaque",songName:"mere ham safar", artiust:"arjit sing", added: false, Image:"https://cms.imgworlds.com/assets/86b6bc23-1127-4c7f-b264-9594084176fe.png "} ,
   {Name:"Ishaque",songName:"kabi mai kabi tum", artiust:"lata mangesker", added: false, Image:" https://cms.imgworlds.com/assets/623bd23f-0a2f-4608-ad78-8181736e0c58.png"} ,
   {Name:"Ishaque",songName:"love song", artiust:"arman malik", added: false, Image:"https://cms.imgworlds.com/assets/623bd23f-0a2f-4608-ad78-8181736e0c58.png "}
   
  ];
  const [songData, setSongData] = useState(data);  
  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((item,itemindex) =>{
        if(itemindex === index)
          return {...item, added: !item.added};
        return item;
      })
    })
  }
  return (
    <div>
      <Navbar data={songData}/>
      <div className='px-20 flex gap-10 mt-16 ml-64 '>
        {songData.map((obj, index)=>(
          <Card data={obj} handleClick={handleClick} index={index} key={index}/>
          
        ))}
       
      </div>
    </div>
  )
}

export default App
