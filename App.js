// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Начальный экран
import LoginScreen from './src/screens/LoginScreen'; // Экран 
import RegistrationScreen from './src/screens/RegistrationScreen'; // Экран входа

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: 'Вход в систему',
            headerBackTitle: '',
            headerStyle: { backgroundColor: '#EF2A39' }, // Цвет заголовка
            headerTintColor: '#FFFFFF', // Цвет стрелки назад
          }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerTitle: 'Регистрация',
            headerBackTitle: '',
            headerStyle: { backgroundColor: '#EF2A39' }, // Цвет заголовка
            headerTintColor: '#FFFFFF', // Цвет стрелки назад
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}