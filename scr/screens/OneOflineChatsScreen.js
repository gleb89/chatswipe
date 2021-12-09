import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { View,Image,ActivityIndicator, FlatList, Text ,StyleSheet,Button} from 'react-native';
import {useDispatch,useSelector} from 'react-redux'


function OflineChatsOne({ navigation }) {
    return(
        <View style={style.container}>
            <Text>OflineChats one</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default OflineChatsOne