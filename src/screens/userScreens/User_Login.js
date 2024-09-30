import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const User_Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/img/imageBackground.png')}
      style={styles.backgroundImage}>

      {/* StatusBar */}
      <StatusBar
        backgroundColor="#fff" // Change this to your background color
        barStyle="dark-content"
        hidden={false} // Make sure it's visible
        translucent={false} // Ensure it's not translucent temporarily
      />

      <View style={styles.container}>
        {/* Bold Heading at the top */}
        <Text style={styles.heading}>Log In To Your Account</Text>

        {/* Logo image */}
        <Image
          source={require('../../assets/img/logo.png')}
          style={styles.logo}
        />

        {/* Email field */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/login.png')}
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

        {/* Password field */}
        <View style={styles.inputContainer}>
          <Image
            source={require('../../assets/icons/password.png')}
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Remember Me and Forgot Password */}
        <View style={styles.optionsContainer}>
          <View style={styles.rememberMeContainer}>
            <CheckBox
              value={isRememberMe}
              onValueChange={setIsRememberMe}
              tintColors={{true: '#E4428D', false: '#F6C0D9'}}
            />
            <Text style={styles.rememberMeText}>Remember Me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('UserForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BottomNavUser')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up link */}
        <View style={styles.SignUp}>
          <Text style={styles.Text}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('UserSignUp')}>
            <Text style={styles.SignUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
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
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 8, // Add enough padding to avoid overlap with the status bar
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: '10%',
    marginTop: '20%',
    color: 'black',
  },
  logo: {
    width: '100%',
    height: '20%',
    marginTop: '10%',
    resizeMode: 'cover',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: '#F6C0D9',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '95%',
    padding: 10,
  },
  icon: {
    width: '6%',
    height: '45%',
    marginHorizontal: 10,
    resizeMode:'contain',
  },
  input: {
    fontSize:14,
    height: 40,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '120%',
    marginBottom: 20,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  rememberMeText: {
    // marginLeft: 2,
    fontSize: 12,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#E4428D',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#E4428D',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Text: {
    color:'#616161',
  },
  SignUp: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  SignUpText: {
    color: '#E4428D',
    marginLeft: 2,
    fontWeight: 'bold',
  },
});

export default User_Login;
