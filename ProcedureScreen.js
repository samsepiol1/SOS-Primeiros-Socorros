import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProcedureScreen = () => {
  const [urgencies, setUrgencies] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const storedUrgencies = await AsyncStorage.getItem('urgencies');
        if (storedUrgencies) {
          setUrgencies(JSON.parse(storedUrgencies));
        }
      } catch (error) {
        console.error('Error loading urgencies from AsyncStorage:', error);
      }
    };

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Procedures of Urgency</Text>

      <FlatList
        data={urgencies}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.urgencyItem}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  urgencyItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#D04936',
    borderRadius: 10,
  },
});

export default ProcedureScreen;