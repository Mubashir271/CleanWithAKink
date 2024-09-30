import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const VerificationScreen = () => {
  const navigation = useNavigation();

  const handleVerify = () => {
    // Navigate to UpdatePassword screen
    navigation.navigate('UpdatePassword');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Heading */}
        <Text style={styles.heading}>Verification</Text>

        {/* Image */}
        <Image
          source={require('../../assets/img/verification.png')} // Path to your verification image
          style={styles.image}
        />

        {/* Text */}
        <Text style={styles.text}>OTP will be sent to </Text>
         <Text>    jmubashir278@gmail.com</Text>

        {/* OTP Input */}
        <OTPTextInput
          borderActiveColor="#F6C0D9" // Set active border color
          handleTextChange={(text) => console.log(text)} // Handle OTP input change
          inputCount={4}
        //   containerStyle={styles.otpContainer}
          style={styles.otpInput}
        //   offTintColor='#ccc'
        />

        {/* Verify Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UpgradePassword')}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    // marginBottom: 50,
    paddingHorizontal: 20,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: '25%',
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    marginBottom: '3%',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    // marginBottom: 40,
  },
  otpContainer: {  
    marginTop: 20,
    width: width * 0.8,
    marginBottom: 50,
  },
  otpInput: {
    borderColor: '#F6C0D9',
    borderRadius: 15,
    paddingLeft: 30,
    borderWidth: 1,
    margin: '4%',
    marginVertical:'10%',
    height: '60%',
    width: '20%',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E4428D',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    top:'6%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerificationScreen;
