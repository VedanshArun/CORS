import React from 'react'
import { icon } from '../assets'
import MsgCard from './MsgCard'

const CORSMsgs = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
                <h1 className="text-[#39475A] mb-3 text-4xl font-bold leading-tight sm:text-[42px] lg:text-[40px] xl:text-[42px]">Some Common CORS Error Messages</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify-center mb-8 mt-8">
                    Firefox's console displays messages in its console when requests fail due to CORS. 
                    Part of the error text is a "reason" message that provides added insight into what went wrong. 
                    The reason messages are listed below; 
                    <br/>
                    <br/>
                    <span className='font-semibold'>click the message to open an article explaining the error 
                    in more detail and offering possible solutions.</span>
                </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                <MsgCard
                    error = "Reason: CORS disabled"
                />
                <MsgCard
                    error = "Reason: CORS request did not succeed"
                />
                <MsgCard
                    error = "Reason: CORS header 'Origin' cannot be added"
                />
                <MsgCard
                    error = "Reason: CORS request external redirect not allowed"
                />
                <MsgCard
                    error = "Reason: CORS request not http"
                />
                <MsgCard
                    error = "Reason: CORS header 'Access-Control-Allow-Origin' missing"
                />
                <MsgCard
                    error = "Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'"
                />
                <MsgCard
                    error = "Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'"
                />
                <MsgCard
                    error = "Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'"
                />
                <MsgCard
                    error = "Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'"
                />
                <MsgCard
                    error = "Reason: CORS preflight channel did not succeed"
                />
                <MsgCard
                    error = "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'"
                />
                <MsgCard
                    error = "Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'"
                />
                <MsgCard
                    error = "Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel"
                />
                <MsgCard
                    error = "Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed"
                />
            </div>
        </div>
    </section>
  )
}

export default CORSMsgs