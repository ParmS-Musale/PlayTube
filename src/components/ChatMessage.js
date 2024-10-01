import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const ChatMessage = ({name ,message}) => {
  return (
    <div className='flex items-center m-2 '>
       <FaUserCircle className='text-3xl'/>
        <span className='font-bold px-3'>{name}</span>
        <span className='font-semibold text-gray-700'>{message}</span>
    </div>
  )
}

export default ChatMessage