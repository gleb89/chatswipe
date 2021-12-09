import React from "react";
import { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { List, Colors } from 'react-native-paper';
import { OnlineListChats,OflineListChats,AddNewChat,SignInAcount ,Acount} from "./Appbar";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const data_state = useSelector(state => state.userReducer);

  return (
    <Tab.Navigator
    
     screenOptions={{ 
      
         headerShown: false,
         tabBarShowLabel:false,
         tabBarInactiveTintColor:'grey',
         tabBarActiveTintColor:'#9AC4F8'
         }}
     > 
      <Tab.Screen
       name="Chat-online"
       component={OnlineListChats}
       options={{
        tabBarIcon: ({ color, size }) => (
            <List.Icon color={color} icon="chat" />
        ),
      }}
         />
      <Tab.Screen
       name="Ofline-Chats"
       component={OflineListChats}
       options={{
        tabBarIcon: ({ color, size }) => (
            <List.Icon color={color} icon="chat-sleep" />
        ),
      }}
        />

    <Tab.Screen
       name="add-Chats"
       component={AddNewChat}
       
       options={{
        
        tabBarIcon: ({ color, size }) => (
            <List.Icon color={color} icon="message-plus" />
        ),
      }}
        />
        
        {!data_state.token ? <Tab.Screen
       name="account"
       component={SignInAcount}
       
       options={{
        
        tabBarIcon: ({ color, size }) => (
            <List.Icon color={color} icon="login" />
        ),
      }}
        />:null}
       {data_state.token ? <Tab.Screen
       name="cabinet"
       component={Acount}
       
       options={{
        
        tabBarIcon: ({ color, size }) => (
            <List.Icon color={color} icon="account" />
        ),
      }}
        />:null}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
