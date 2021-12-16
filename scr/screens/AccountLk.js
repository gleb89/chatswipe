import * as React from 'react';
import { useEffect, useState } from 'react';
import { setLogin } from '../../store/actions';
import {useDispatch,useSelector} from 'react-redux'
import { View, Text ,StyleSheet,Button} from 'react-native';
import SignIn from '../components/SignIn';

function AccountLk({ navigation }) {
    const dispatch = useDispatch();
    const onExit = () =>{
        dispatch(setLogin(''));
    }
    return(
        <View style={style.container}>
            <Text style={{textAlign:'center',fontWeight:"bold",fontSize:20}}>личный кабинет</Text>
            <Text  onPress={onExit} style={{textAlign:'center',fontWeight:"bold",fontSize:20}}>Выйти</Text>   
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


export default AccountLk