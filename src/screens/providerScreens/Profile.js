import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header'; // Ensure this imports the correct Header component

const Profile = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header
        title="Profile"
        showBackButton={false}
        onBackPress={() => navigation.goBack()}
        rightComponent={
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: '#E4428D',
                fontSize: 16,
                fontWeight: 'bold',
                marginRight: 15,
                marginTop: 20,
              }}>
              Edit
            </Text>
          </TouchableOpacity>
        }
      />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../assets/img/avatar2.png')}
            style={styles.avatar}
          />
        </View>

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

        {/* Log Out Button */}
        <TouchableOpacity
  style={styles.logoutButton}
  onPress={() => navigation.reset({
    index: 0,
    routes: [{ name: 'SelectUser' }],
  })}
>
  <Text style={styles.logoutButtonText}>
    Log Out
  </Text>
</TouchableOpacity>


        {/* Change Password Text */}
        <Text
          style={styles.changePasswordText}
          onPress={() => navigation.navigate('ChangePassword')}>
          Change Password
        </Text>
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
    paddingVertical: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 112,
    height: 116,
    borderRadius: 58, // Circular avatar
    borderColor: '#E4428D',
    borderWidth: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4428D',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
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
  editButton: {
    fontSize: 16,
    color: '#E4428D',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: '#E4428D',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Proxima Nova',
    fontWeight: 'bold',
  },
  changePasswordText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E4428D',
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default Profile;
