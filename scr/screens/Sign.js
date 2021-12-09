import * as React from 'react';
import { useEffect, useState } from 'react';
import { View,Image,ActivityIndicator, FlatList, Text ,StyleSheet,Button} from 'react-native';
import SignIn from '../components/SignIn';

function Account({ navigation }) {
    return(
        <View style={style.container}>
            <Text style={{textAlign:'center',fontWeight:"bold",fontSize:20}}>Вход в аккаунт</Text>
            <SignIn data={{'navigation':navigation}}/>
             
        </View>
    )
}
const style = StyleSheet.create({
  container: {
  backgroundColor:'white',
  height:900,
  paddingTop:100
  },
});


export default Account