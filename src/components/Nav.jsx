import React from 'react'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center w-full mb-10 pt-5 font-roboto'>
        <p className='font-bold text-xl'><span className='text-sky-500'>CO</span>RS</p>
        <button
            type="button"
            onClick={() => window.open('https://github.com/VedanshArun/CORS')}
            className = 'bg-black px-4 py-3 rounded-md text-white font-medium hover:bg-[#28292B]'
        >
            Github repo
        </button>
    </nav>
  )
}

export default Nav