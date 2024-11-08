import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useContext} from 'react';
import {UserLocationContext} from '../Context/UserLocationContext';

import Header from '../Home/Header';

export default function GoogleMapViewMain({placeList}) {
  const [mapRegion, setMapRegion] = useState(null);
  const {location} = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>On Road Vehicle Helper</Text>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation={true}
          region={mapRegion}>
          {mapRegion && <Marker coordinate={mapRegion} title="Your Location" />}
          {/* Render markers for placeList here */}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontFamily: 'poetsenOne',
    color: '#000000',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: '#9e039e',
    borderWidth: 5,
    marginTop: 7,
    flex: 1,
  },
  map: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});
