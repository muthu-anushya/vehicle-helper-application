import {
  View,
  Text,
  FlatList,
  ScrollView,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';

export default function ItemList({setCategory}) {
  const CategoryList = [
    {
      id: 1,
      name: 'Gas Station',
      value: 'gas_station',
      icon: require('../../assets/gas.png'),
    },
    {
      id: 2,
      name: 'Workshop',
      value: 'Workshop',
      icon: require('../../assets/mechanic.png'),
    },
    {
      id: 3,
      name: 'Spare Parts',
      value: 'Spare Parts',
      icon: require('../../assets/SpareParts.jpeg'),
    },
  ];
  return (
    <View style={{marginTop: 15}}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'poetsenOne',
          color: 'black',
        }}>
        Select Top category
      </Text>
      <FlatList
        data={CategoryList}
        horizontal={true}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
