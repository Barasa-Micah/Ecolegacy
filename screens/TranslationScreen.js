import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';

const TranslationScreen = ({ navigation }) => {
  const [language, setLanguage] = useState('');

  return (
    <ImageBackground source={require('../assets/ecolegacy.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Language Translation</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="Enter your preferred language (e.g., English, German)" 
          placeholderTextColor="#FFD700" 
          value={language} 
          onChangeText={setLanguage} 
        />

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Confirm Language</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#FFD700',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    color: '#fff',
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

export default TranslationScreen;
