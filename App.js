import React from 'react';
<<<<<<< HEAD
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import MainScreen from './screens/MainScreen';
import ProjectScreen from './screens/ProjectScreen';
import ChatBotScreen from './screens/ChatBotScreen';
import TranslationScreen from './screens/TranslationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/* Welcome Screen */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        {/* Main Screen */}
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ headerShown: false }} 
        />
        {/* Project Screen */}
        <Stack.Screen 
          name="Project" 
          component={ProjectScreen} 
          options={{ title: 'Explore Projects' }} 
        />
        {/* ChatBox Screen */}
        <Stack.Screen 
          name="ChatBox" 
          component={ChatBotScreen} 
          options={{ title: 'Chat with EcoBot' }} 
        />
        {/* Translation Screen */}
        <Stack.Screen 
          name="Translation" 
          component={TranslationScreen} 
          options={{ title: 'Language Translation' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
=======
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}
>>>>>>> abab8e5b4b3e5308cbd9c0405bc4ff312c3c3ad4
