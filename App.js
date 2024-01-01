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
import ProcedureScreen from './ProcedureScreen';
import Burning_ProcScreen from './Burning_ProcScreen';
import Burning_ProcScreen2 from './Burning_ProcScreen2';
import Burning_ProcScreen3 from './Burning_ProcScreen3';
import GunScreen from './GunScreen';
import ElectricShockProcScreen from './EletricShockScreen';
import GroundServiceScreen from './GroundServiceScreen'
import VictimRefusalScreen from './VictimRefusalScreen';
import SuperficialCutScreen from './SuperficialCutScreen';
import DeepCutScreen from './DeepCutScreen';
import ChokingChildScreen from './ChockingChildScreen';
import ConsciousVictimScreen from './ConsciousVictimScreen';
import ChokingAdultScreen from './ChockingAdultScreen';


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
        <Stack.Screen name="Procedure" component={ProcedureScreen} />
        <Stack.Screen name="Burning_Proc" component={Burning_ProcScreen} />
        <Stack.Screen name="Burning_Proc2" component={Burning_ProcScreen2} />
        <Stack.Screen name="Burning_Proc3" component={Burning_ProcScreen3} />
        <Stack.Screen name="Gun" component={GunScreen} />
        <Stack.Screen name="EletricShock" component={ElectricShockProcScreen} />
        <Stack.Screen name="GroundService" component={GroundServiceScreen} />
        <Stack.Screen name="VictimRefusal" component={VictimRefusalScreen} />
        <Stack.Screen name="Knive" component={SuperficialCutScreen} />
        <Stack.Screen name="DeepCut" component={DeepCutScreen} />
        <Stack.Screen name="Child" component={ChokingChildScreen} />
        <Stack.Screen name="Victim" component={ConsciousVictimScreen} />
        <Stack.Screen name="Adult" component={ChokingAdultScreen} />



      
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;