import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarGalleryScreen from './CarGalleryScreen';
import AddCarScreen from './AddCarScreen';
import CarDetailScreen from './CarDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CarGallery" component={CarGalleryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddCar" component={AddCarScreen} options={{ title: 'Agregar Auto' }} />
        <Stack.Screen name="CarDetail" component={CarDetailScreen} options={{ title: 'Detalles del Auto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
