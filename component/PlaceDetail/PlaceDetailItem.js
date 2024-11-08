import {View, Text} from 'react-native';
import React from 'react';
import ShareService from '../Services/ShareService';
import {Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

export default function PlaceDetailItem({place, onDirectionClick}) {
  return (
    <View>
      <Text style={{fontSize: 26}}>{place.name}</Text>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10',
          gap: 5,
          flexDirection: 'row',
        }}>
        <FontAwesome name="star" size={20} color="#fca503" />
        <Text>{place.rating}</Text>
      </View>
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
          style={{
            width: '100%',
            height: 160,
            borderRadius: 15,
            marginTop: 10,
          }}
        />
      ) : null}

      <Text
        style={{fontSize: 16, marginTop: 10, color: 'blue'}}
        numberOfLines={2}>
        {place.vicinity ? place.vicinity : place.formatted_address}
      </Text>
      {place?.opening_hours ? (
        <Text style={{}}>
          {place?.opening_hours?.open_now == true ? '(Open)' : '(Closed)'}
        </Text>
      ) : null}

      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          display: 'flex',
          gap: 10,
        }}>
        <TouchableOpacity
          onPress={() => onDirectionClick()}
          style={{
            direction: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#05d1ff',
            width: 110,
            padding: 3,
            borderRadius: 40,
            justifyContent: 'center',
          }}>
          <Ionicons name="navigate-circle-outline" size={24} color="black" />
          <Text style={{fontSize: 16}}>Direction</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ShareService.SharePlace(place)}
          style={{
            direction: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
            backgroundColor: '#05d1ff',
            width: 90,
            padding: 3,
            borderRadius: 40,
            justifyContent: 'center',
          }}>
          <FontAwesome name="share-square-o" size={24} color="black" />
          <Text style={{fontSize: 16, color: 'black'}}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
