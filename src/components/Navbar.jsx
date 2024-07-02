import React from 'react'

function Navbar() {
  return (
    <div className='absolute top-0 left-0 pl-24 w-screen h-[80px] z-11  flex justify-between px-10 items-center'>
        <div><img src="/assets/images/logo-main.png" alt="" /></div>
        <div className='flex gap-4'>
            <div className='w-[120px] h-[45px] rounded-lg bg-[#01E375] flex justify-center items-center font-bold game-btn-shadow cursor-pointer'>Sign In</div>
            <div className='w-[120px] h-[45px] rounded-lg bg-[#010101] text-white flex justify-center items-center font-bold game-btn-shadow cursor-pointer border-2 border-[#01E375]'>Sign Up</div>
        </div>
    </div>
  )
}

export default Navbar