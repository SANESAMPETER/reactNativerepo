import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [name, setName] = useState('');
  const handlePress = () => {
    const trimmedName = name.trim()
    if (trimmedName === '') {
      Alert.alert('Validation Error', 'Name is requiredaa.');

    } else {
      Alert.alert('Success', `Hello, ${trimmedName}!`);

    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>👋 Welcome to React Native</Text>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />


      <TextInput style={styles.input}
        placeholder="Type here"
        value={name}
        onChangeText={(text) => setName(text)} />
      <Button
        title="Greet Me"
        onPress={handlePress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0'
  },
  heading: {
    fontSize: 22, marginBottom: 20, color: '#333'
  },
  image: {
    width: 100, height: 100, marginBottom: 20
  },
  label: {
    fontSize: 20, marginBottom: 10
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20
  }
});
