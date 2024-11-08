import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {useContext} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {UserLocationContext} from '../../Context/UserLocationContext';
import PlaceMarker from '../../Home/PlaceMarker';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
export default function GoogleMapView({placeList}) {
  const [mapRegion, setMapRegion] = useState(null);

  const {location, setLocation} = useContext(UserLocationContext);
  console.log(location);
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
    <>
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'poetsenOne',
            color: '#000000',
            fontSize: 20,
          }}>
          Top Near By Places
        </Text>
        {location ? (
          <View style={styles.mapContainer}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={mapRegion}
              showsUserLocation={true}>
              {mapRegion && <Marker coordinate={mapRegion} title="user" />}
              {placeList.map(
                (item, index) =>
                  index <= 5 && <PlaceMarker key={index} item={item} />,
              )}
            </MapView>
          </View>
        ) : null}
      </View>
      <View style={{marginLeft: 160}}>
        <Icon name="chevron-down" size={30} color="#000" marginTop={40} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: '#9e039e',
    borderWidth: 5,
    marginTop: 7,
  },
  map: {
    width: Dimensions.get('screen').width * 1,
    height: Dimensions.get('screen').height * 0.48,
  },
});
