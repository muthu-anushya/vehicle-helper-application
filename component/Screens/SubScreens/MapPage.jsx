import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GoogleMapView from './GoogleMapView';
import Header from '../../Home/Header';
import GlobalApi from '../../Services/GlobalApi';
import {UserLocationContext} from '../../Context/UserLocationContext';
import {useContext, useState, useEffect} from 'react';
import ItemList from '../../Home/ItemList';
import PlaceList from '../../Home/PlaceList';
import {ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import FreeTrial from '../FreeTrial';
import {TouchableOpacity} from 'react-native';
import {Button} from 'react-native';
export default function MapPage() {
  const {location} = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location && location.coords) {
      setLoading(true);
      setError(null);
      GetNearBySearchPlace('restaurant');
    }
  }, [location]);

  const GetNearBySearchPlace = value => {
    console.log('category', value);
    GlobalApi.nearByPlace(
      location.coords.latitude,
      location.coords.longitude,
      value,
    )
      .then(resp => {
        setPlaceList(resp.data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };
  return (
    <ScrollView style={{padding: 20}}>
      <Header />
      <GoogleMapView placeList={placeList} />
      <Button title="Push Notification i'm in struggle" />
      <ItemList setCategory={value => GetNearBySearchPlace(value)} />
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {placeList && placeList.length > 0 && <PlaceList placeList={placeList} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
