import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';
import Header from '../../components/Header'; // Ensure this imports the correct Header component
import * as ImagePicker from 'react-native-image-picker';
const EditProfile = ({ navigation }) => {
  const [avatar, setAvatar] = useState(null); 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleImagePicker = () => {
    // Open the Image Picker to select an image
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets) {
        setAvatar(response.assets[0].uri); // Set selected image to avatar state
      }
    });
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        title="Edit Profile"
        showBackButton={false}  // No back button
        onBackPress={() => {}}  // No functionality needed
        rightComponent={null}   // No right component
      />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Avatar */}
        <TouchableOpacity onPress={handleImagePicker}>
            <Image
              source={avatar ? { uri: avatar } : require('../../assets/img/avatar.png')} // Use selected avatar or default
              style={styles.avatar}
            />
          </TouchableOpacity>

        {/* Name Fields */}
        <View style={styles.nameRow}>
          <View style={styles.inputContainerSmall}>
            <Image
              source={require('../../assets/icons/firstnameicon.png')} // Icon for first name
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.inputContainerSmall}>
            <Image
              source={require('../../assets/icons/firstnameicon.png')} // Icon for last name
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        {/* Other Fields */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/emailicon.png')} // Icon for email
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/dateofbirthicon.png')} // Icon for date of birth
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={dob}
            onChangeText={setDob}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/phonenumbericon.png')} // Icon for phone number
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/addressicon.png')} // Icon for address
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
        </View>

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  avatarContainer: {
    alignItems: 'center',
    // resizeMode:'contain',
    // marginBottom: '8%',
    borderRadius: 58, // Circular avatar
    borderColor: '#E4428D',
    borderWidth: 1, 
  },
  avatar: {
    width: 112,
    height: 116,
    borderRadius: 8, // Slightly rounded corners
    marginVertical: 25,
    // resizeMode: 'contain',
    marginHorizontal: '35%',
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4428D',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 26,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  inputContainerSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4428D',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '48%', // Half width for each name field
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  updateButton: {
    backgroundColor: '#E4428D',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 16,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
  },
});

export default EditProfile;
