import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ElectricShockProcScreen = () => {
  const [electricShockProcedures, setElectricShockProcedures] = useState([]);

  useEffect(() => {
    const loadElectricShockProcedures = async () => {
      try {
        const storedProcedures = await AsyncStorage.getItem('electricShockProcedures');
        if (storedProcedures) {
          setElectricShockProcedures(JSON.parse(storedProcedures));
        } else {
          const initialProcedures = [
            {
              id: '1',
              title: 'Chame Ajuda Médica Imediata',
              description: 'Choques elétricos podem ser graves; busque ajuda médica imediatamente.',
              image: require('./assets/Eletric_Proc1.jpg'), // Adicione a referência da imagem
            },
            {
              id: '2',
              title: 'Desconecte a Fonte de Eletricidade (Se Possível)',
              description: 'Se seguro, desconecte a fonte de eletricidade para evitar mais riscos.',
              image: require('./assets/Eletric_Proc2.jpg'), // Adicione a referência da imagem

            },
            {
              id: '3',
              title: 'Não Toque na Pessoa Antes de Garantir a Segurança',
              description: 'Use materiais não condutores, como madeira, para afastar a pessoa do ponto de contato elétrico.',
              image: require('./assets/Eletric_Proc3.jpg'), // Adicione a referência da imagem
            },
          ];
          setElectricShockProcedures(initialProcedures);
          await AsyncStorage.setItem('electricShockProcedures', JSON.stringify(initialProcedures));
        }
      } catch (error) {
        console.error('Error loading electric shock procedures from AsyncStorage:', error);
      }
    };

    loadElectricShockProcedures();
  }, []);

  const deleteProcedures = async () => {
    try {
      await AsyncStorage.removeItem('electricShockProcedures');
      setElectricShockProcedures([]);
    } catch (error) {
      console.error('Error deleting electric shock procedures from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Procedimentos para Choque Elétrico</Text>

      <FlatList
        data={electricShockProcedures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.procedureItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={deleteProcedures}>
        <Text style={styles.addButtonText}>Apagar Procedimentos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  procedureItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#D04936',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
  addButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#D04936',
    borderRadius: 5,
  },

  image: {
    width: 350, // Ajuste conforme necessário
    height: 350, // Ajuste conforme necessário
    marginBottom: 10,
    resizeMode: 'cover', // Ajuste conforme necessário
    borderRadius: 5, // Adicione bordas arredondadas conforme necessário
  },

  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ElectricShockProcScreen;
