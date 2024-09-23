import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/img/imageBackground.png')} // Path to your background image
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Heading */}
          <Text style={styles.heading}>Forgot Password</Text>

          {/* Forgot Password Image */}
          <Image
            source={require('../../assets/img/forgotpass.png')} // Path to your forgot password image
            style={styles.forgotImage}
          />

          {/* Description Text */}
          <Text style={styles.description}>
            To reset your password, you need your email or mobile number that can be authenticated
          </Text>

          {/* Email Container */}
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assets/icons/password.png')} // Icon for email
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          {/* Send Button */}
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Verification')}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 50,
    paddingHorizontal: 20,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: '15%',
    marginBottom: 50,
  },
  forgotImage: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    marginBottom: '3%',
  },
  description: {
    width: 314,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#FFF',
    borderColor: '#F6C0D9',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%', // Adjusting for icon
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#E4428D',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: '5%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
