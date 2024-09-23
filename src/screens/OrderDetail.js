import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetOrderByUserQuery } from '../services/orders';
import LoadingSpinner from '../components/LoadingSpinner';
import { colors } from '../global/colors';

const OrderDetail = ({ route }) => {
  const { id } = route.params;
  const localId = useSelector((state) => state.auth.localId);
  const { data: order, isSuccess, isLoading } = useGetOrderByUserQuery({
    localId,
    orderId: id,
  });

  useEffect(() => {
    if (isSuccess) console.log(order);
  }, [isSuccess]);

  if (isLoading) return <LoadingSpinner />;

  if (!order || !order.items || order.items.length === 0) {
    return (
      <View style={styles.emptyOrder}>
        <Text>No se encontraron productos en esta orden.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {order.items.map((item) => (
        <View key={item.id} style={styles.containerDetail}>
          <Image
            style={styles.image}
            resizeMode='cover'
            source={{ uri: item.thumbnail }}
          />
          <View style={styles.containerText}>
            <Text style={styles.title} numberOfLines={2}>
              {item.category} - {item.title}
            </Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>Precio: $ {item.price}</Text>
            <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
          </View>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total de la orden: $ {order.total}</Text>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerDetail: {
    marginTop: 20,
    width: '80%',
    marginHorizontal: '10%',
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
    width: '80%',
    gap: 20,
    margin: 20,
    marginHorizontal: '10%',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: '90%',
    height: 250,
    marginVertical: 10,
    borderRadius: 10,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.green3,
    marginBottom: 30
  },
  emptyOrder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
