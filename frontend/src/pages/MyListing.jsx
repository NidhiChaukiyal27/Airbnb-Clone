import React from 'react'

function MyListing() {
  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-center flex-col gap-[50px] relative'>
        <div className='w-[50px] h-[50px] bg-[red] cursor-pointer absolute top-[10%] left-[20px] rounded-[50%] flex items-center justify-center' onClick={()=>naviagte("/")}>
            <FaArrowLeftLong className='w-[25px] h-[25px] text-[white]'/>
        </div>
        <div className='w-[50%] h-[10px] border-[2px] border-[#908c8c] p-[15px] flex items-center justify-center text-[30px] rounded-md text-[#613b3b] font-semibold mt-[20px] md:w-[600px]'>MY LISTING</div>
        <div className='w-[100%] h-[90%] flex items-center justify-cenetr gap-[25px] flex-wrap mt-[30px]'></div>

    </div>
  )
}

export default MyListing