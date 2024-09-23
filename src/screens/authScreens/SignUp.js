import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions, ImageBackground, ScrollView } from 'react-native';
import * as ImagePicker from 'react-native-image-picker'; // Import ImagePicker
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './Login';

const { width } = Dimensions.get('window');

const SignUpScreen = () => {
  const [avatar, setAvatar] = useState(null); // State to hold the avatar image
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();

  const handleImagePicker = () => {
    // Open the Image Picker to select an image
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        setAvatar(response.assets[0].uri); // Set selected image to avatar state
      }
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/img/imageBackground.png')} // Path to your background image
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Heading */}
          <Text style={styles.heading}>Create Your Account</Text>

          {/* Avatar image picker */}
          <TouchableOpacity onPress={handleImagePicker}>
            <Image
              source={avatar ? { uri: avatar } : require('../../assets/img/avatar.png')} // Use selected avatar or default
              style={styles.avatar}
            />
          </TouchableOpacity>

          {/* Name Fields Container */}
          <View style={styles.nameContainer}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assets/icons/login.png')} // Icon for first name
                style={styles.icon}
              />
              <TextInput
                style={styles.inputName}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assets/icons/login.png')} // Icon for last name
                style={styles.icon}
              />
              <TextInput
                style={styles.inputName}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          {/* Other Fields Container */}
          <View style={styles.otherFieldsContainer}>
            {/* Email field */}
            <View style={styles.inputWrapper}>
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

            {/* Date of Birth field */}
            <View style={styles.inputWrapper}>
              <Image
                source={require('../../assets/icons/password.png')} // Icon for date of birth
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChangeText={setDateOfBirth}
              />
            </View>

            {/* Phone Number field */}
            <View style={styles.inputWrapper}>
              <Image
                source={require('../../assets/icons/password.png')} // Icon for phone number
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />
            </View>

            {/* Address field */}
            <View style={styles.inputWrapper}>
              <Image
                source={require('../../assets/icons/password.png')} // Icon for address
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
              />
            </View>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Link to Log In */}
          <View style={styles.loginContainer}>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </View>
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
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    paddingBottom: 30, // Adjust bottom padding to prevent excessive space
  },
  heading: {
    fontSize: 24,
    marginBottom: '2%',
    fontWeight: 'bold',
    color: 'black',
    marginTop: '8%',
  },
  avatar: {
    width: 112,
    height: 116,
    borderRadius: 8, // Slightly rounded corners
    marginVertical: 20,
    resizeMode: 'cover',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  otherFieldsContainer: {
    width: '100%',
    marginBottom: 20, // Adjust the margin to control spacing
  },
  inputWrapper: {
    width: '100%',
    backgroundColor: '#FFF',
    borderColor: '#F6C0D9',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    width: '48%', // Adjusting for two fields in a row
    backgroundColor: '#FFF',
    borderColor: '#F6C0D9',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: -5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%', // Adjusting for icon
  },
  inputName: {
    height: 40,
    width: '80%', // Adjusting for icon
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#E4428D',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  text: {
    color: 'black',
  },
  loginText: {
    color: '#E4428D',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
