import { combineReducers } from 'redux';
import userReducer from './usersReducer';
import { GetUser, GetUsers, UpdateUser, AuthSignIn, AuthSignUp } from './user';
import { SetNotification, GetNotification, GetNotifications, UpdateNotification } from './notification';
import { GetChat, GetChats, SetChat, UpdateChat } from './chat';
import { GetConversation, GetConversations, SetConversation, UpdateConversation } from './conversation';

export default combineReducers({
  users: userReducer,
  GetUser: GetUser,
  GetUsers: GetUsers,
  UpdateUser: UpdateUser,
  SetNotification: SetNotification,
  GetNotification: GetNotification,
  GetNotifications: GetNotifications,
  UpdateNotification: UpdateNotification,
  GetChat: GetChat,
  GetChats: GetChats,
  SetChat: SetChat,
  UpdateChat: UpdateChat,
  GetConversation: GetConversation,
  GetConversations: GetConversations,
  SetConversation: SetConversation,
  UpdateConversation: UpdateConversation,
  AuthSignIn: AuthSignIn,
  AuthSignUp: AuthSignUp
})