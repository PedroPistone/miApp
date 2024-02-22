import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddCarScreen = ({ navigation, route }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');

  const handleAddCarPress = () => {
    const newCar = { id: Math.random(), brand, model };
    route.params.addCar(newCar);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setBrand}
        value={brand}
        placeholder="Marca del auto"
      />
      <TextInput
        style={styles.input}
        onChangeText={setModel}
        value={model}
        placeholder="Modelo del auto"
      />
      <Button title="Agregar Auto" onPress={handleAddCarPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
});

export default AddCarScreen;
