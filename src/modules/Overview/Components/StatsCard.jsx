import React from 'react'

function StatsCard({timeStamp, matchStatus, battleTime, skillScore, totalProfit}) {
  return (
    <div className='flex w-full text-white items-center p-3 justify-between h-[30%] bg-themeBlack border rounded-md border-themeGreen stats-card-win-shadow'>
        {/* Opponent */}
        <div>
            <div></div>
            <div>
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
        <span className='text-themeGreen'>
            {matchStatus}
        </span>
        {/* Battle Time */}
        <span className=''>{battleTime}</span>
        {/* Skill Score */}
        <div className='flex flex-col'>
            <span className='text-themeGreen'>{skillScore.inc_dec}</span>
            <span>{skillScore.score}</span>
        </div>
        {/* Total Profit */}
        <div className='flex flex-col'>
            <span className='text-themeGreen'>{totalProfit.inc_dec}</span>
            <span>{totalProfit.profit}</span>
        </div>
    </div>
  )
}

export default StatsCard