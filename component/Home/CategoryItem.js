import {View, Text} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
export default function CategoryItem({category}) {
  return (
    <View
      style={{
        padding: 5,
        alignItems: 'center',
        margin: 5,
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 15,
        fontFamily: 'poetsenOne',
        color: 'black',
      }}>
      <Image source={category.icon} style={{width: 50, height: 50}} />
      <Text style={{fontFamily: 'poetsenOne', color: 'black'}}>
        {category.name}
      </Text>
    </View>
  );
}
