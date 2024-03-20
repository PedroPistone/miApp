import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CarDetailScreen = ({ route }) => {
  const car = route.params?.car;

  return (
    <View style={styles.container}>
      <Image source={car.image} style={styles.carImage} />
      <Text style={styles.carName}>{car.brand} - {car.model}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailGroup}>
          <Text style={styles.groupTitle}>Información Básica:</Text>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Año:</Text>
            <Text>{car.year}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Color:</Text>
            <Text>{car.color}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Precio:</Text>
            <Text>${car.price}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Kilometraje:</Text>
            <Text>{car.mileage}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Condición:</Text>
            <Text>{car.condition}</Text>
          </View>
        </View>
        <View style={styles.detailGroup}>
          <Text style={styles.groupTitle}>Detalles Técnicos:</Text>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Puertas:</Text>
            <Text>{car.doors}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Transmisión:</Text>
            <Text>{car.transmission}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Potencia:</Text>
            <Text>{car.power}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  carImage: {
    width: '101%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailGroup: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});

export default CarDetailScreen;
