import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import {StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native';
function Services({navigation}) {
  // const navigation = useNavigation(); // Use useNavigation hook to get navigation object
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subheader}>Key Features:</Text>
      <Text style={styles.listItem}>
        - Access a curated list of accredited mechanics
      </Text>
      <Text style={styles.listItem}>
        - Get real-time assistance in remote and urban locations
      </Text>
      <Text style={styles.listItem}>
        - Utilize seamless navigation integrated with Google Maps
      </Text>
      <Text style={styles.listItem}>
        - Experience user-friendly features inspired by popular ride-sharing
        apps
      </Text>
      {/* <FlatList> */}
      <View style={styles.serviceImage}>
        <Text style={styles.listItem}>Services</Text>
        <Image
          style={styles.imagestyle}
          source={require('../../assets/drawerHeader.jpeg')}
        />
        <Image
          style={styles.imagestyle}
          source={require('../../assets/SpareParts.jpeg')}
        />
        <Image
          style={styles.imagestyle}
          source={require('../../assets/towing_img.png')}
        />
      </View>
      {/* <Image
      
      source={require('../../assets/mechnicalImage')}
    /> */}
      {/* <Image source={require('../../assets/mechnicalImage')} /> */}
      {/* </FlatList> */}

      <Text style={styles.subheader}>Seamless and Convenient</Text>
      <Text style={styles.paragraph}>
        Our application combines the power of Google Maps with intuitive
        features, making it easy to locate nearby repair shops and get back on
        the road swiftly. ORVH transforms the challenge of vehicle breakdowns
        into a hassle-free experience.
      </Text>
    </ScrollView>
  );
}

export default Services;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9', // Light background color for better readability
    borderColor: '#9e039e',
    borderWidth: 2,
  },
  header: {
    fontFamily: 'poetsenOne',
    fontSize: 24,

    color: 'black', // Slightly softer black
    marginBottom: 16,
    backgroundColor: '#9adbe7', // Light grey background
    padding: 10,
    borderRadius: 5, // Rounded corners
    textAlign: 'center', // Centered text
  },
  subheader: {
    fontFamily: 'poetsenOne',
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#007BFF', // Blue background for subheaders
    marginTop: 16,
    marginBottom: 8,
    padding: 10,
    borderRadius: 5, // Rounded corners
  },
  paragraph: {
    fontFamily: 'poetsenOne',
    fontSize: 16,
    color: '#333333', // Slightly softer black
    marginBottom: 8,
    lineHeight: 24, // Improved readability
  },
  listItem: {
    fontFamily: 'poetsenOne',
    color: '#000000',
    fontSize: 20,
    marginLeft: 16,
    marginBottom: 4,
    lineHeight: 24, // Improved readability
  },
  imagestyle: {
    width: 200,
    height: 200,
  },
  serviceImage: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    flex: 1,
  },
});
