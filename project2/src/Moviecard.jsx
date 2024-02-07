import React from 'react'
import './style.css'

 const Moviecard = (props) => {
const {data } = props;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const onclick =()=>{
  console.log("moviecard click",data)
  
  if (props.onclick){
    props.onclick();

  }
}

 return (
    <div onClick ={onclick} className=" box h-96  card m-4 p-3 w-80 bg-sky-700 flex-col  flex space-y-8 border-r-12 rounded-2xl ">
    
      <h1 className='font-bold underline'>{data.title}</h1>
      <img className='h-64 rounded-2xl' src={ IMG_PATH + data.poster_path}/>
      <p className='mt-1 font-bold underline'>{data.vote_average}</p>
      <div className='overlay bg-green-200'><p>{data.overview}</p></div>
      
    </div>
  )
}
export default Moviecard