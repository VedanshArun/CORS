/* eslint-disable no-unused-vars */
import React from 'react'

const Solution1 = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
            <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                <h1 className="text-[#39475A] mb-3 text-4xl font-bold sm:text-[32px] lg:text-[30px] xl:text-[32px]">Proxy the API Request While Using External Calls in an Extension</h1>
                <p className="leading-relaxed text-base mt-10">
                    CORS proxy can be a helpful solution to make cross-origin requests. The proxy layer 
                    sits between your request and its destination without knowing the request’s origin.
                    Thus, though the request comes from an unknown source, the CORS proxy makes it seem that 
                    it is a request from an allowed location.
                    <br/>
                    <br/>
                    To learn how to do this, here is the list of <span className='text-decoration-line: underline font-medium'>CORS-Proxy</span> which you can use 
                    for your website.
                    <br/>
                    <br/>
                    Free Proxies can be great for testing, but relying on a free third-party tool is not advisable 
                    for something you will use on the production site. In such cases, a more stable solution is to 
                    call the API from a server and make the data available on the client-side.
                </p>
                <a className="text-sky-600 inline-flex items-center mt-4">Learn More
                </a>
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-12">
                <img src = "https://cdn-bippi.nitrocdn.com/bqwDxSPDRpDwmYRiWNYPrkliEvinJKIP/assets/images/optimized/rev-9a7c461/wp-content/uploads/2022/11/580x348-What-is-a-Proxy-Port_.png" alt = "proxy_server" className=''/>
            </div>
        </div>
    </section>
  )
}

export default Solution1