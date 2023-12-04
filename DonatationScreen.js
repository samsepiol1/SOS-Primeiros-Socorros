import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Clipboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';

const DonationScreen = () => {
  const navigation = useNavigation();

  const handleCopyQRCode = () => {
    // Lógica para copiar o QRCode para a área de transferência
    Clipboard.setString('Texto ou link do QRCode aqui');
    // Mensagem indicando que o QRCode foi copiado
    alert('QRCode copiado para a área de transferência');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo.jpeg')} style={styles.logo} />
        <Text style={styles.headerText}>Tela de Doação</Text>
      </View>
      <View style={styles.qrCodeContainer}>
        <QRCode value="Texto ou link do QRCode aqui" size={200} />
        <Text style={styles.qrCodeText}>Escaneie o QRCode para doação</Text>
      </View>
      <TouchableOpacity style={styles.copyButton} onPress={handleCopyQRCode}>
        <Text style={styles.copyButtonText}>Copiar QRCode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 25,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qrCodeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  qrCodeText: {
    marginTop: 10,
    fontSize: 16,
  },
  copyButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
  },
  copyButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DonationScreen;