import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image
} from 'react-native';
import Header from '../../components/Header'; // Ensure this imports the correct Header component
import SelectButton from '../../components/CustomButton'; // Adjust the import path as needed

const options = [
  { id: '1', label: 'I had an accident' },
  { id: '2', label: 'I got into emergency' },
  { id: '3', label: 'I have an injury' },
  { id: '4', label: 'Got Sick' },
];

const SettingsScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (id) => {
    setSelectedOption(prev => (prev === id ? null : id)); // Toggle selection
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="S.S.O" />

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.Text}>
        <Text style={styles.mainTitle}>EMERGENCY FOR CUSTOMERS</Text>

        <Text style={styles.secondaryTitle}>Not sure what to do?</Text>

        <Text style={styles.tertiaryTitle}>Pick the Subject</Text>
        </View>
        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <ImageBackground
              key={option.id}
              source={require('../../assets/img/rectangleframe.png')}
              style={styles.optionBackground}
              imageStyle={{ borderRadius: 10 }}
            >
              <TouchableOpacity
                style={[
                  styles.option,
                  selectedOption === option.id && styles.selectedOption
                ]}
                onPress={() => handleSelect(option.id)}
              >
                <SelectButton
                  isSelected={selectedOption === option.id}
                  onPress={() => handleSelect(option.id)}
                />
                <Image source={require('../../assets/icons/notificationicon.png')} style={styles.optionIcon} />
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            </ImageBackground>
          ))}
        </View>

        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send to Customers</Text>
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
  Text: {
    alignItems:'center',
  },
  mainTitle: {
    fontSize: 24,
    color: '#E4428D',
    fontWeight: 'bold',
    marginBottom: 4,
    marginVertical:4,
  },
  secondaryTitle: {
    fontSize: 20,
    fontWeight:'bold',
    color:'black',
    fontFamily: 'Manrope-Bold',
    marginBottom: 4,
  },
  tertiaryTitle: {
    fontSize: 16,
    color: '#656565',
    marginBottom: 50,
  },
  optionsContainer: {
    marginBottom: '5%',
    marginTop:'-8%',
  },
  optionBackground: {
    width: '100%',
    height: 80, // Adjust height as needed
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: -20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  selectedOption: {
    // Optionally style for selected state if needed
  },
  optionIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#E4428D',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    bottom: 14,
    // marginBottom:10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
