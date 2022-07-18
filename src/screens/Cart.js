import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
const Cart = () => {

    const cart = useSelector(state=>state.cart)
    const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      
    
      {


            cart.length != 0?
            
            
                <FlatList
                    data={cart}
        
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


              <TouchableOpacity style={styles.btn} onPress={() => dispatch({type:'REMOVE_CART',payload:item.id})} >
                <Text style={styles.button}>Remove -</Text>
              </TouchableOpacity>
              </View>

            </View>

        )}
      />
             :  (
                             <Text style={{color:'gray',fontSize:20}}>Empty cart .Please add +</Text>
            )


      }

    
        



    </View>
  )
}

export default Cart
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
      backgroundColor:'#c679e3',
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