import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { View, StyleSheet,Alert , FlatList ,Text} from 'react-native'
import { Button,HelperText ,Snackbar} from 'react-native-paper';


const PasswordReset = ({data}) => {
  const [email, setTEmail] = React.useState('');
  const [code, setCode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [textalert, settextalert] = React.useState('');
  const [isSubmitEmail, setisSubmitEmail] = React.useState(false);
  const [isSubmitPassword, setisSubmitPassword] = React.useState(false);
  const [emailvisible, setemailvisible] = React.useState(true);
  const [Codevisible, setCodevisible] = React.useState(false);
  const [visible, setVisible] = React.useState(false);isSubmitCode
  const [isSubmitCode, setisSubmitCode] = React.useState(false);
  const onDismissSnackBar = ()=>{
    setVisible(false)
  }


  const pressHandler = () => {
    if (email.trim() ) {
        settextalert('Код отправлен на почту')
      setVisible(true)
      setemailvisible(false)
      setCodevisible(true)
      setTimeout(() => {
        setVisible(false)
        
      }, 2000);
    //   onSubmit(value)
     
    } else {
        if(!email){
            setisSubmitEmail(true)
        setTimeout(() => {
            setisSubmitEmail(false)
        }, 4000);
    }

    }
  }
  const pressHandlerCode = () => {
    if (code.trim() && password.trim() ) {
    settextalert('Пароль успешно изменен')
      setVisible(true)
    //   onSubmit(value)
     
    } else {
        if(!code){
            setisSubmitCode(true)
        setTimeout(() => {
            setisSubmitCode(false)
        }, 4000);
    }
    if(!password){
        setisSubmitPassword(true)
    setTimeout(() => {
        setisSubmitPassword(false)
    }, 4000);
}

    }
  }
  return (
     
      <View style={{padding:20,backgroundColor:'white',height:900}}>
           <Snackbar
        style={{marginLeft:35}}
        visible={visible}
        onDismiss={onDismissSnackBar}
       
        >
         {textalert}
      </Snackbar>
       {emailvisible ?<View>
       
    <TextInput
      label="Введите Email к аккаунту"
     
      style={{backgroundColor:'white'}}
      value={email}
      mode="outlined" 
      onChangeText={setTEmail}
    />
    <HelperText type="error" visible={isSubmitEmail}>
        Email Обязательное поле
      </HelperText>
    <Button style={{marginTop:20}}  mode="contained" onPress={pressHandler}>
      Отправить
  </Button>
    </View>:null}
    {Codevisible ?<View>
       
       <TextInput
         label="Введите код из письма"
        
         style={{backgroundColor:'white'}}
         value={code}
         mode="outlined" 
         onChangeText={setCode}
       />
       <HelperText type="error" visible={isSubmitCode}>
           Код неверный
         </HelperText>
         <TextInput
         label="Введите новый пароль"
        
         style={{backgroundColor:'white'}}
         value={password}
         mode="outlined" 
         onChangeText={setPassword}
       />
       <HelperText type="error" visible={isSubmitPassword}>
           Пароль обязателен
         </HelperText>
       <Button style={{marginTop:20}}  mode="contained" onPress={pressHandlerCode }>
          Изменить пароль
     </Button>
       </View>:null}
    </View>
  );
};

export default PasswordReset;