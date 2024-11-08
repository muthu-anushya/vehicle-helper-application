import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function Details({route, navigation}) {
  const {uid} = route.params;
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const saveDetails = async () => {
    try {
      await firestore().collection('users').doc(uid).set({
        name,
        gender,
        address,
        phoneNumber, // Use the correct state variable here
      });

      navigation.navigate('Dashboard');
    } catch (error) {
      console.log('Error saving details', error);
    }
  };

  return (
    <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 40,
          marginTop: 150,
        }}>
        Enter your details
      </Text>
      <TextInput
        style={{
          height: 50,
          borderColor: 'black',
          width: '100%',
          borderWidth: 1,
          marginBottom: 30,
          paddingHorizontal: 10,
        }}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={{
          height: 50,
          borderColor: 'black',
          width: '100%',
          borderWidth: 1,
          marginBottom: 30,
          paddingHorizontal: 10,
        }}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={{
          height: 50,
          borderColor: 'black',
          width: '100%',
          borderWidth: 1,
          marginBottom: 30,
          paddingHorizontal: 10,
        }}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={{
          height: 50,
          borderColor: 'black',
          width: '100%',
          borderWidth: 1,
          marginBottom: 30,
          paddingHorizontal: 10,
        }}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TouchableOpacity
        onPress={saveDetails}
        style={{
          backgroundColor: '#841584',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18}}>Save Details</Text>
      </TouchableOpacity>
    </View>
  );
}
