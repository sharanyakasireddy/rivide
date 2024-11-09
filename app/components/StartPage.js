import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const StartPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Title with styled first 2 and last 2 letters */}
      <Text style={styles.title}>
        <Text style={styles.lightBlue}>RI</Text>
        <Text style={styles.defaultColor}>VI</Text>
        <Text style={styles.lightBlue}>DE</Text>
      </Text>
      
      {/* Caption */}
      <Text style={styles.caption}>Divide your Ride</Text>

      {/* Buttons */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Impact',
    marginBottom: 10,
    flexDirection: 'row',
  },
  lightBlue: {
    color: '#5271ff', // Light blue color
  },
  defaultColor: {
    color: '#0f2f76', // Dark blue color
  },
  caption: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default StartPage;
