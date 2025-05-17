import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='bg-slate-800 text-white'>
                <div className='mycontainer mx-auto flex justify-between items-center px-4 py-5 h-14'>
                    <div className="logo font-bold text-2xl">
                        <span className="text-green-500">&lt;</span>
                        Me
                        <span className="text-green-500">KEY/&gt;</span>
                    </div>
                    <button className='text-white bg-green-700 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
                        <img className='invert w-10 p-1' src="/github.svg" alt="github logo" />
                        <span className='font-bold px-2'>Github</span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
