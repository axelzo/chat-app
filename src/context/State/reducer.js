import {
  SELECT_ROOM,
  SELECT_USER,
  ADD_MESSAGE
} from '../types';

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SELECT_USER:
      return {
        ...state,
        selectedUser: payload,
      };

    case SELECT_ROOM:
      return {
        ...state,
        selectedRoom: payload,
      };

      case ADD_MESSAGE:
      return {
        ...state,
        messagesLength: state.messagesLength + 1,
      };

    default:
      return state;
  }
};

export default reducer;
