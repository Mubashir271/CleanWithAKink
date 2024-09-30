import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const { width } = Dimensions.get('window'); // Get screen width

const DetailPage = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonType) => {
    setSelectedButton(buttonType);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header
        title="Detail"
        showBackButton={true} // Show back button
        onBackPress={() => navigation.goBack()} // Navigate back when pressed
        rightComponent={null} // No right component needed
      />
      
      <View style={styles.content}>
        {/* Image */}
        <Image
          source={require('../../assets/img/detail.png')} // Replace with your image path
          style={styles.image}
        />

        {/* Client name and work date */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assets/icons/password.png')} // Replace with your icon path
                style={styles.icon}
              />
              <TextInput
                style={styles.infoTextInput}
                placeholder='Client name'
                editable={true}
              />
            </View>
          </View>
          <View style={styles.infoItem}>
            <View style={styles.inputContainer}>
              <Image
                source={require('../../assets/icons/password.png')} // Replace with your icon path
                style={styles.icon}
              />
              <TextInput
                style={styles.infoTextInput}
                placeholder='Work Date'
                editable={true}
              />
            </View>
          </View>
        </View>

        {/* Client address */}
        <View style={styles.addressContainer}>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assets/icons/emailicon.png')} // Replace with your icon path
              style={styles.emailicon}
            />
            <TextInput
              style={styles.addressInput}
              placeholder='Client Address'
              editable={true}
            />
          </View>
        </View>

        {/* Description field */}
        <View style={styles.descriptionContainer}>
          <Image
            source={require('../../assets/icons/emailicon.png')} // Replace with your icon path
            style={styles.descriptionIcon}
          />
          <TextInput
            style={styles.descriptionInput}
            multiline
            numberOfLines={4}
            editable={false}
            placeholder="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis."
          />
        </View>

        {/* Action buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.rejectButton,
              { backgroundColor: selectedButton === 'reject' ? '#E4428D' : '#fff' },
            ]}
            onPress={() => handleButtonPress('reject')}
          >
            <Text
              style={[
                styles.buttonText,
                { color: selectedButton === 'reject' ? '#fff' : '#E4428D' },
              ]}
            >
              Reject
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.acceptButton,
              { backgroundColor: selectedButton === 'accept' ? '#E4428D' : '#fff' },
            ]}
            onPress={() => handleButtonPress('accept')}
          >
            <Text
              style={[
                styles.buttonText,
                { color: selectedButton === 'accept' ? '#fff' : '#E4428D' },
              ]}
            >
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    backgroundColor:'#fff',
  },
  container: {
    backgroundColor: '#fff',
    // flex: 1,
  },
  image: {
    width: '100%',
    height: '35%',
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  infoRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  infoItem: {
    flex: 1,
    // marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    width:'95%',
    alignItems: 'center',
    padding:4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F6C0D9',
  },
  icon: {
    width: '10%',
    height: '45%',
    marginLeft: 20,
    resizeMode:'contain',
  },
  emailicon:{
    width: '5.5%',
    height: '45%',
    marginLeft: 14,
    resizeMode:'contain',
  },
  infoTextInput: {
    flex: 1,
    fontSize: 14,
    color: '#9E9E9E',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  addressInput: {
    flex: 1,
    fontSize: 14,
    // color: '#333',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  addressContainer: {
    marginVertical: 10,
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#F6C0D9',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  descriptionIcon: {
    width: '5.5%',
    height: '45%',
    marginLeft: 10,
    resizeMode:'contain',
    marginTop: -50,
  },
  descriptionInput: {
    flex: 1,
    fontSize: 16,
    // color: '#333',
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    backgroundColor:'#fff'
  },
  rejectButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    borderColor: '#E4428D',
    borderWidth: 1,
  },
  acceptButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    borderColor: '#E4428D',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default DetailPage;
