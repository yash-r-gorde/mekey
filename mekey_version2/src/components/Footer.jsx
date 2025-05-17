import React from 'react'

function Footer() {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
      <div className="logo font-bold text-2xl">
        <span className="text-green-500">&lt;</span>
        Me
        <span className="text-green-500">KEY/&gt;</span>
      </div>
      <div className='flex justify-center items-center'>
        Created with <img className='w-7' src="/heart.png" alt="" /> by yash-r-gorde
      </div>
    </div>
  )
}

export default Footer
