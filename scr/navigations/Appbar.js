import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import OnlineChats from '../screens/OnlineChats';
import OnlineChatsOne from '../screens/OneOnlineChatsScreen';
import OflineChats from '../screens/OflainChatsScreen';
import OflineChatsOne from '../screens/OneOflineChatsScreen';
import AddChatRomm from '../screens/AddChat';
import Account from '../screens/Sign';
import SignUp from '../screens/SignUp';
import PasswordReset from '../screens/ResetPassword';
import AccountLk from '../screens/AccountLk';

const Stack = createStackNavigator();

  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "white",
    }, 
  

  
  
    headerTintColor: "black",
    headerBackTitle: "",
    
  };
  
function OnlineListChats() {
    
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Онлайн чаты" component={OnlineChats} />
        <Stack.Screen name="Чат онлайн" component={OnlineChatsOne} />
        </Stack.Navigator>
      );
}

function OflineListChats() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name=" Офлайн чаты" component={OflineChats} />
        <Stack.Screen name="Чат офлайн" component={OflineChatsOne} />
        </Stack.Navigator>
      );
}

function AddNewChat(){
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Создать чат" component={AddChatRomm} />
        </Stack.Navigator>
      );
}

function SignInAcount(){
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Вход" component={Account} />
        <Stack.Screen name="Регистрация" component={SignUp} />
        <Stack.Screen name="Востановление пароля" component={PasswordReset} />
        </Stack.Navigator>
      );
}

function Acount(){
  return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Личный Кабинет" component={AccountLk} />
      </Stack.Navigator>
    );
}
export {OnlineListChats, OflineListChats, AddNewChat,SignInAcount, Acount} 