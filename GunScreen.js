import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const GunScreen = () => {
  const [GunProcedures, setGunProcedures] = useState([]);

  useEffect(() => {
    const loadGunProcedures = async () => {
      try {
        const storedProcedures = await AsyncStorage.getItem('GunProcedures');
        if (storedProcedures) {
          setGunProcedures(JSON.parse(storedProcedures));
        } else {
          const initialProcedures = [
            {
              id: '1',
              title: 'Chame Ajuda Médica Imediata',
              description: 'Em casos de ferimentos por arma de fogo, é fundamental priorizar a segurança e agir rapidamente para buscar assistência médica. As ações apropriadas podem variar dependendo da extensão e gravidade dos ferimentos. ',
            },
           
          ];
          setGunProcedures(initialProcedures);
          await AsyncStorage.setItem('GunProcedures', JSON.stringify(initialProcedures));
        }
      } catch (error) {
        console.error('Error loading Gun procedures from AsyncStorage:', error);
      }
    };

    loadGunProcedures();
  }, []);

  const deleteProcedures = async () => {
    try {
      await AsyncStorage.removeItem('GunProcedures');
      setGunProcedures([]);
    } catch (error) {
      console.error('Error deleting Gun procedures from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Procedimento para Corte com Arma</Text>

      <FlatList
        data={GunProcedures}
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

export default GunScreen;
