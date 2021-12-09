import * as React from 'react';
import { useEffect, useState } from 'react';
import { View,Image,ActivityIndicator, FlatList, Text ,StyleSheet,Button} from 'react-native';


function AddChatRomm({ navigation }) {
    return(
        <View style={style.container}>
            <Text>AddChatRomm</Text>
             
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


export default AddChatRomm