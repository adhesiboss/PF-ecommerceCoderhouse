import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { usePatchImageProfileMutation } from '../services/users';
import { useSelector } from 'react-redux';

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState('');
  const [triggerAddImageProfile] = usePatchImageProfileMutation();
  const localId = useSelector(state => state.auth.localId);

  const pickImageFromGallery = async () => {
    // Solicitar permisos para la galería de fotos
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('Se requieren permisos de galería para seleccionar una imagen.');
      return;
    }

    // Abrir la galería de fotos
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [9, 9],
      quality: 0.2,
      base64: true,
      allowsEditing: true,
    });

    if (result.canceled) return;
    setImage('data:image/jpg;base64,' + result.assets[0].base64);
  };

  const takePhotoWithCamera = async () => {
    // Solicitar permisos para la cámara
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert('Se requieren permisos de cámara para tomar una foto.');
      return;
    }

    // Abrir la cámara
    const result = await ImagePicker.launchCameraAsync({
      aspect: [9, 9],
      quality: 0.2,
      base64: true,
      allowsEditing: true,
    });

    if (result.canceled) return;
    setImage('data:image/jpg;base64,' + result.assets[0].base64);
  };

  const chooseImageSource = () => {
    Alert.alert(
      'Seleccionar Imagen',
      'Elige el método para agregar una imagen',
      [
        { text: 'Cámara', onPress: takePhotoWithCamera },
        { text: 'Galería', onPress: pickImageFromGallery },
        { text: 'Cancelar', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const confirmImage = () => {
    triggerAddImageProfile({ image, localId });
    navigation.navigate('MyProfile');
  };

  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : require('../../assets/profile_default.png')}
        resizeMode='cover'
        style={styles.image}
      />
      <SubmitButton title="Seleccionar Imagen" onPress={chooseImageSource} />
      <SubmitButton title="Confirmar" onPress={confirmImage} />
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
});
