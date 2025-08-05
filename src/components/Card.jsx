import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        <div style={{backgroundColor : data.bgColor}} className="card w-[25vw] text-zinc-50 overflow-hidden shadow-lg">
          <div className='w-full h-[25vh] bg-red-500 overflow-hidden'><img className='w-full h-full object-cover scale-120' src={data.image} alt="" /></div>
          <div className="text w-full h-[22vh] px-5 py-3 relative">
            <h2 className='text-sm'>{data.title} </h2>
             <p className='text-xs mt-3'>{data.description}</p>
          </div>
          <a href={data.link}><button className='text-sm p-5 cursor-pointer'>(Explore)</button></a>
          
      </div>
    </div>
  )
}

export default Card
