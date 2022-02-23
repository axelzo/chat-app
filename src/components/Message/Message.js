import React from 'react'

import { Avatar } from '@material-ui/core';


import './Message.css';

const Message = ({message, name}) => {
  return (
    <div className='message'>
        <Avatar />
        <div className="message__info">
            <h5><strong>{name}</strong></h5>
            <p>{message.body}</p>
        </div>
        
    </div>
  )
}

export default Message