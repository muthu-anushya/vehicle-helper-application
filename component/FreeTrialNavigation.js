import {View, Text} from 'react-native';
import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import PlaceDetail from './PlaceDetail/PlaceDetail';
import MapPage from './Screens/SubScreens/MapPage';
import FreeTrial from './Screens/FreeTrial';
export default function FreeTrialNavigation() {
  const Stack = createStackNavigator();
  const isAndroid = true;
  return (
    <Stack.Navigator
      initialRouteName="FreeTrial"
      screenOptions={{
        gestureEnabled: true,

        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}>
      <Stack.Screen
        name="FreeTrial"
        component={FreeTrial}
        options={{headerShown: null}}
      />
      <Stack.Screen
        name="MapPage"
        component={MapPage}
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
