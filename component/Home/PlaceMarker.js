import {View, Text} from 'react-native';
import React from 'react';
import {MapMarker, Marker} from 'react-native-maps';
export default function PlaceMarker({item}) {
  return (
    <Marker
      coordinate={{
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0421,
      }}
      title={item.name}
    />
  );
}
