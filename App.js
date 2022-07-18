import { StatusBar } from 'expo-status-bar';
import {  Text, View,SafeAreaView} from 'react-native';
import ProductList from './src/screens/ProductList';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import {store} from './store'


import Navigation from './src/components/Navigation';

export default function App() {
  return (
    <NavigationContainer>
    
       <Provider store={store} > 

       <Navigation /> 

      
  
       </Provider> 

    </NavigationContainer>
    )
  
}


