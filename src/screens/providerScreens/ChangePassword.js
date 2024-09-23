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

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        title="Change Password"
        showBackButton={true}  // Left component for back button
        onBackPress={() => navigation.goBack()} // Navigate back when pressed
        rightComponent={null}  // No right component needed
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        
        {/* Image (Placed above the password fields) */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/img/changepass.png')} // Add the correct image path
            style={styles.image}
          />
        </View>

        {/* Old Password Field */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/password.png')} // Icon for password
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Old Password"
            secureTextEntry={true}
            value={oldPassword}
            onChangeText={setOldPassword}
          />
        </View>

        {/* New Password Field */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/password.png')} // Icon for password
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>

        {/* Confirm New Password Field */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/password.png')} // Icon for password
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry={true}
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
          />
        </View>

        {/* Upgrade Button */}
        <TouchableOpacity style={styles.upgradeButton} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.upgradeButtonText}>Upgrade</Text>
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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 40, // Space between image and password fields
  },
  image: {
    width: 283.1,
    height: 302.66,
    resizeMode: 'contain', // Ensures the image retains its aspect ratio
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
  upgradeButton: {
    backgroundColor: '#E4428D',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 16,
  },
  upgradeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
  },
});

export default ChangePassword;
