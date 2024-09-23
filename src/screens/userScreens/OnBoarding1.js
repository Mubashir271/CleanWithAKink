import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';

const { width } = Dimensions.get('window');

const OnBoarding1 = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // To track the current onboarding screen
  const flatListRef = useRef();

  // Sample data for onboarding screens
  const onboardingData = [
    {
      id: '1',
      image: require('../../assets/img/Onboarding1.png'), // Path to your onboarding image
      text: 'Because a clean home is a happy home',
    },
    {
      id: '2',
      image: require('../../assets/img/Onboarding2.png'),
      text: 'Bringing cleanliness to your doorsteps!',
    },
    {
      id: '3',
      image: require('../../assets/img/Onboarding3.png'),
      text: 'Dirt doesn’t stand a chance against our cleaning crew.',
    },
  ];

  // Function to handle "Next" button press
  const handleNextPress = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate('User_Login'); // Navigate to the Login screen after the last onboarding screen
    }
  };

  // Function to handle "Skip" button press
  const handleSkipPress = () => {
    navigation.navigate('User_Login'); // Skip to the Login screen
  };

  // Render pagination dots
  const renderDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: currentIndex === index ? '#E4428D' : '#E0E0E0' },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Skip button (conditionally rendered) */}
      {currentIndex < onboardingData.length - 1 && (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkipPress}>
          <Text style={styles.skipText}>Skip {'>'}</Text>
        </TouchableOpacity>
      )}

      {/* Onboarding image and text */}
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        scrollEnabled={false} // Disable manual scrolling
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.onboardingItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.onboardingText}>{item.text}</Text>
          </View>
        )}
      />

      {/* Pagination dots */}
      {renderDots()}

      {/* Next button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  skipButton: {
    position: 'absolute',
    top: 25,
    right: 20,
    zIndex: 10, // Ensure the skip button appears above the FlatList
    elevation: 10, // Adds elevation for Android devices
  },
  skipText: {
    fontSize: 16,
    color: '#003C3C',
  },
  onboardingItem: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
    marginBottom: 80,
    marginTop: -120,
  },
  onboardingText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#333',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 180, // Adjust this value to move the dots higher or lower
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Center dots horizontally
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  nextButton: {
    width: '85%',
    backgroundColor: '#E4428D',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnBoarding1;
