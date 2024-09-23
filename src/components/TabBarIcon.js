import { StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

const TabBarIcon = ({text,icon,focused}) => {
  return (
    <View style={styles.container}> 
       <Entypo 
        style={styles.icon} 
        name={icon} size={20} 
        color={focused ? "#ffffff" : "#ffffff88"} 
       />
       <Text style={{color:focused ? "#ffffff" : "#ffffff88"}}>{text}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
      paddingTop:15,
        alignItems:"center",
        gap:5
    }
})