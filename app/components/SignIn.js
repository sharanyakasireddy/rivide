import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

// SignIn component
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle SignIn form submission
  const handleSignIn = () => {
    // Implement sign-in logic, e.g., send data to the backend
    console.log('Sign In with:', email, password);
    // You could also add navigation to go to the dashboard or main page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
