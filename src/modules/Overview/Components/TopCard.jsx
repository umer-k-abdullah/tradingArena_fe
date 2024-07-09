import React from 'react'

function TopCard({icon, label, value, inc_dec}) {
  return (
    <div className='flex flex-col justify-center items-center bg-[#0D0D0D] border-[#EDF1FA] border gray-shadow rounded-xl w-full gap-1'>
        <img src={icon} alt="" className='h-9'/>
        <span className='text-[#EDF1FAB2] text-base'>{label}</span>
        <span className='text-[#EDF1FA] text-lg'>{value}</span>
        <span className='text-themeGreen text-sm'>{inc_dec}</span>
    </div>
  )
}

export default TopCard