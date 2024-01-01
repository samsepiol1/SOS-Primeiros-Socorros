import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SuperficialCutScreen = () => {
  const [procedures, setProcedures] = useState([]);

  useEffect(() => {
    const loadProcedures = async () => {
      try {
        const storedProcedures = await AsyncStorage.getItem('superficialCutProcedures');
        if (storedProcedures) {
          setProcedures(JSON.parse(storedProcedures));
        } else {
          const initialProcedures = [
            {
              id: '1',
              title: 'Limpe a Ferida',
              description: 'Lave delicadamente a área afetada com água limpa e sabão.',
             
            },
            {
              id: '2',
              title: 'Aplique Pressão Leve',
              description: 'Utilize um curativo limpo e aplique pressão leve sobre o corte.',
              
            },
            {
              id: '3',
              title: 'Procure Atendimento Médico, se Necessário',
              description: 'Se o corte for profundo ou não parar de sangrar, busque ajuda médica.',
             
            },
            // Outros procedimentos podem ser adicionados aqui
          ];
          setProcedures(initialProcedures);
          await AsyncStorage.setItem('superficialCutProcedures', JSON.stringify(initialProcedures));
        }
      } catch (error) {
        console.error('Error loading procedures from AsyncStorage:', error);
      }
    };

    loadProcedures();
  }, []);

  const deleteProcedures = async () => {
    try {
      await AsyncStorage.removeItem('superficialCutProcedures');
      setProcedures([]);
    } catch (error) {
      console.error('Error deleting procedures from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Procedimentos para Corte Superficial</Text>

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

export default SuperficialCutScreen;