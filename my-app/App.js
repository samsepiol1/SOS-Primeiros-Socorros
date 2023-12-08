// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DonationScreen from './DonationScreen';
import UrgencyScreen from './UrgencyScreen'; // Adicione a nova tela aqui

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="S.O.S - Primeiros Socorros" component={HomeScreen} />
        <Stack.Screen name="Donation" component={DonationScreen} />
        <Stack.Screen name="Urgency" component={UrgencyScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;