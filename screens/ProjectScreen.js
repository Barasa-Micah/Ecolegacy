import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

const ProjectScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/ecolegacy.jpeg')} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Explore Sustainability Projects</Text>
        <View style={styles.projectContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Explore Other Projects</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
  },
  projectContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
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

export default ProjectScreen;
