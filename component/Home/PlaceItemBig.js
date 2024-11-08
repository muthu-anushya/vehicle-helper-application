import {View, Text, Image} from 'react-native';
import React from 'react';
import {FontAwesome} from '@expo/vector-icons';

export default function PlaceItemBig({place}) {
  return (
    <View style={{marginTop: 20}}>
      {place?.photos ? (
        <Image
          source={{
            uri:
              'https://maps.googleapis.com/maps/api/place/photo' +
              '?maxwidth=400' +
              '&photo_reference=' +
              place?.photos[0]?.photo_reference +
              '&key=AIzaSyAOR4IaOJbymMo0icx0FrNJxy2fCh1Wzds',
          }}
          style={{width: '100%', height: 130, borderRadius: 15}}
        />
      ) : null}
      <Text
        numberOfLines={2}
        style={{
          fontSize: 18,
          marginBottom: 2,
          fontFamily: 'poetsenOne',
          color: 'black',
        }}>
        {place.name}
      </Text>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 5,
          fontFamily: 'poetsenOne',
          color: 'black',
        }}
        numberOfLines={2}>
        {place.vicinity}
      </Text>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          flexDirection: 'row',
        }}>
        <FontAwesome name="star" size={20} color="#fca503" />
        <Text>{place.rating}</Text>
      </View>
    </View>
  );
}
