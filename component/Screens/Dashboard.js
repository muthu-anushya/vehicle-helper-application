import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import call from 'react-native-phone-call';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Dashboard() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth().signOut();

      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const triggerCall = phoneNumber => {
    // Check for perfect 10 digit length
    if (phoneNumber.length !== 10) {
      alert('Please insert the correct contact number');
      return;
    }

    const args = {
      number: `${phoneNumber}`,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Mechanic Details</Text>

      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <View style={styles.iconContainer}>
              <Icon name="user" size={90} color="black" />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.detailText}>Gender: {item.gender}</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => triggerCall(item.phoneNumber)}>
                <View style={styles.phoneNumberContainer}>
                  <Icon
                    name="phone"
                    size={20}
                    color="white"
                    style={styles.phoneIcon}
                  />
                  <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#BEBDB8',
    marginTop: 30,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  itemContainer: {
    height: 180,
    backgroundColor: '#00FFFF',
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },
  address: {
    color: 'black',
    marginBottom: 5,
  },
  detailText: {
    color: 'black',
    marginBottom: 5,
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 9,
    width: 200,
  },
  phoneIcon: {
    marginRight: 5,
  },
  phoneNumber: {
    color: 'white',
  },
});
