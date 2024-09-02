import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

const ChatBotScreen = () => {
  return (
    <ImageBackground source={require('../assets/ecolegacy.jpeg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Chat with EcoBot</Text>
        <View style={styles.chatContainer}>
          <Text style={styles.message}>Hey there! Ready to explore the endless possibilities?</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Type a message..." 
            placeholderTextColor="#fff" 
          />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  chatContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: '#FFD700',
    marginBottom: 15,
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
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'rgba(255, 215, 0, 0.7)',  // Gold color with 70% opacity
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default ChatBotScreen;
