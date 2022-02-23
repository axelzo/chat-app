import React, { useContext, useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';
import Room from '../Room/Room';
import roomsData from '../../data/rooms.json';

import './Sidebar.css';
import { StateContext } from '../../context/State/state';

const Sidebar = () => {
const [rooms, setRooms] = useState();
const {selectedUser} = useContext(StateContext);

useEffect(()=> {
    setRooms(roomsData);
}, [])

 return (
    <div className='sidebar'>
        <div className="sidebar__rooms">
            <div className="sidebar__roomsHeader">
                <h3>ROOMS</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__roomsList">
                {
                    rooms ? rooms.sort((a, b) => a.name > b.name ? 1 : -1).map((room) => {
                        return <Room key={room.id} currentRoom={room}/>
                    })
                    : <div>LOADING...</div>
                }
            </div>
        </div>
        <div className="sidebar__profile">
            <Avatar />
            {
                <div className="sidebar__profileInfo">
                    <h4>{selectedUser.name}</h4>
                    <p>ID: {selectedUser.id}</p>
                </div>
            }
            <SettingsIcon onClick={() => console.log('test')}/>
        </div>

     </div>
 )
}

export default Sidebar;