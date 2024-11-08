import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {UserLocationContext} from '../Context/UserLocationContext';
import * as Location from 'expo-location';

const FreeTrial = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(null);
  const {location} = useContext(UserLocationContext);
  const [freeTrial, setFreeTrial] = useState(0);
  useEffect(() => {
    const getAddress = async () => {
      if (location && location.coords) {
        const {latitude, longitude} = location.coords;
        const address = await fetchLocation(latitude, longitude);
        setAddress(address);
      }
    };
    getAddress();
  }, [location]);

  const fetchLocation = async (latitude, longitude) => {
    try {
      const [address] = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      return `${address.name}, ${address.street}, ${address.city}, ${address.region}, ${address.country}`;
    } catch (error) {
      console.error(error);
      return 'Unknown Location';
    }
  };

  const onClick = () => {
    setFreeTrial(prevFreeTrial => {
      const newFreeTrial = prevFreeTrial + 1;
      if (newFreeTrial <= 5) {
        navigation.navigate('MapPage');
      } else {
        Alert.alert('Your Free Trial is Over');

        return;
      }
      return newFreeTrial;
    });
  };

  return (
    <View style={styles.container}>
      {address ? (
        <Text style={styles.locationText}>
          {' '}
          Your Current Location: {address}
        </Text>
      ) : (
        <Text style={styles.loadingText}>Loading location...</Text>
      )}

      {freeTrial <= 5 ? (
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={onClick}
          disabled={loading}>
          <Text style={styles.buttonText}>Your Free Trial ({freeTrial}/5)</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          disabled={loading}>
          <Text style={styles.buttonText}>Make Payment & Continue</Text>
        </TouchableOpacity>
      )}
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
  locationText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'poetsenOne',
    color: 'black',
  },
  loadingText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'gray',
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  buttonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default FreeTrial;
