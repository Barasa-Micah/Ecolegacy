import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const MainScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/ecolegacy.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Project')}>
          <Text style={styles.buttonText}>Project</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatBox')}>
          <Text style={styles.buttonText}>ChatBot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Translation')}>
          <Text style={styles.buttonText}>Translation</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 20,
    backgroundColor: 'rgba(255, 215, 0, 0.7)',  // Gold color with 70% opacity
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default MainScreen;
