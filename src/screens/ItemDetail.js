import { Image, Pressable, StyleSheet, Text, View, ScrollView } from 'react-native';
import { colors } from '../global/colors';
import { addItemCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useGetProductQuery } from '../services/shop';
import LoadingSpinner from '../components/LoadingSpinner';

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const { data: product, isLoading } = useGetProductQuery(id);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddItemCart = () => {
    dispatch(addItemCart({ ...product, quantity: 1 }));
    navigation.navigate("CartStack");
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: product.thumbnail }}
        />
        <View style={styles.containerText}>
          <Text style={styles.title} numberOfLines={2}>
            {product.category} - {product.title}
          </Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Precio: $ {product.price}</Text>
        </View>
        <Pressable style={styles.button} onPress={handleAddItemCart}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  containerDetail: {
    marginTop: 20,
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  containerText: {
    width: "80%",
    gap: 20,
    margin: 20,
    marginHorizontal: "10%",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
  },
  image: {
    width: "90%",
    height: 250,
    marginVertical: 10,
    borderRadius: 10, // Añadido para bordes redondeados, opcional
  },
  button: {
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: colors.green3,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
  },
});
