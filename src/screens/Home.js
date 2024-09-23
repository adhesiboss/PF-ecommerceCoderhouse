import { StyleSheet, View, Text } from 'react-native'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Ofrecemos una variedad de planes de video de yoga para ayudarte a explorar la eternidad a través del Vinyasa Yoga. 
        Este estilo dinámico y fluido sincroniza la respiración con movimientos suaves y continuos, creando una experiencia 
        de flujo constante entre las posturas y fomentando la conexión mente-cuerpo. 
        ¡Descubre nuestros planes y encuentra el que mejor se adapte a tus necesidades!
      </Text>
      <Categories />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20, // Agregar espacio alrededor del contenido
  },
  description: {
    fontSize: 16,
    lineHeight: 22, // Ajustar espacio entre líneas para mejor legibilidad
    textAlign: 'justify', // Para alinear el texto de forma justificada
    marginBottom: 20, // Espacio debajo del texto
  },
})
