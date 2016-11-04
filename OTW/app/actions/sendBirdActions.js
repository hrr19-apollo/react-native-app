import {
  UPDATE_SENDBIRD_USERS,
  ADD_REMOVE_FRIEND_TO_LIST,
  ADD_REMOVE_CHANNEL,
  SEND_MESSAGE,
  GET_MESSAGES,
} from './actionTypes';

const updateSendBirdUsers = (users) => {
  return {
    type: UPDATE_SENDBIRD_USERS,
    users
  };
};

const updateFriendsList = (user) => { 
  return {
    type: ADD_REMOVE_FRIEND_TO_LIST,
    user
  };
};

const updateChannelList = (channel) => { 
  return {
    type: ADD_REMOVE_CHANNEL,
    channel
  };
};

const updateCurrentMessage = (message) => { 
  return {
    type: SEND_MESSAGE,
    message
  };
};

const updateMessageList = (messages) => { 
  return {
    type: GET_MESSAGES,
    messages
  };
};

export { 
  updateSendBirdUsers,
  updateFriendsList,
  updateChannelList,
  updateCurrentMessage,
  updateMessageList
};

