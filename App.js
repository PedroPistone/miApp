import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hola Coder!</Text>
      <Text style={styles.introText}>
        Sumérgete en un mundo de creatividad y expresión a través del arte digital. Descubre formas
        únicas de representar ideas y emociones. Todo bien?
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50', // Cambié el color de fondo a un tono más oscuro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498db', // Cambié el color del texto a un tono más claro
    textAlign: 'center',
  },
  introText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ecf0f1',
    lineHeight: 24,
  },
});
