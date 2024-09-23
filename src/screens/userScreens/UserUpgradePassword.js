import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const UserUpgradePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleVerify = () => {
    // Handle the password update logic and navigate to the next screen
    navigation.navigate('NextScreen'); // Replace 'NextScreen' with the actual screen to navigate to
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Heading */}
        <Text style={styles.heading}>Upgrade Password</Text>

        {/* Image */}
        <Image
          source={require('../../assets/img/upgradepass.png')} // Path to your verification image
          style={styles.image}
        />

        {/* Text */}
        <Text style={styles.text}>
          We have sent the reset password to the email address
          jmubashir278@gmail.com
        </Text>

        {/* New Password Field */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/password.png')} // Icon for password fields
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>

        {/* Confirm New Password Field */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/password.png')} // Icon for password fields
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm New Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('User_Login')}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '10%',
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
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
    marginBottom: 15,
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
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#E4428D',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: '8%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserUpgradePassword;
