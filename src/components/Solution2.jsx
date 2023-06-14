/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import CodeMockup from './CodeMockup'

const Solution2 = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                <CodeMockup/>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12 justify-center items-center">
                <h1 className="text-[#39475A] mb-3 text-4xl font-bold sm:text-[32px] lg:text-[30px] xl:text-[32px]">Use a Serverless Function</h1>
                <p className="leading-relaxed text-base mt-10">
                    A more commonly used solution to resolve CORS error is to use a serverless function. It is an alternate
                    way to proxy your requests, but instead of relying on a free third-party service, you can build your 
                    micro-infrastructure to call a web service and feed data to an API endpoint.
                    <br/>
                    <br/>
                    Popular serverless functions include AWS Lambda, Azure Functions, and Google Cloud functions. These services
                    allow you to get just enough server space to run a function or two, as you do not need much space to run a 
                    function that calls a web service to return some data.
                    <br/>
                    <br/>
                    To understand this better, let's consider a use case:
                    <br/>
                    <br/>
                    A user wants to create an extension in Contentstack which will fetch the maps data from the <span className = 'text-decoration-line : underline font-medium'>Google Maps API</span> to get data related to longitude 
                    and latitude within your entry.
                </p>
                <a className="text-sky-600 inline-flex items-center mt-4">Learn More
                </a>
            </div>
        </div>
    </section>
  )
}

export default Solution2