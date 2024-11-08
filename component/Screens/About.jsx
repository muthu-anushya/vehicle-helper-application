import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Welcome to ORVH - Your Reliable On-Road Vehicle Helper!
      </Text>

      <Text style={styles.paragraph}>
        ORVH connects you with certified mechanics to ensure you receive prompt
        and professional assistance whenever and wherever your vehicle needs it.
      </Text>

      <Text style={styles.subheader}>Get Started!</Text>
      <Text style={styles.paragraph}>
        Download ORVH today and travel with peace of mind, knowing help is just
        a tap away!
      </Text>
      <Text style={styles.subheader}>Why Choose ORVH?</Text>
      <Text style={styles.paragraph}>
        We understand the frustration and uncertainty that comes with vehicle
        mechanical issues, especially in remote areas. ORVH is designed to
        mitigate these concerns by offering a dependable network of mechanics at
        your fingertips. Our platform exclusively partners with legally endorsed
        and proficient mechanics, ensuring high-quality service for all users.
      </Text>
    </ScrollView>
  );
}

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

    color: '#000000', // Slightly softer black
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
});
