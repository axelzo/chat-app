import React, {useContext} from 'react'
import { StateContext } from '../../context/State/state';

import './Room.css';

const Room = ({currentRoom}) => {
  const {handleSelectRoom}= useContext(StateContext);
  return (
    <div className='room' onClick={() => handleSelectRoom(currentRoom)}>
        <h4>
            <span className='room__hash'>#</span>
            {currentRoom.name}
        </h4>
    </div>
  )
}

export default Room;