import React, { useState } from 'react';
import { StatusBar, TextInput, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState('');

  const addItem = () => {
    if (text.trim() !== '') {
      setItems(prevItems => [...prevItems, { id: Date.now(), text, completed: false }]);
      setText('');
    }
  };

  const deleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const toggleCompleted = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tareas</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Ingrese una tarea..."
        placeholderTextColor="#777"
        onSubmitEditing={addItem}
      />
      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, item.completed && styles.completedItem]}>
            <TouchableOpacity onPress={() => toggleCompleted(item.id)} style={styles.checkbox}>
              {item.completed && <View style={styles.checkedIcon} />}
            </TouchableOpacity>
            <Text style={[styles.itemText, item.completed && styles.completedText]}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteItem(item.id)} style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
    fontSize: 16,
    color: '#555',
  },
  list: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  itemText: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  completedItem: {
    backgroundColor: '#f0f0f0',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#777',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#007bff',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedIcon: {
    width: 14,
    height: 14,
    backgroundColor: '#007bff',
    borderRadius: 3,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
