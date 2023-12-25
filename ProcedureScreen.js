import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProcedureScreen = () => {
  const [heartAttackProcedures, setHeartAttackProcedures] = useState([]);

  useEffect(() => {
    const loadHeartAttackProcedures = async () => {
      try {
        const storedProcedures = await AsyncStorage.getItem('heartAttackProcedures');
        if (storedProcedures) {
          setHeartAttackProcedures(JSON.parse(storedProcedures));
        } else {
          const initialProcedures = [
            {
              id: '1',
              title: 'Chame Ajuda Médica Imediata',
              description: 'Ataques cardíacos exigem cuidados médicos urgentes.',
              image: require('./assets/heart.jpg'), // Adicione a referência da imagem
            },
            {
              id: '2',
              title: 'Administre Aspirina',
              description: 'Caso a pessoa não seja alérgica, uma aspirina pode ser benéfica.',
              image: require('./assets/heart2.jpg'), // Adicione a referência da imagem
            },
            {
              id: '3',
              title: 'Realize RCP, se Treinado',
              description: 'Se treinado, inicie a ressuscitação cardiopulmonar (RCP).',
              image: require('./assets/heart3.jpg'), // Adicione a referência da imagem
            },
          ];
          setHeartAttackProcedures(initialProcedures);
          await AsyncStorage.setItem('heartAttackProcedures', JSON.stringify(initialProcedures));
        }
      } catch (error) {
        console.error('Error loading heart attack procedures from AsyncStorage:', error);
      }
    };

    loadHeartAttackProcedures();
  }, []);

  const deleteProcedures = async () => {
    try {
      await AsyncStorage.removeItem('heartAttackProcedures');
      setHeartAttackProcedures([]);
    } catch (error) {
      console.error('Error deleting heart attack procedures from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Procedimentos para Ataque Cardíaco</Text>

      <FlatList
        data={heartAttackProcedures}
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

export default ProcedureScreen;
