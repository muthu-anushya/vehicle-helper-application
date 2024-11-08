import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MapPage from './SubScreens/MapPage';
import {Image, StatusBar} from 'react-native';

import MechanicLogin from './MechanicLogin';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoogleMapViewMain from './GoogleMapViewMain';
export default function Home() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,

            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={'#9e039e'} size={size} />
            ),
            tabBarActiveTintColor: '#9e039e', // Active tab label color
            tabBarInactiveTintColor: '#000000',
          }}
          name="Home"
          component={GoogleMapViewMain}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="wrench" color={'#9e039e'} size={size} />
            ),
            tabBarActiveTintColor: '#9e039e', // Active tab label color
            tabBarInactiveTintColor: '#000000',
          }}
          name="MechLogin"
          component={MechanicLogin}
        />
      </Tab.Navigator>
    </>
  );
}
