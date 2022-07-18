import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = ({ route }) => {
  const { name,email,phone } = route.params;
  const navigation = useNavigation();
 const handleLogin = () => {
    navigation.navigate('Home',{
      name:name,
      email:email,
      phone:phone
      
    });
 }

  return (
    <ImageBackground source={require("../../../assets/bgs.jpg")} style={styles.backgroundImage}>
    <Image
      style={styles.loginImageStyle}
      source={require("../../../assets/loginImage.jpg")}
    />
    <View style={styles.inputContainer}>

      <Text style={{
        fontSize: 20,
        fontWeight: "bold",
        color: '#634ee7'
      }}>Login Here</Text>
      <View style={{ height: '50%', justifyContent: 'space-between', alignItems: 'center' }}>

        <TextInput
          style={styles.inputStyle}
          placeholder="ID"
          placeholderTextColor="gray"
          keyboardType='numeric'
          under
         

        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="gray"
          under
          secureTextEntry={true}          

        />
     

       

        <TouchableOpacity style={{
          width: 340,
          padding: 20,
          backgroundColor: '#6213ee',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          borderRadius: 10,

        }}
          activeOpacity={0.5}
          onPress={handleLogin}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>



      </View>
    </View>
  </ImageBackground>
  )
}

export default Login

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',

  }

  , backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-around',
    alignItems: 'center'

  },
  loginImageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 100,
    borderRadius: 50
  },
  inputStyle: {
    width: 340,
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
  },
  inputContainer: {

    alignItems: 'center',
    justifyContent: 'center',

  }


})