import {Image, StyleSheet, View, BackHandler, Alert, StatusBar} from 'react-native';
import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useFocusEffect} from '@react-navigation/native';
import Home from '../screens/providerScreens/Home';
import Notification from '../screens/providerScreens/Notification';
import Settings from '../screens/providerScreens/Settings';
import Profile from '../screens/providerScreens/Profile';
import Chat from '../screens/providerScreens/Chat';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );

      return () => backHandler.remove();
    }, []),
  );

  return (
    
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: '', // Remove text from the bottom navigation
        tabBarStyle: {
          width: wp(90), // Ensure full width for proper alignment
          height: wp(16),
          marginBottom: wp(2),
          position:'absolute',
          left:20,
          backgroundColor: '#ffffff',
          alignSelf: 'center', // Center the tab bar
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1, // Ensure top border is visible
          borderColor: '#E4428D',
          borderRadius: 50, // Adjust for better border visibility
          elevation: 2, // Remove shadow if causing visibility issues
        },
        tabBarIcon: ({focused}) => {
          const iconMap = {
            Home: require('../assets/icons/homeicon.png'),
            Chat: require('../assets/icons/chaticon.png'),
            Notification: require('../assets/icons/notiicon.png'),
            Settings: require('../assets/icons/settingicon.png'),
            Profile: require('../assets/icons/avatar3.png'),
          };

          return (
            <View style={{marginTop: wp(2)}}>
              <View style={focused ? styles.focusedview : styles.unfocusedview}>
                <Image
                  source={iconMap[route.name]}
                  style={[
                    styles.icon,
                    // Do not apply tint color to avoid white tint issue
                    // { tintColor: focused ? null : null },
                  ]}
                />
              </View>
            </View>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat}  />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  focusedview: {
    marginTop: wp(3),
    width: wp(10),
    height: wp(10),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4428D', // Background color for focused tab
  },
  icon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    // opacity: 1.0, // Ensure full opacity for icons
  },
  unfocusedview: {
    marginTop: wp(3),
    width: wp(10),
    height: wp(10),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color for unfocused tab
    opacity: 1, // Set full opacity to make the unfocused icon visible
  },
});
