import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { View,Image,ActivityIndicator, FlatList, Text ,StyleSheet,Button} from 'react-native';
import {useDispatch,useSelector} from 'react-redux'
import OnlineChatsOne from './OneOnlineChatsScreen';
import {ChatListCard} from '../components/ChatListCard'

function OnlineChats({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  async function get_chats(){
    setData(['1','2','3'])
    setLoading(false);
  }
  useEffect(() => {
    get_chats()
  }, []);
    return(
        <View style={style.container}>
            
         <View style={style.boxcard}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            
            onEndReachedThreshold={0}
            
            renderItem={({ item }) => (
              <ChatListCard data={{'id':item,'navigation':navigation}}/>
            )}
          />
        )}
      </View>
        
      
        </View>
    )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxcard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2 ,
    minWidth:410,
    backgroundColor:'white'
  },
});


export default OnlineChats