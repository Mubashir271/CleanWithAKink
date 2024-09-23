import {Image, StyleSheet, View, BackHandler, Alert} from 'react-native';
import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useFocusEffect} from '@react-navigation/native';
import UserNotification from '../screens/userScreens/UserNotification';
import UserHome from '../screens/userScreens/UserHome';
import UserChat from '../screens/userScreens/UserChat';
import UserBooking from '../screens/userScreens/UserBooking';
import UserProfile from '../screens/userScreens/UserProfile';

const Tab = createBottomTabNavigator();

const BottomNavUser = () => {
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
        height: wp(18),
        marginBottom: wp(2),
        backgroundColor: '#fff',
        alignSelf: 'center', // Center the tab bar
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1, // Ensure top border is visible
        borderColor: '#E4428D',
        borderRadius: 50, // Adjust for better border visibility
        elevation: 18, // Remove shadow if causing visibility issues
        shadowColor:'#E4428D',
        borderWidth: 1,
      
      },
        tabBarIcon: ({focused}) => {
          const iconMap = {
            Home: require('../assets/icons/homeicon.png'),
            Chat: require('../assets/icons/chaticon.png'),
            Notification: require('../assets/icons/notiicon.png'),
            Booking: require('../assets/icons/booking.png'),
            Profile: require('../assets/icons/avatar3.png'),
          };

          return (
            <View style={{marginTop: wp(3)}}>
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
      <Tab.Screen name="Home" component={UserHome} />
      <Tab.Screen name="Chat" component={UserChat} />
      <Tab.Screen name="Notification" component={UserNotification} />
      <Tab.Screen name="Booking" component={UserBooking} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default BottomNavUser;

const styles = StyleSheet.create({
  focusedview: {
    marginTop: wp(3),
    width: wp(10),
    height: wp(10),
    borderRadius: 30,
    bottom:wp(1),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4428D', // Background color for focused tab
  },
  icon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    bottom: wp(1),
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
