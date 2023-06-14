/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './Nav'
import {hero_img} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <Nav/>
        <div className="relative pt-[60px] pb-[110px] lg:pt-[90px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap justify-center items-center">
                    <div className="w-full px-4 lg:w-5/12">
                        <div className="">
                            <h1
                                className="text-[#39475A] mb-3 text-4xl font-bold leading-tight sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                            >
                                Understanding <br />
                                and resolving <br />
                                <span className=''>CORS</span> Errors.
                            </h1>
                            <p className=" mb-8 mt-8 max-w-[480px] text-base">
                                <span className = "font-medium">Cross-Origin Resource Sharing (CORS)</span> is a mechanism or a protocol
                                that allows devices on one domain to access resources residing on 
                                other domains.
                            </p>
                            <div className='flex gap-4'>
                                <button
                                    type="button"
                                    onClick={() => window.open('https://github.com/VedanshArun/CORS')}
                                    className = 'bg-black px-4 py-3 rounded-md text-white  hover:bg-[#28292B]'
                                >
                                    Github repo
                                </button>
                                <button
                                    type="button"
                                    onClick={() => window.open('https://www.bannerbear.com/blog/what-is-a-cors-error-and-how-to-fix-it-3-ways/#:~:text=To%20get%20rid%20of%20a,Methods%20headers%20to%20the%20responses.')}
                                    className = 'bg-white px-4 py-3 rounded-md text-black shadow-md'
                                >
                                    Solution
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden px-4 lg:block lg:w-1/12"></div>
                    <div className="w-full px-4 lg:w-6/12">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <img
                                src={hero_img}
                                alt="hero"
                                className="max-w-full lg:ml-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Hero