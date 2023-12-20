import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BurningProcScreen = () => {
  const [burnProcedures, setBurnProcedures] = useState([]);

  useEffect(() => {
    const loadBurnProcedures = async () => {
      try {
        const storedProcedures = await AsyncStorage.getItem('firstDegreeBurnProcedures');
        if (storedProcedures) {
          setBurnProcedures(JSON.parse(storedProcedures));
        } else {
          const initialProcedures = [
            {
              id: '1',
              title: 'Resfrie a Área Afetada',
              description: 'Use água fria corrente por pelo menos 10 minutos.',
            },
            {
              id: '2',
              title: 'Não Use Gelo',
              description: 'Não aplique gelo diretamente na queimadura de primeiro grau.',
            },
            {
              id: '3',
              title: 'Evite Produtos Químicos',
              description: 'Não use produtos químicos, como pomadas, sem orientação médica.',
            },
          ];
          setBurnProcedures(initialProcedures);
          await AsyncStorage.setItem('firstDegreeBurnProcedures', JSON.stringify(initialProcedures));
        }
      } catch (error) {
        console.error('Error loading first-degree burn procedures from AsyncStorage:', error);
      }
    };

    loadBurnProcedures();
  }, []);

  const deleteProcedures = async () => {
    try {
      await AsyncStorage.removeItem('firstDegreeBurnProcedures');
      setBurnProcedures([]);
    } catch (error) {
      console.error('Error deleting first-degree burn procedures from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Procedimentos para Queimaduras de 1º Grau</Text>

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

export default BurningProcScreen;
