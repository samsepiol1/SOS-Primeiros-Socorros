import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.jpeg')} style={styles.logo} />
      </View>
      // FAVOR NÃO MEXER :D !!!!!!!!!!!!
      <TouchableOpacity style={styles.urgentButton}>
        <Text style={styles.buttonText}>Urgência</Text>
      </TouchableOpacity>
      // FAVOR NÃO MEXER :D !!!!!!!!!!!!
      <TouchableOpacity style={styles.donationButton} onPress={() => navigation.navigate('Donation')}>
        <Text style={styles.buttonText}>Doação</Text>
      </TouchableOpacity>
      {/* Conteúdo principal aqui */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Desenvolvido por Kamilla, Jadson e Lucas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEFCED', // Fundo branco
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centralizar no eixo horizontal
    paddingVertical: 20, // Aumentar um pouco o espaço vertical
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
  urgentButton: {
    backgroundColor: 'black',
    paddingVertical: 25, // Aumentar um pouco o tamanho
    paddingHorizontal: 50, // Aumentar um pouco o tamanho
    borderRadius: 20,
    marginBottom: 30, // margin bottom abaixar os botões
  },
  donationButton: {
    backgroundColor: 'black',
    paddingVertical: 25, // Aumentar um pouco o tamanho
    paddingHorizontal: 50, // Aumentar um pouco o tamanho
    borderRadius: 20,
    marginTop: 10, // Manter um espaço de 10 unidades acima
  },
  buttonText: {
    color: 'white',
  },
  footer: {
    backgroundColor: 'red', // Cor do fundo do rodapé
    padding: 10,
    marginTop: 'auto', // Mover para a parte inferior
    width: '100%', // Largura total
    alignItems: 'center', // Centralizar o texto
  },
  footerText: {
    color: 'white',
  },
});

export default HomeScreen;
