import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'

import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/orders'
import { clearCart } from '../features/cart/cartSlice'

const Cart = ({navigation}) => {

  const cart = useSelector(state => state.cart)
  const localId = useSelector(state => state.auth.localId)
  const [triggerPostOrder] = usePostOrderMutation()
  const dispatch = useDispatch()

  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString()
    const order = {
      ...cart,
      createdAt
    }
    triggerPostOrder({localId,order})
    dispatch(clearCart())
    navigation.navigate("OrdersStack")

  }
  if(cart.total === 0) return <View><Text style={styles.empty}>Carrito Vacio, agrega algún Plan</Text></View>
  return (
    <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={item => item.id}
      renderItem={({item})=> <CartItem item={item}/> }
      />
      <View style={styles.containerConfirm}>
        <Pressable onPress={handleAddOrder}>
          <Text style={styles.textConfirm}>Confirmar Pedido</Text>
        </Pressable>
        <Text style={styles.textConfirm}>Total: ${cart.total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flex:1
    },
    containerConfirm:{
      backgroundColor:"grey",
      padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
        borderStartEndRadius:15,
        borderTopStartRadius:15

    },
    textConfirm:{
        color:"white",
        fontSize:20,
        padding:10,
        borderRadius:10
    },
    empty:{
      fontSize:20,
      fontFamily:"Josefin",
      color:"grey",
      textAlign:"center",
      marginTop:20
    }
})