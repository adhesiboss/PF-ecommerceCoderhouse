import { Pressable, StyleSheet, Text, View } from 'react-native'
import ShadowWrapper from './ShadowWrapper'
import { useNavigation } from '@react-navigation/native'

const Category = ({item}) => {
  const navigation = useNavigation()

  return (
    <Pressable onPress={() => navigation.navigate("Products", { category: item })}>
      <ShadowWrapper style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </ShadowWrapper>
    </Pressable>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    width:"90%",
    marginHorizontal:"5%",
    backgroundColor: '#fff',  // Fondo blanco
    borderRadius: 8,          // Bordes redondeados
    padding: 20,              // Espaciado interior
    marginVertical: 10,       // Margen vertical
    justifyContent: 'center', // Alineación vertical centrada
    alignItems: 'center',     // Alineación horizontal centrada
    shadowColor: '#000',      // Color de la sombra
    shadowOffset: { width: 0, height: 4 }, // Desplazamiento de la sombra
    shadowOpacity: 0.2,       // Opacidad de la sombra
    shadowRadius: 8,          // Radio de la sombra
    elevation: 5,             // Elevación para Android
  },
  text: {
    fontSize: 16,
    color: '#333',            // Color del texto
    textAlign: 'center',      // Texto centrado
    textDecorationLine: 'none', // Sin subrayado
  }
})
