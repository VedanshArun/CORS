/* eslint-disable react/prop-types */
import React from 'react'

const AboutCard = (props) => {
  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <div className='flex flex-col'>
                    <img src = {props.url} alt = 'framework_logo' className = 'mb-5 w-12 object-fit'/>
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{props.framework}</h2>
                </div>
                <p className="leading-relaxed text-justify-center text-base mb-4">{props.desc}</p>
                <a className="text-sky-600 inline-flex items-center">Learn More
                </a>
    </div>
  )
}

export default AboutCard