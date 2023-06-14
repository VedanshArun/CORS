/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { icon } from '../assets'

const MsgCard = (props) => {
  return (
    <div className="p-2 sm:w-1/2 w-full ">
        <div className="bg-white rounded flex p-4 h-full items-center gap-4 shadow-sm">
            <img src = {icon} className = "w-6 h-6" />
            <span className="title-font">{props.error}</span>
        </div>
    </div>
  )
}

export default MsgCard