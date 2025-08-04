import React from 'react'

function Card({title,landmark,image1,image2,image3,rent,city,id}) {
  return (
    <div className='w-[330px] max-w-[85%] h-[460px] flex items-start justify-start flex-col rounded-lg cursor-pointer bg-slate-100'>
      <div className='w-[330px]'>
    <div className='w-[100%] h-[67%] rounded-lg overflow-auto flex'>
        <img src={image1} alt="" className='w-[100%] flex-shrink-0'/>
        <img src={image2} alt="" className='w-[100%] flex-shrink-0'/>
        <img src={image3} alt="" className='w-[100%] flex-shrink-0'/>

    </div>
    <div className='w-[100%] h-[33%] py-[20px] flex flex-col gap-[2px]'>
        <span className='w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap text-[#4a3434]'>In {landmark.toUpperCase()}</span>
        <span className='text-[15px] w-[80%] text-ellipsis overflow-hidden font-semibold text-nowrap'>{title.toUpperCase()}</span>
        <span className='text-[16px] font-semibold text-[#986b6b]'>Rs.{rent}/day</span>

    </div>

  </div>
        
  </div>
  )
}

export default Card