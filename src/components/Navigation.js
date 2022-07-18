import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'


import ProductList from '../screens/ProductList'
import { Icon,Badge } from 'react-native-elements'
import Cart from '../screens/Cart'
import { useSelector } from 'react-redux'
import Register from '../screens/UserAuthScreens/Register'
import Login from '../screens/UserAuthScreens/Login'
import Home from '../screens/UserAuthScreens/Home'

const Stack = createStackNavigator();

const Navigation = () => {

  const navigation = useNavigation();

  const total = useSelector(state=>state.total);


  return (
    
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
          {/* set Up product screen   */}
        <Stack.Screen 
            name="Book" 
            component={ProductList}
            options={{
              headerRight: () =>(
                <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>

                <Badge value={total} status="error" containerStyle={{ position:'absolute',top:-4,left:-5,zIndex:1000 }} />
                <Icon name="shopping-cart" type="feather" color="black" size={30} style={{marginRight:30}} />

                </TouchableOpacity>
                
                 ),
          
            }}
            /> 

            {/* set up cart screen  */}

             <Stack.Screen
              name="Cart"
              component={Cart}

            /> 





            

      </Stack.Navigator>
  )
}

export default Navigation