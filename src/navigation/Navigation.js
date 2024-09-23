import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/basic/SplashScreen';
import SelectUser from '../screens/basic/SelectUser';
import Login from '../screens/authScreens/Login';
import SignUp from '../screens/authScreens/SignUp';
import ForgotPassword from '../screens/authScreens/ForgotPassword';
import Verification from '../screens/authScreens/Verification';
import UpgradePassword from '../screens/authScreens/UpgradePassword';
import Selection from '../screens/providerScreens/Selection';
import BottomNav from './BottomNav';
import EditProfile from '../screens/providerScreens/EditProfile';
import ChangePassword from '../screens/providerScreens/ChangePassword';
import NewBookings from '../screens/providerScreens/NewBookings';
import Detail from '../screens/providerScreens/Detail';
import OnBoarding1 from '../screens/userScreens/OnBoarding1';
import User_Login from '../screens/userScreens/User_Login';
import UserSignUp from '../screens/userScreens/UserSignUp';
import BottomNavUser from './BottomNavUser';
import SearchHeader from '../components/SearchHeader';
import ProviderChat from '../screens/providerScreens/ProviderChat';
import UserChatExtend from '../screens/userScreens/UserChatExtend';
import UserAllServices from '../screens/userScreens/UserAllServices';
import UserTopService from '../screens/userScreens/UserTopService';
import UserServiceChat from '../screens/userScreens/UserServiceChat';
import UserWaiting from '../screens/userScreens/UserWaiting';
import UserWorkDone from '../screens/userScreens/UserWorkDone';
import UserFeedback from '../screens/userScreens/UserFeedback';
import UserForgotPassword from '../screens/userScreens/UserForgotPassword';
import UserVerification from '../screens/userScreens/UserVerification';
import UserUpgradePassword from '../screens/userScreens/UserUpgradePassword';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SpalshScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectUser"
          component={SelectUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpgradePassword"
          component={UpgradePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Selection"
          component={Selection}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProviderChat"
          component={ProviderChat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewBookings"
          component={NewBookings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OnBoarding1"
          component={OnBoarding1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="User_Login"
          component={User_Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserSignUp"
          component={UserSignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomNavUser"
          component={BottomNavUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchHeader"
          component={SearchHeader}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserChatExtend"
          component={UserChatExtend}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserAllServices"
          component={UserAllServices}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserTopService"
          component={UserTopService}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserServiceChat"
          component={UserServiceChat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserWaiting"
          component={UserWaiting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserWorkDone"
          component={UserWorkDone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserFeedback"
          component={UserFeedback}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="UserForgotPassword"
          component={UserForgotPassword}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="UserVerification"
          component={UserVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="UserUpgradePassword"
        component={UserUpgradePassword}
        options={{headerShown: false}}
      />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
