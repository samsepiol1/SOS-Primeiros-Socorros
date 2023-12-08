import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UrgencyScreen = () => {
  const navigation = useNavigation();

  const navigateToAnotherPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Urgência</Text>

      <View style={styles.imageGroup}>
        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => navigateToAnotherPage('ImagePage1')}>
          <Image source={require('./assets/logo.jpeg')} style={styles.roundImage} />
          <Text style={styles.imageText}>Imagem 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => navigateToAnotherPage('ImagePage2')}>
          <Image source={require('./assets/logo.jpeg')} style={styles.roundImage} />
          <Text style={styles.imageText}>Imagem 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.imageButton}
          onPress={() => navigateToAnotherPage('ImagePage3')}>
          <Image source={require('./assets/logo.jpeg')} style={styles.roundImage} />
          <Text style={styles.imageText}>Imagem 3</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28, // Aumentei o tamanho do título
    marginBottom: 100,
  },
  imageGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  imageButton: {
    alignItems: 'center',
  },
  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 40, // Deixa a imagem redonda
  },
  imageText: {
    color: 'white',
    marginTop: 5,
  },
});

export default UrgencyScreen;