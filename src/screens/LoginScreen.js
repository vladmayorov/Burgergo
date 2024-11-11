import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Burgergo</Text>

      
        <TextInput
          style={styles.input}
          placeholder='Введите логин'
          placeholderTextColor='#EF2A39'
        />

        
        <TextInput
          style={styles.input}
          placeholder='Введите пароль'
          placeholderTextColor='#EF2A39'
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EF2A39',
      },
      centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        color: '#FFFFFF',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 40,
      },
   
      input: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 18,
        color: "#FF0000",
        marginBottom: 20, // Отступ между полями ввода
      },
      button: {
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 50,
        marginTop: 20,
      },
      buttonText: {
        color: '#EF2A39',
        fontSize: 20,
        fontWeight: 'bold',
      },
});

export default LoginScreen;