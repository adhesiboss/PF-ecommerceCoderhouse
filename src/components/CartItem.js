import { StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'


const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <Entypo name="trash" size={32} color="grey" />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
      backgroundColor:"#ffffff",
      marginVertical:10,
      flexDirection:"row",
      gap:10,
      paddingHorizontal:15,
      marginTop: 20,
      width: "80%",
      marginHorizontal: "10%",
      borderRadius: 8,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 5,
    },
    containerText:{
        width:"70%",
        gap:5
    },
    title:{
        color:"grey",
        fontSize:20
    },
    category:{
        color:"grey",
        fontSize:16
    },
    price:{
        color:"grey",
        fontSize:16,
        fontWeight:"bold"
    }
})