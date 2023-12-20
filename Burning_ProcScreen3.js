import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Burning_ProcScreen2 from './Burning_ProcScreen2';

const Burning_ProcScreen3 = () => {
  const [burnProcedures, setBurnProcedures] = useState([]);

  useEffect(() => {
    const loadBurnProcedures = async () => {
      try {
        const storedProcedures = await AsyncStorage.getItem('thirdDegreeBurnProcedures');
        if (storedProcedures) {
          setBurnProcedures(JSON.parse(storedProcedures));
        } else {
          const initialProcedures = [
            {
              id: '1',
              title: 'Chame Ajuda Médica Imediata',
              description: 'Queimaduras de terceiro grau exigem cuidados médicos urgentes.',
            },
            {
              id: '2',
              title: 'Não Utilize Água Fria',
              description: 'Evite usar água fria, pois pode piorar a situação.',
            },
            {
              id: '3',
              title: 'Não Remova Roupas Grudadas',
              description: 'Não tente remover roupas grudadas na queimadura.',
            },
          ];
          setBurnProcedures(initialProcedures);
          await AsyncStorage.setItem('thirdDegreeBurnProcedures', JSON.stringify(initialProcedures));
        }
      } catch (error) {
        console.error('Error loading third-degree burn procedures from AsyncStorage:', error);
      }
    };

    loadBurnProcedures();
  }, []);

  const deleteProcedures = async () => {
    try {
      await AsyncStorage.removeItem('thirdDegreeBurnProcedures');
      setBurnProcedures([]);
    } catch (error) {
      console.error('Error deleting third-degree burn procedures from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Procedimentos para Queimaduras de 3º Grau</Text>

      <FlatList
        data={burnProcedures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.procedureItem}>
            <Text style={styles.title}>{item.title}</Text>
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
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Burning_ProcScreen3;
