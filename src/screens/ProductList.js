import { StyleSheet, Text, View,FlatList, Image } from 'react-native'
import React from 'react'
import { products } from '../../products'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'



const ProductList = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const navigation = useNavigation()


  return (
    <View style={styles.container}>


      <FlatList
      showsVerticalScrollIndicator={false}
      
        data={products}
       keyExtractor = {item => item.id}
        renderItem={({ item }) => (

            <View style={styles.card}>

              <Image
                style={styles.image}
                source={item.image}
                resizeMode="contain"

              />

              <View style={styles.cardRight}>

                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>Price : {item.price} $</Text>

      
              
    <TouchableOpacity style={styles.btn} onPress={() => dispatch({type:'INSERT_CART',payload:item})} >

          <Text style={styles.button}>Add to Cart +</Text>
    
    </TouchableOpacity>
  
  
                     
                  
              </View>

            </View>

        )}
      />
        
     
    </View>
  )
}




export default ProductList

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f1f1f1', 
  
    justifyContent:'center',
    alignItems:'center',
    marginTop:30

  },
  card:{
    width:380,
    height:150,
    backgroundColor:'#fff',
    marginBottom:20,
    padding:30,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    elevation:4
    
  },
  image:{
    width:100,
    borderRadius:10,
    height:130,
    borderColor:'#000',
    borderWidth:1,
  },
  cardRight:{

   justifyContent:'flex-start',
   alignItems:'flex-start',
   width:200,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10,
  
  },
  btn:{
    padding:10,
    backgroundColor:'#676aec',
    marginTop:10,
    borderRadius:10,
    elevation:4
  },
  button:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:14,

  }


})