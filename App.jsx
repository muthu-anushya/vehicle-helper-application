import * as React from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Services from './component/Screens/Services';
import About from './component/Screens/About';
import {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDrawerContent from './component/Screens/SubScreens/CustomDrawerContent';
import {UserLocationContext} from './component/Context/UserLocationContext';
import * as Location from 'expo-location';
import ContactScreen from './component/Screens/ContactScreen';
import {useFonts} from 'expo-font';
import Home from './component/Screens/Home';
import FreeTrialNavigation from './component/FreeTrialNavigation';

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    poetsenOne: require('./assets/Fonts/PoetsenOne-Regular.ttf'),
  });
  const [location, setLocation] = useState();

  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);

  return (
    <UserLocationContext.Provider value={{location, setLocation}}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerLabelStyle: {
              fontSize: 16,

              color: '#000000',
              fontFamily: 'poetsenOne',
            },
          }}>
          <Drawer.Screen
            name="On Road Vehicle Helper "
            options={{
              title: 'On Road Vehicle Helper',
              drawerLabel: 'Home',
              drawerIcon: ({size, color}) => (
                <Icon name="home" color={'#000000'} size={size} />
              ),
            }}
            component={Home}
          />

          <Drawer.Screen
            name="About"
            options={{
              drawerLabel: 'About',
              drawerIcon: ({color, size}) => (
                <Icon name="info-circle" color={'#000000'} size={size} />
              ),
            }}
            component={About}
          />
          <Drawer.Screen
            name="Our Services"
            options={{
              drawerLabel: 'Our Services',
              drawerIcon: ({color, size}) => (
                <Icon name="cogs" color={'#000000'} size={size} />
              ),
            }}
            component={Services}
          />
          <Drawer.Screen
            name="Take Free trial  "
            options={{
              drawerLabel: 'Free Trial',
              drawerIcon: ({color, size}) => (
                <Icon name="gift" color={'#000000'} size={size} />
              ),
            }}
            component={FreeTrialNavigation}
          />

          <Drawer.Screen
            name="Contact Us"
            options={{
              drawerLabel: 'Contact Us',
              drawerIcon: ({color, size}) => (
                <Icon name="phone" color={'#000000'} size={size} />
              ),
            }}
            component={ContactScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserLocationContext.Provider>
  );
}
