import React, { Component } from 'react'
import {
  ImageBackground,
  StyleSheet,
  Text, View, Image, TextInput,
  TouchableOpacity,

} from 'react-native'
import PhoneNumberInput from 'react-native-phone-number-input'


 class Register extends Component {
  render() {
    return (
      <View style={styles.container}>



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
            }}>Register</Text>
            <View style={{ height: '50%', justifyContent: 'space-between', alignItems: 'center' }}>

              <TextInput
                style={styles.inputStyle}
                placeholder="Name"
                placeholderTextColor="gray"
                under

              />
              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                placeholderTextColor="gray"
                under

              />
              <TextInput
                style={styles.inputStyle}
                placeholder=" Set Password"
                placeholderTextColor="gray"
                secureTextEntry={true}
                under


              />

              <PhoneNumberInput
                placeholder='Phone Number'
                style={{ marginTop: 10 }}
                autoFormat={true}

              />

              <TouchableOpacity style={{
                width: 340,
                padding: 20,
                backgroundColor: '#6213ee',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                borderRadius: 10,
                elevation: 10,

              }}
                activeOpacity={0.5}

              >
                <Text style={{ color: 'white' }}>Register</Text>
              </TouchableOpacity>



            </View>
          </View>
        </ImageBackground>



      </View>


    )
  }}


export default Register;
  

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',

  },

   backgroundImage: {
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