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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
