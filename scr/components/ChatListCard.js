import React from 'react'
import { View, StyleSheet, FlatList ,Text} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="chat" />

export const ChatListCard = ({ data}) => {
  return (
    <View style={styles.wrapper}>
<Card style={{width:390,height:300}}>
    <Card.Title title="Инна" left={LeftContent} />
    <Card.Content  style={{marginTop:40}}>
      
      <Paragraph>Тема чата:</Paragraph>
      <Title>Любовь и отношения</Title>
    </Card.Content>
    {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
    <Card.Actions style={{marginTop:40,}}>
    <Button
    contentStyle={{flexDirection: 'row-reverse'}}
    style={{backgroundColor:'#4caf50',borderRadius:50,}}
    icon="arrow-right"
    mode="contained"
    onPress={() => data.navigation.navigate('Чат онлайн', {
            Id: 1,
          })}>
          Перейти в чат
  </Button>
    </Card.Actions>
  </Card>
         
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})