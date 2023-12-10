import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Linking } from 'react-native';


const UrgencyScreen = () => {
  const navigation = useNavigation();

  const navigateToAnotherPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const makePhoneCall = () => {
    const phoneNumber = '192'; // Substitua pelo número de telefone desejado
    Linking.openURL(`tel:${phoneNumber}`);
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <Image source={require('./assets/logo.jpeg')} style={styles.logo} />
      </View>

      {/* Conteúdo da Tela */}
      

      

      <View style={styles.imageGroup}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => navigateToAnotherPage('Drown')}>
            <Image source={require('./assets/afogamento.png')} style={styles.roundImage} />
            <Text style={styles.imageText}>Afogamento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => navigateToAnotherPage('ImagePage2')}>
            <Image source={require('./assets/choque.png')} style={styles.roundImage} />
            <Text style={styles.imageText}>Choque Elétrico</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => navigateToAnotherPage('Procedure')}>
            <Image source={require('./assets/coracao.png')} style={styles.roundImage} />
            <Text style={styles.imageText}>Ataque Cardiáco</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => navigateToAnotherPage('Cutting')}>
            <Image source={require('./assets/corte.jpg')} style={styles.roundImage} />
            <Text style={styles.imageText}>Corte</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => navigateToAnotherPage('Choke')}>
            <Image source={require('./assets/engasgamento.jpg')} style={styles.roundImage} />
            <Text style={styles.imageText}>Engasmento</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => navigateToAnotherPage('Burning')}>
            <Image source={require('./assets/queimadura.png')} style={styles.roundImage} />
            <Text style={styles.imageText}>Queimaduras</Text>
          </TouchableOpacity>
        </View>
      </View>

       {/* Rodapé com Botão */}
       <View style={styles.footer}>
        {/* Imagem do ícone para realizar chamada */}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#FEFCED',
    padding: 30,
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 100, // Raio da borda inferior esquerda
    borderBottomRightRadius: 100, // Raio da borda inferior direita
    overflow: 'hidden', // Para garantir que a borda arredondada seja aplicada
  },

  logo: {
    width: 100,
    height: 100,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
  },
  imageGroup: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageButton: {
    alignItems: 'center',
  },
  roundImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  imageText: {
    color: 'black',
    marginTop: 5,
  },
  footer: {
    backgroundColor: '#D04936',
    padding: 5,
    width: '100%',
    height: 150, // Ajuste a altura conforme necessário
    marginTop: 'auto',
    alignItems: 'center',
  },
 
  footerButtonText: {
    color: 'black',
  },
  footerButton: {
    padding: 10,
    borderRadius: 2,
    marginTop: 10,
  },
  footerButtonImage: {
    width: 100,
    height: 100,
    marginTop: -90, // Adicione uma margem negativa para elevar a imagem
  },
});

export default UrgencyScreen;