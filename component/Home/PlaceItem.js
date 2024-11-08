import React from 'react';
import {View, Image, Text} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export default function PlaceItem({place}) {
  if (!place) {
    return null;
  }

  const photoReference = place.photos?.[0]?.photo_reference || ''; // Ensure place.photos is not undefined

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        alignItems: 'center',

        gap: 15,
      }}>
      {place?.photos ? (
        <Image
          source={{
            uri:
              'https://maps.googleapis.com/maps/api/place/photo' +
              '?maxwidth=400' +
              '&photo_reference=' +
              photoReference +
              '&key=AIzaSyAOR4IaOJbymMo0icx0FrNJxy2fCh1Wzds', // Replace YOUR_API_KEY with your actual API key
          }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
      ) : (
        <Image
          source={require('../../assets/placeholder.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginBottom: 10,
          }}
        />
      )}

      <View style={{flex: 1, marginLeft: 10}}>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            marginBottom: 10,
            fontFamily: 'poetsenOne',
            color: 'black',
          }}>
          {place.name || 'Unknown'}{' '}
          {/* Display "Unknown" if place.name is undefined */}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            marginBottom: 10,
            fontFamily: 'poetsenOne',
            color: 'black',
          }}>
          {place.vicinity || 'Unknown'}{' '}
          {/* Display "Unknown" if place.vicinity is undefined */}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome name="star" size={20} color="#fca503" />
          <Text
            style={{marginLeft: 5, fontFamily: 'poetsenOne', color: 'black'}}>
            {place.rating || 'N/A'}{' '}
            {/* Display "N/A" if place.rating is undefined */}
          </Text>
        </View>
      </View>
    </View>
  );
}
