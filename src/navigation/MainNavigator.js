import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSession } from '../db';
import { setUser } from '../features/auth/authSlice';

const MainNavigator = () => {
  const idToken = useSelector((state) => state.auth.idToken); // Estado de autenticación
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    (async () => {
      const sessions = await fetchSession(); // Obtener sesión desde la base de datos
      if (sessions) {
        dispatch(setUser(sessions)); // Si hay sesión, cargarla en el store
      }
      setLoading(false); // Finalizar el estado de carga
    })();
  }, []);

  if (loading) {
    // Mostrar spinner mientras se verifica la sesión
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />} 
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
