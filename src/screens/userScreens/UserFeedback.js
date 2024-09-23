import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const UserFeedback = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Feedback" showBackButton={true} />
      
      {/* Feedback Text */}
      <Text style={styles.feedbackText}>How was our service?{'\n'}Please feedback us</Text>

      {/* Image */}
      <Image
        source={require('../../assets/img/feedbacklogo.png')} // Update with your image path
        style={styles.feedbackImage}
      />

      {/* Good Text */}
      <Text style={styles.goodText}>Good</Text>

      {/* Rating Icons */}
      <View style={styles.ratingContainer}>
        {/* Four identical icons */}
        {[...Array(4)].map((_, index) => (
          <Image
            key={index}
            source={require('../../assets/img/rating.png')} // Update with your identical icon path
            style={styles.ratingIcon}
          />
        ))}
        {/* One different icon */}
        <Image
          source={require('../../assets/img/unrating.png')} // Update with your different icon path
          style={styles.unratingIcon}
        />
      </View>

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/icons/noteicon.png')} // Update with your icon path
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Write Note"
          placeholderTextColor="#A9A9A9"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}
      onPress={() => navigation.navigate('BottomNavUser')}
      >
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  feedbackText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
  },
  feedbackImage: {
    width: '70%',
    height: '30%', // Adjust size as needed
    marginVertical: 20,
    resizeMode: 'cover',
  },
  goodText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    width: '80%',
  },
  ratingIcon: {
    width: '15%',
    height: 30,
    marginHorizontal: 1,
  },
  unratingIcon:{
    width: '15%',
    height:28,
    resizeMode:'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4428D',
    borderRadius: 5,
    padding: 20,
    width: '80%', // Change width to 80%
    marginBottom: 20,
  },
  inputIcon: {
    width: 20,
    height: 20,
    tintColor: '#A9A9A9',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#E4428D',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '90%',
    top:30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default UserFeedback;
