import {View, Text} from 'react-native';
import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import PlaceDetail from './PlaceDetail/PlaceDetail';
import GoogleMapViewMain from '../component/Screens/GoogleMapViewMain';
export default function HomeNavigation() {
  const Stack = createStackNavigator();
  const isAndroid = true;
  return (
    <Stack.Navigator
      initialRouteName="screen"
      screenOptions={{
        gestureEnabled: true,

        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}>
      <Stack.Screen
        name="screen"
        component={GoogleMapViewMain}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="place-detail"
        component={PlaceDetail}
        screenOptions={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
}
