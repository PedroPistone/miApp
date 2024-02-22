import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { Header, Card, Icon } from 'react-native-elements';

const CarGalleryScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  const cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', image: require('./assets/toyota_corolla.jpg'), year: 2021, color: 'Rojo', price: 25000, mileage: '30,000 km', condition: 'Usado' },
    { id: 2, brand: 'Honda', model: 'Civic', image: require('./assets/honda_civic.jpg'), year: 2020, color: 'Azul', price: 22000, mileage: '20,000 km', condition: 'Nuevo' },
    { id: 3, brand: 'Ford', model: 'Mustang', image: require('./assets/ford_mustang.jpg'), year: 2019, color: 'Negro', price: 35000, mileage: '40,000 km', condition: 'Usado' },
  ];

  const handleCarPress = (car) => {
    navigation.navigate('CarDetail', { car });
  };

  const handleSearch = () => {
    const filtered = cars.filter(car =>
      car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <View style={styles.container}>
      <Header
        centerComponent={<HeaderTitle />}
        containerStyle={styles.headerContainer}
        statusBarProps={{ barStyle: 'light-content', backgroundColor: '#ff5724' }}
      />
      <View style={styles.searchContainer}>
      <Icon name="search" type="font-awesome" color="#fff" size={20} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar auto..."
          placeholderTextColor="#fff"
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
          autoCapitalize="none"
        />
      </View>
      <FlatList
        data={searchTerm ? filteredCars : cars}
        keyExtractor={car => car.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCarPress(item)}>
            <Card containerStyle={styles.cardContainer}>
              <Image source={item.image} style={styles.carImage} />
              <Text style={styles.carName}>{item.brand} - {item.model}</Text>
              <Text>Año: {item.year}</Text>
              <Text>Color: {item.color}</Text>
              <Text>Precio: ${item.price}</Text>
              <Text>Kilometraje: {item.mileage}</Text>
              <Text>Condición: {item.condition}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const HeaderTitle = () => (
  <View style={styles.headerTitleContainer}>
    <Text style={styles.headerTitle}>Galería de Autos</Text>
    <Icon name="car" type="font-awesome" color="#fff" size={24} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  headerContainer: {
    backgroundColor: '#ff5722',
    borderBottomWidth: 0,
    elevation: 3,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#ff5722',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    fontFamily: 'Arial', 
  },
  cardContainer: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  carImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  carInfo: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 2,
  },
});
export default CarGalleryScreen;
