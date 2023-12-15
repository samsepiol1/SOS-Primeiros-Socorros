// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DonationScreen from './DonationScreen';
import UrgencyScreen from './UrgencyScreen'; 
import BurningScreen from './BurningScreen';
import CutScreen from './CutScreen';
import DrowningScreen from './DrowningScreen';
import ChokingScreen from './ChokingScreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="S.O.S - Primeiros Socorros" component={HomeScreen} />
        <Stack.Screen name="Donation" component={DonationScreen} />
        <Stack.Screen name="Urgency" component={UrgencyScreen} />
        <Stack.Screen name="Burning" component={BurningScreen} />
        <Stack.Screen name="Cutting" component={CutScreen} />
        <Stack.Screen name="Drown" component={DrowningScreen} />
        <Stack.Screen name="Choke" component={ChokingScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;