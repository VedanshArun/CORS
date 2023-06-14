/* eslint-disable no-unused-vars */
import React from 'react'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-sm text-sky-600 tracking-widest font-medium title-font mb-1">What is CORS</h2>
            <h1 className="text-[#39475A] mb-3 text-4xl font-bold leading-tight sm:text-[42px] lg:text-[40px] xl:text-[42px]">CORS Errors</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify-center mb-8 mt-8 ">
                Cross-Origin Resource Sharing (CORS) is a standard that allows a server to relax the same-origin policy.
                This is used to explicitly allow some cross-origin requests while rejecting others. For example, if a site 
                offers an embeddable service, it may be necessary to relax certain restrictions. Setting up such a CORS configuration
                isnt necessarily easy and may present some challenges. In these pages, we'll look into some common CORS error 
                messages and how to resolve them. <br/>
                <br/>
                <span className='font-medium'>Some of the frontend frameworks that have support CORS Errors are :</span>
            </p>
        </div>
        <div className="flex flex-wrap">
            <AboutCard
                framework = "ReactJS"
                url = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                desc = "React is a free and open-source front-end JavaScript library for building user interfaces based on components."
            />
            <AboutCard
                framework = "NuxtJS"
                url = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Nuxt_logo.svg/2560px-Nuxt_logo.svg.png"
                desc = "Nuxt.js is a free and open source JavaScript library based on Vue.js, Node.js, Vite and Babel.js."
            />
            <AboutCard
                framework = "Express"
                url = "https://inapp.com/wp-content/uploads/elementor/thumbs/express-js-01-1-q05uw85vt1jqloiy5k82sfy7tgvysgt1uqld8slsbc.png"
                desc = "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License."
            />
            <AboutCard
                framework = "VueJS"
                url = "https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png"
                desc = "Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications."
            />
        </div>
        </div>
    </section>
  )
}

export default About