import * as React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { setLogin } from '../../store/actions';
import { TextInput } from 'react-native-paper';
import { View, StyleSheet,Alert , FlatList ,Text} from 'react-native'
import { Button,HelperText ,Snackbar} from 'react-native-paper';


const SignIn = ({data}) => {
  const [email, setTEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSubmitEmail, setisSubmitEmail] = React.useState(false);
  const [isSubmitPassword, setisSubmitPassword] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [Textvisible, setTextVisible] = React.useState('');
  const [TextEmail, settextEmail] = React.useState('');
  const onDismissSnackBar = ()=>{
    setVisible(false)
  }
  const data_state = useSelector(state => state.userReducer);
  
  const dispatch = useDispatch();

  const onSignIn = () => {
    let data_user = {
      "email": email,
      "password": password
    }
    
      let url= `http://172.21.0.1:8001/api/v1/users/login`
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_user) 
      })
      .then(function(response) {
        if (response.status === 400){
          setTextVisible('Неверный логин или пароль')
          setVisible(true)
        }
        else{
          setTextVisible('Успешный вход')
          setVisible(true)
        }
        return response.json();
      })
      .then((token) => {
        if(token.token){
          setTEmail('')
          setPassword('')
          setisSubmitEmail(false)
          setisSubmitPassword(false)
          setVisible(false)
          setTextVisible('')
          settextEmail('')
          dispatch(setLogin(token.token));
          // setTimeout(() => {
          //   data.navigation.navigate('Личный Кабинет')
          // }, 5000);
          
        }
        
      })
      .catch((error) => {
        console.error(error);

      });
  }
  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    }
    else {
    return true
    }
  }
  const pressHandler = () => {
    if (email.trim() && password.trim()) {
      if(validate(email)){
      onSignIn()
    }
    else{
      settextEmail('Не валидный Email')
      setisSubmitEmail(true)
      setTimeout(() => {
        settextEmail('')
        setisSubmitEmail(false)
        
      }, 2000);
    }
    } else {
        if(!email){
          settextEmail('Email Обязательное поле')
            setisSubmitEmail(true)
        setTimeout(() => {
          settextEmail('')
            setisSubmitEmail(false)
        }, 2000);
    }
    if(!password){
        setisSubmitPassword(true)
        setTimeout(() => {
            setisSubmitPassword(false)
        }, 2000);
    }
    }
  }

  return (
     
      <View style={{padding:20,height:400}}>
        <Snackbar
        style={{marginLeft:35,marginTop:30}}
        visible={visible}
        onDismiss={onDismissSnackBar}
       
        >
         {Textvisible}
      </Snackbar>
    <TextInput
      label="Email"
     
      style={{backgroundColor:'white'}}
      value={email}
      mode="outlined" 
      onChangeText={setTEmail}
    />
    <HelperText type="error" visible={isSubmitEmail}>
        {TextEmail}
      </HelperText>
    <TextInput
    style={{marginTop:20}}
    secureTextEntry={true}
      label="Password"
      style={{backgroundColor:'white'}}
      mode="outlined"
      value={password}
      onChangeText={setPassword}
    />
    <HelperText type="error" visible={isSubmitPassword}>
        Пароль Обязательное поле
      </HelperText>
    <Button style={{marginTop:20}}  mode="contained" onPress={pressHandler}>
    Вход
  </Button>
  <Text onPress={() => data.navigation.navigate('Регистрация', {
            Id: 1,
          })}style={{marginTop:15,textAlign:'right',color:'blue'}}>Зарегестрироваться?</Text>
  <Text  onPress={() => data.navigation.navigate('Востановление пароля', {
            Id: 1,
          })} style={{marginTop:15,textAlign:'right',color:'blue'}}>Забыли пароль?</Text>
  
    </View>
    
  );
};

export default SignIn;