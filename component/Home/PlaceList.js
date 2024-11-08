import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import PlaceItem from './PlaceItem';
import PlaceItemBig from './PlaceItemBig';
import {useNavigation} from '@react-navigation/native';

export default function PlaceList({placeList}) {
  const navigator = useNavigation();
  const onPlaceClick = item => {
    navigator.navigate('place-detail', {place: item});
  };

  return (
    <ScrollView>
      <Text style={{fontSize: 20, fontFamily: 'poetsenOne', color: 'black'}}>
        Found {placeList.length} Places
      </Text>

      {placeList.map((item, index) => (
        <TouchableOpacity
          key={item.id || index.toString()}
          onPress={() => onPlaceClick(item)}>
          {index % 4 === 0 ? (
            <PlaceItemBig place={item} />
          ) : (
            <PlaceItem place={item} />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
