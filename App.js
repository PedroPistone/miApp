import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import CarGalleryScreen from './CarGalleryScreen';
import AddCarScreen from './AddCarScreen';
import CarDetailScreen from './CarDetailScreen';

const Tab = createBottomTabNavigator();
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="CarGallery" component={CarGalleryScreen} />
          <Tab.Screen name="AddCar" component={AddCarScreen} />
          <Tab.Screen name="CarDetail" component={CarDetailScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
