import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';

const ChokingScreen = () => {
  const navigation = useNavigation();

  const navigateToAnotherPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const makePhoneCall = () => {
    const phoneNumber = '192';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/engasgamento.jpg')} style={styles.logo} />
        <Text style={styles.buttonText_header}>Engasgamento</Text>
        
      </View>

      {/* Conteúdo da Tela */}
      <View style={styles.contentContainer}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToAnotherPage('Child')}>
            <Text style={styles.buttonText}>Crianças e Bebês</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToAnotherPage('Victim')}>
            <Text style={styles.buttonText}>Vítima Consciente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToAnotherPage('Adult')}>
            <Text style={styles.buttonText}>Adultos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Rodapé com Botão */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={makePhoneCall}>
          <Image source={require('./assets/192.png')} style={styles.footerButtonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FEFCED',
    padding: 30,
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
  },
  logo: {
    width: 100,
    height: 100,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#D04936',
    width: 400,
    height: 60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },

  buttonText_header:{
    color:'black',
    fontSize: 18,
  },

  footer: {
    backgroundColor: '#D04936',
    padding: 5,
    width: '100%',
    height: 150,
    alignItems: 'center',
  },
  footerButton: {
    padding: 10,
    borderRadius: 2,
    marginTop: 10,
  },
  footerButtonImage: {
    width: 100,
    height: 100,
    marginTop: -90,
  },
});

export default ChokingScreen;