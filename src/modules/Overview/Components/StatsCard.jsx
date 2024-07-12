import React, { useState } from 'react'

function StatsCard({timeStamp, matchStatus, battleTime, skillScore, totalProfit}) {
    // var [matchStatus, SetMatchStatus] = useState();
    return (
    
    <div className={`flex w-full text-white items-center p-3 justify-between h-[28%] bg-themeBlack border rounded-md ${matchStatus=="Won"?"border-themeGreen stats-card-win-shadow":"border-red-700 stats-card-lose-shadow"} cursor-pointer`}>
        {/* Opponent */}
        
        <div className='flex items-center gap-2'>
            <div className='rounded-full bg-white h-10 w-10'>
                {/* <img src="" alt="" /> */}
                
            </div>
            <div className='flex flex-col'>
                <span>Name</span>
                <span>@username</span>
            </div>
        </div>
        {/* Time Stamp */}
        <div className='flex flex-col '>
            <span>{timeStamp.date}</span>
            <span>{timeStamp.time}</span>
        </div>
        {/* Match Status */}
        <span className={`${matchStatus=='Won'?"text-themeGreen":"text-[#FF4D42]" }`}>
            {matchStatus}
        </span>
        {/* Battle Time */}
        <span className=''>{battleTime}</span>
        {/* Skill Score */}
        <div className='flex flex-col'>
            <span className={`${matchStatus=='Won'?"text-themeGreen":"text-[#FF4D42]" }`}>{skillScore.inc_dec}</span>
            <span>{skillScore.score}</span>
        </div>
        {/* Total Profit */}
        <div className='flex flex-col'>
            <span className={`${matchStatus=='Won'?"text-themeGreen":"text-[#FF4D42]" }`}>{totalProfit.inc_dec}</span>
            <span>{totalProfit.profit}</span>
        </div>
    </div>
  )
}

export default StatsCard