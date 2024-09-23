import { Pressable, StyleSheet, Text, View, StatusBar, Platform, SafeAreaView, Image } from 'react-native';
import { colors } from '../global/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { deleteSession } from '../db';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image 
          source={require('../../assets/logotipo.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <Text style={styles.text}>{title}</Text>
        {idToken && (
          <Pressable onPress={onLogout} style={styles.logout}>
            <AntDesign name="login" size={25} color="white" />
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: colors.green2,
  },
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.green2,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    width: 70, // Ajusta el tamaño del icono según sea necesario
    height: 70,
    position: 'absolute',
    left: 15, // Ajusta la posición según la estructura del header
  },
  text: {
    fontSize: 25,
    fontFamily: 'Josefin',
    color: 'white',
  },
  logout: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },
});
