import React, {useContext, useEffect, useState} from 'react'
import Message from '../Message/Message';
import { StateContext } from '../../context/State/state';
import messagesData from '../../data/messages.json';
import usersData from '../../data/users.json';  

import './Messages.css';

const Messages = () => {
    const {selectedRoom, selectedUser, messagesLength, handleAddMessage}= useContext(StateContext);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    
    useEffect(() => {
        setMessages(messagesData.filter((message)=> message.roomId === selectedRoom.id))
    }, [selectedRoom])

    const sendMessage = (event) => {
        event.preventDefault();
        const newMessage = {
            id: messagesLength,
            roomId: selectedRoom.id,
            userId: selectedUser.id ,
            body: input
        }
        
        
        setMessages(previousMessages => [...previousMessages, newMessage]);
        console.log(newMessage)
        handleAddMessage();
        setInput("");
    }

    return (
        <div className='messages'>
            <div className="messages__header">
                <h3><span className='messages__headerHash'>#</span></h3>
                <h3>{selectedRoom.name}</h3>
            </div>
            <div className='messages__messages'>
                {
                    messages ? messages.sort((a, b) => a.id > b.id ? 1 : -1).map((message) => {
                        const userName = usersData.find((user) => user.id === message.userId);

                        return (
                            <Message 
                                key={message.id}
                                name={userName.name} 
                                message={message} 
                            />
                        )
                    })
                    : <div>LOADING...</div>
                    
                }
            </div>
            <div className="messages__input">
                <form>
                    <input 
                        placeholder='Message'
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                    <button 
                        className='messages__inputButton'
                        type='submit' 
                        onClick={sendMessage}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        
        </div>
  )
}

export default Messages
