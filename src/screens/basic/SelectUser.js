import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';
import RadioButton from './RadioButton'; // Ensure this import path is correct

const {width} = Dimensions.get('window');

const SelectUser = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null); // State to hold selected option

  const handleRadioButtonPress = value => {
    setSelectedOption(value); // Update the selected option
  };

  const handleContinuePress = () => {
    if (selectedOption === 'view1') {
      // If 'Provider' is selected, navigate to the Login screen
      navigation.navigate('Login');
    } else if (selectedOption === 'view2') {
      // If 'User' is selected, navigate to the Onboarding screen
      navigation.navigate('OnBoarding1');
    } else {
      alert('Please select an option'); // Optionally handle cases where no option is selected
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
        translucent
      />
      <ImageBackground
        source={require('../../assets/img/imageBackground.png')} // Path to your background image
        style={styles.backgroundImage}>
        {/* Logo at the top center */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/img/logo.png')} // Replace with the actual path to your logo
            style={styles.logo}
          />
        </View>

        {/* Two views side by side at the bottom */}
        <View style={styles.bottomContainer}>
          <View style={styles.sideBySideContainer}>
            <View style={styles.boxContainer}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handleRadioButtonPress('view1')}>
                <Image
                  source={require('../../assets/img/provider.png')} // Image for View 1
                  style={styles.boxImage}
                />
                <Text style={styles.text}>Provider</Text>
              </TouchableOpacity>
              {/* Radio button for View 1 */}
              <RadioButton
                // value="Provider"
                selected={selectedOption === 'view1'}
                onPress={() => handleRadioButtonPress('Login')}
              />
            </View>
            <View style={styles.boxContainer}>
              <TouchableOpacity
                style={styles.box}
                onPress={() => handleRadioButtonPress('view2')}>
                <Image
                  source={require('../../assets/img/user.png')} // Image for View 2
                  style={styles.boxImage}
                />
                <Text style={styles.text}>User</Text>
              </TouchableOpacity>
              {/* Radio button for View 2 */}
              <RadioButton
                // value="User"
                selected={selectedOption === 'view2'}
                onPress={() => handleRadioButtonPress('OnBoarding1')}
              />
            </View>
          </View>

          {/* TouchableOpacity to navigate to the next screen */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleContinuePress} // Call the function that checks which option is selected
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor:'#fff'
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%', // Adjusted marginTop to move the logo down
  },
  logo: {
    width: '100%',
    height: 150, // Adjust height as needed
    resizeMode: 'cover', // Ensure the logo scales proportionally
  },
  bottomContainer: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideBySideContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
  },
  boxContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  boxImage: {
    width: 80, // Adjust size as needed
    height: 80, // Adjust size as needed
    resizeMode: 'contain', // Ensure the image scales proportionally
    marginBottom: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E4428D',
    width: '85%',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectUser;
