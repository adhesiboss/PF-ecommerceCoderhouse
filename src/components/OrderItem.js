import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const OrderItem = ({item}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.date}>{item.createdAt}</Text>
        <Text style={styles.total}>Total: ${item.total} </Text>
      </View>
      <Pressable onPress={()=>navigation.navigate("OrderDetail",{id:item.id})}>
          <AntDesign name="search1" size={32} color="grey" />
      </Pressable>
      
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        borderColor:"grey",
        color:"grey",
        borderWidth:2,
        width:"80%",
        marginHorizontal:"10%",
        marginVertical:10,
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:8
    },
    containerText:{
        gap:5
    },
    date:{
        fontSize:14
    },
    total:{
        fontSize:18,
        fontWeight:"bold",
        color:"grey",
    }
})