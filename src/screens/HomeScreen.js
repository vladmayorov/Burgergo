// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Burgergo</Text>
      <Image
        source={require('../components/glav.png')} // Убедитесь, что путь указан правильно
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Вход</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.buttonText}>Регистрация</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF2A39', // Цвет фона
  },
  title: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40, // Цвет текста
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#FFFFFF', // Цвет кнопки
    borderRadius: 50,
    padding: 15,
    width: '48%', // Овальная кнопка
    alignItems: 'center',
  },
  buttonText: {
    color: '#EF2A39',
    fontSize: 16,
  },
});

export default HomeScreen;