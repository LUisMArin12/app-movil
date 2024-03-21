import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';  
import RegistroScreen from './screens/RegistroScreen';
import TrainingProgress from './screens/TrainingProgress';
import SoporteScreen from './screens/soporteScreen';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registro" component={RegistroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen}>
        </Stack.Screen>
        <Stack.Screen name="TrainingProgress" component={TrainingProgress} />
        <Stack.Screen name='Datos' component={SoporteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
