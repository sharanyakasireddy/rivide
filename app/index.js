import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Use navigation prop directly in the functional component
export default function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RIVIDE</Text>
      <Text style={styles.caption}>Divide your Ride</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('signin')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
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
