import React, { useDebugValue, useState } from "react";
import { Alert, Image, SafeAreaView, StatusBar,StyleSheet,Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = ()=>{
  const [email,setEmail] = useState ('');
  const [Password,setPassword] = useState ('');
  const [checkEmail, setCheckEmail]= useState (true);
  const [errorPassword, setErrorPasword]= useState ('');
  const onSubmit =()=>{
    let formData ={
      _email: email,
      _Password: Password,
    }
    let regexEmail = new RegExp(/^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u);
  
    if (!regexEmail.test(formData._email)){
      setCheckEmail (false);
    } else {
      setCheckEmail (true);
    }
    formData._Password === ''? setErrorPasword('Không được để Pass trống') : setErrorPasword('');


  }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'#ffffff'} barStyle="dark-content"></StatusBar>
        <View style={styles.title }>
            <Text style={{fontWeight:'bold',fontSize:30,color:'black'}}>Login</Text>
            <Text>By signing in you are agreeing</Text>
          <View style={{flexDirection:'row'}}>
            <Text> our </Text><TouchableOpacity >
            <Text style={{color:'#1bcdff'}}>Term and privacy policy</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.form}>
            <View style={styles.group}>
            <TextInput placeholder="Email Adress" style={styles.ip} onChangeText={(Value)=>setEmail(Value)} />
            <Text style={{color:'red'}}>{!checkEmail? 'Sai định dạng Email':''}</Text>
            </View>
            <View style={styles.group}>
            <TextInput placeholder="Password" style={styles.ip } secureTextEntry={true}  onChangeText={(Value)=>setPassword(Value)}/>
            <Text style={{color:'red'}}>{errorPassword}</Text>
            </View>
            
            </View>
            <View>
              <TouchableOpacity onPress={()=>Alert.alert('NHOM2')}>
                <Text style={{color: 'gray',alignSelf: 'flex-end',margin:15}}>Forgot Password      </Text>
              </TouchableOpacity>

              <View>
                <TouchableOpacity style={styles.group2} onPress={()=>onSubmit()}>
                  <Text style={{color:'white',fontWeight:'bold'}}>Login</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.xm}>
                <Image source={require('/Users/ASUS/mobileproject/asset/xmai.jpg')}/>
              </View>
            </View>

           

      
        </SafeAreaView>
      
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },
  title:{
    margin: 30,
    alignItems: 'center'
  },
  form:{
    marginTop:30,
   paddingHorizontal: 30,
   
  },
  group:{
   backgroundColor: 'white',
    marginTop:20,
    justifyContent: 'space-between',
    borderBottomWidth:1,
    

  },
  ip:{
    borderBottomWidth:1,
    backgroundColor: '#fff',
    borderColor: 'gray',
    alignItems:'center'
   
  },
  group1:{ 
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor:'yellow'

  },
  group2:{
      marginTop: 30,
      backgroundColor: 'lightblue',
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 100
      
  },
  xm:{
   
    marginTop:80,
    transform: [{ scaleX: 1.125 }],
    flexDirection: 'row',
    justifyContent:"center"    
  }
  
})
export default LoginScreen;