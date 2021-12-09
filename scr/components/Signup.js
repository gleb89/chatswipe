import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, StyleSheet,Alert , FlatList ,Text} from 'react-native'
import { Button,HelperText ,Snackbar} from 'react-native-paper';


const SignUpComp = ({data}) => {
  const [email, setTEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordcopy, setPasswordCopy] = React.useState('');
  const [isSubmitEmail, setisSubmitEmail] = React.useState(false);
  const [isSubmitPassword, setisSubmitPassword] = React.useState(false);
  const [isSubmitPasswordCopy, setisSubmitPasswordCopy] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [Textvisible, setTextVisible] = React.useState('');
  const [TextEmail, settextEmail] = React.useState('');
  const [TextPasswordCopy, setTextPasswordCopy] = React.useState('');

  const onDismissSnackBar = ()=>{
    setVisible(false)
  }
  const onSignUp = () => {
    let data_user = {
      "email": email,
      "password": password
    }
     try {
      let url= `http://172.21.0.1:8001/api/v1/users/`
      fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_user) 
      })
      .then((response) => response.json())
      .then((json_picture) => {
       
        
        
      })
      .catch((error) => {
        console.error(error);
      });
    }
    catch (error) {
      console.error(error);
    }
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
    if (email.trim() && password.trim() && passwordcopy.trim()) {
      if(validate(email) && passwordcopy === password){
        console.log(email,password);
        onSignUp()
        setTextVisible('Успешо! Выполните вход')
        setVisible(true)
        setTimeout(() => {
          setVisible(false)
          setTextVisible('')
          setTEmail('')
          setPassword('')
          setPasswordCopy('')
          data.navigation.navigate('Вход')
        }, 5000);
      }
      else{
      if(!validate(email)){
        settextEmail('Не валидный Email')
        setisSubmitEmail(true)
        setTimeout(() => {
          settextEmail('')
          setisSubmitEmail(false)
          
        }, 2000);
      }
      if(passwordcopy != password){
        setTextPasswordCopy('Пароли не совпадают')
        setisSubmitPasswordCopy(true)
        setTimeout(() => {
          setTextPasswordCopy('')
          setisSubmitPasswordCopy(false)
        }, 2000);
        
      }
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
    if(!passwordcopy){
        setisSubmitPasswordCopy(true)
        setTextPasswordCopy('Обязательное поле')
       
        setTimeout(() => {
            setisSubmitPasswordCopy(false)
            setTextPasswordCopy('')
        }, 2000);
    }
    }
  }

  return (
      <View style={{padding:20,height:400}}>
                <Snackbar
        style={{marginLeft:35,marginTop:10}}
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
      <TextInput
    style={{marginTop:20}}
      label="Повторите пароль"
      secureTextEntry={true}
      style={{backgroundColor:'white'}}
      mode="outlined"
      value={passwordcopy}
      onChangeText={setPasswordCopy}
    />
    <HelperText type="error" visible={isSubmitPasswordCopy}>
        {TextPasswordCopy}
      </HelperText>
    <Button style={{marginTop:20}}  mode="contained" onPress={pressHandler}>
    Регистрация
  </Button>
    </View>
  );
};

export default SignUpComp;