import React, { createContext, useReducer } from 'react';
import messagesData from '../../data/messages.json';

import reducer from './reducer';

import {
  SELECT_ROOM,
  SELECT_USER,
  ADD_MESSAGE
} from '../types';

export const StateContext = createContext();

const AppState = (props) => {
  const initialState = {
    selectedUser: {
      "id": 1,
      "name": "William Shakespeare",
      "email": "shakespeare@welcome.tech"
    },
    selectedRoom: {
      "id": 1,
      "name": "poets"
    },
    messagesLength: messagesData.length + 1
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectUser = (user) => {
    dispatch({ type: SELECT_USER, payload: user });
  };

  const handleSelectRoom = (room) => {
    dispatch({ type: SELECT_ROOM, payload: room });
  };

  const handleAddMessage = () => {
    dispatch({ type: ADD_MESSAGE });
  };

  console.log(state);
  return (
    
    <StateContext.Provider
      value={{
        selectedUser: state.selectedUser,
        selectedRoom: state.selectedRoom,
        messagesLength: state.messagesLength,
        handleSelectUser,
        handleSelectRoom,
        handleAddMessage
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default AppState;
