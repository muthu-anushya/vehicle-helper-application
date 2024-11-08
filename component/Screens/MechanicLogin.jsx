import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const MechanicLogin = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter some text:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
  },
});

export default MechanicLogin;
