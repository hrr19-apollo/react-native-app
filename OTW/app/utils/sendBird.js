import SendBird from 'sendbird';
import { APP_ID } from './sendbirdConfig.js';
import store from '../store.js';

const sb = new SendBird({appId: APP_ID});

export function sendBirdConnect(userEmail, username, cb) {
  sb.connect(userEmail, function(user, err){
    if(err){
      return console.error("error in sendBird login", err);
    }
    console.log("connected but not updated")
    sb.updateCurrentUserInfo(username, '', function(response, error) {
      if(err){
        return console.error("error sendBird login", err);
      }
      console.log('connected and updated')
    });
  });
}

export function sendBirdGetUsers (cb) {
  const query = sb.createUserListQuery();
  query.next(function(users, err) {
    if(err) {
      console.error('line 29 of sendBird.js',err);
      return;
    }
    cb(users.filter(user => user.userId !== sb.currentUser.userId));
  })
}

export function sendBirdCreateGroupChat(cb) {
  var _friendsList = []
  var friendsListState = store.getState().sendBirdState.get('friendsList')
  friendsListState.forEach((item) => {_friendsList.push(item)})
  var channel = store.getState().sendBirdState.get('channel')
  if (! channel) {
    sb.GroupChannel.createChannel(_friendsList, false, function(channel, error) {
      if (error) {
        return console.error('we got a problem',error);
      } 
      cb(channel);      
    });
   } else {
      var _inviteIds = _friendsList.map(function(user) {return user.userId});
      console.log('If the channel already exits',_inviteIds);
      channel.inviteWithUserIds(_inviteIds, function(response, error) {
        if (error) {
          console.log(error);
          return;
        }
        cb();
      });
    }

 }



