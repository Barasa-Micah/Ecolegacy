<<<<<<< HEAD
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/ecolegacy.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>EcoLegacy</Text>
        <Text style={styles.description}>
          Welcome to EcoLegacy! Discover sustainability initiatives and make a positive impact on the environment.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
=======
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput, Alert } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:8081/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          Alert.alert('Login successful');
          navigation.navigate('Main');
        } else {
          Alert.alert('Error', data.error);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        Alert.alert('Error', 'An error occurred. Please try again.');
      });
  };

  return (
    <ImageBackground source={require('../assets/pexels-fotios-photos-2304253.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>EcoLegacy</Text>
          <Text style={styles.description}>
            Welcome to EcoLegacy! Discover sustainability initiatives and make a positive impact on the environment.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.switchButton} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.switchButtonText}>Don't have an account? Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
>>>>>>> abab8e5b4b3e5308cbd9c0405bc4ff312c3c3ad4

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
<<<<<<< HEAD
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'rgba(255, 215, 0, 0.7)',  // Gold color with 70% opacity
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
=======
  overlay: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '80%',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 10,
>>>>>>> abab8e5b4b3e5308cbd9c0405bc4ff312c3c3ad4
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
<<<<<<< HEAD
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
=======
  },
  switchButton: {
    marginTop: 10,
  },
  switchButtonText: {
    fontSize: 16,
    color: 'white',
  },
});
>>>>>>> abab8e5b4b3e5308cbd9c0405bc4ff312c3c3ad4
