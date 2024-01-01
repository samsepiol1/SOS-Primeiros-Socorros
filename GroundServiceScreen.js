import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GroundServiceScreen = () => {
  const [procedures, setProcedures] = useState([]);

  useEffect(() => {
    const loadProcedures = async () => {
      try {
        const storedProcedures = await AsyncStorage.getItem('groundServiceProcedures');
        if (storedProcedures) {
          setProcedures(JSON.parse(storedProcedures));
        } else {
          const initialProcedures = [
            {
              id: '1',
              title: 'Chame Ajuda Imediata',
              description: 'Em caso de afogamento em terra, chame ajuda imediatamente.',
             
            },
            {
              id: '2',
              title: 'Inicie a RCP, se Treinado',
              description: 'Se você é treinado, inicie a ressuscitação cardiopulmonar (RCP).',
             
            },
            // Outros procedimentos podem ser adicionados aqui
          ];
          setProcedures(initialProcedures);
          await AsyncStorage.setItem('groundServiceProcedures', JSON.stringify(initialProcedures));
        }
      } catch (error) {
        console.error('Error loading procedures from AsyncStorage:', error);
      }
    };

    loadProcedures();
  }, []);

  const deleteProcedures = async () => {
    try {
      await AsyncStorage.removeItem('groundServiceProcedures');
      setProcedures([]);
    } catch (error) {
      console.error('Error deleting procedures from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Procedimentos para Afogamento em Terra</Text>

      <FlatList
        data={procedures}
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
  image: {
    width: 350,
    height: 350,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GroundServiceScreen;