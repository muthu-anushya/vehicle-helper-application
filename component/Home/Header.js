import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {Text} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 5,
        alignItems: 'center',
      }}>
      <Image
        style={styles.logo}
        source={require('../../assets/iconforapp.png')}
      />
      <View>
        <Text style={styles.textstyle}>Welcome! </Text>
      </View>
      <Image
        style={styles.userImage}
        source={require('../../assets/placeholder.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  search: {
    borderWidth: 1,
    padding: 4,
    borderColor: 'black',
    borderRadius: 50,
    marginTop: 10,

    paddingLeft: 10,
    width: Dimensions.get('screen').width * 0.6,
  },
  userImage: {
    width: 50,
    height: 50,
    marginTop: 10,

    borderRadius: 100,
  },
  textstyle: {
    fontFamily: 'poetsenOne',
    color: 'black',
    fontSize: 25,
  },
});

export default Header;
