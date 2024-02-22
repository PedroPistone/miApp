import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarListScreen from './CarGalleryScreen';
import AddCarScreen from './AddCarScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CarList" component={CarListScreen} options={{ title: 'Lista de Autos' }} />
        <Stack.Screen name="AddCar" component={AddCarScreen} options={{ title: 'Agregar Auto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
