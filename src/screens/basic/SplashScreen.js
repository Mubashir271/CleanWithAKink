import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SplashScreen = ( ) => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SelectUser'); // Navigate to OnBoarding1 after 3 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigation]); // Add navigation to the dependency array

  return (
    <View style={styles.container}>
      {/* Ensure the splash screen covers the entire area */}
      <StatusBar hidden={true} />
      <Image
        source={require('../../assets/img/SplashScreen.png')} // Adjust the path to your image
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Cover the entire screen
  },
});

export default SplashScreen;
