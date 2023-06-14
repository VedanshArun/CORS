/* eslint-disable no-unused-vars */
import React from 'react'
import Solution1 from './Solution1'
import Solution2 from './Solution2'

const Solution = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 mx-auto">
            <div className="flex flex-col text-center w-full ">
                <h2 className="text-sm text-sky-600 tracking-widest font-medium title-font mb-1">Resolving CORS</h2>
                <h1 className="text-[#39475A] mb-3 text-4xl font-bold leading-tight sm:text-[42px] lg:text-[40px] xl:text-[42px]">Best Practices to Avoid CORS Errors</h1>
            </div>
        </div>
        <div className='container'>
          <Solution1/>
          <Solution2/>
        </div>
        
    </section>
  )
}

export default Solution