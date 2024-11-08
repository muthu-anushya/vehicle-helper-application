/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoogleMapViewMain from '../../component/Screens/GoogleMapViewMain';
import {Tab} from '../component/Screens/Home';
import MechanicLogin from './MechanicLogin';
import {Icon} from 'react-native-vector-icons/Icon';
import GoogleMapView from '../component/Screens/GoogleMapViewMain';

it('renders correctly', () => {
  renderer.create(<App />);
});
export default function Home() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="GoogleMapViewMain"
          component={GoogleMapViewMain}
          options={{
            headerShown: false,

            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={'#9e039e'} size={size} />
            ),
            tabBarActiveTintColor: '#9e039e', // Active tab label color
            tabBarInactiveTintColor: '#000000',
          }}
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
