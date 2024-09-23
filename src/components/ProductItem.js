import { Image, Pressable, StyleSheet, Text, useWindowDimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({product}) => {

  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate("Detail",{id:product.id})}>
      <Text style={[styles.title,width < 300 ? styles.titleMin: styles.titleMax]} numberOfLines={2}>{product.category} {product.title}</Text>
      
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri:product.thumbnail}}
      />
    </Pressable>
  )
}

export default ProductItem

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
    category:{
      width:"70%",
      lineHeight:32,
      fontSize:14,
  },
    title:{
        width:"70%",
        lineHeight:32,
        fontWeight:"bold",
    },
    titleMin:{
      fontSize:14
    },
    titleMax:{
      fontSize:18
    },
    image:{
        minWidth:80,
        width:"20vw",
        maxWidth:150,
        minHeight:80,
        height:"20vw",
        maxHeight:150,
        borderRadius:3
    }
})