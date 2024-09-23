import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window'); // Get screen width

const NewBookings = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigation = useNavigation();
  const handleSelect = option => {
    setSelectedOption(option);
  };

  return (
    <View style={{flex: 1}}>
      {/* Header with title */}
      <Header
        title="New Bookings"
        showBackButton={true} // Left component for back button
        onBackPress={() => navigation.goBack()} // Navigate back when pressed
        rightComponent={null} // No right component needed
      />
      {/* Two selectable images with text */}
      <View style={styles.imageContainer}>
        <View style={styles.selectContainer}>
          <TouchableOpacity
            onPress={() => handleSelect('Approved')}
            style={styles.selectItem}>
            <ImageBackground
              source={
                selectedOption === 'Approved'
                  ? require('../../assets/img/approvedselected.png') // Selected image
                  : require('../../assets/img/approvedunselected.png') // Unselected image
              }
              style={styles.selectImageBackground}>
              <Text
                style={[
                  styles.selectText,
                  {color: selectedOption === 'Approved' ? '#fff' : '#E91E63'},
                ]}>
                Approved
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSelect('Confirmed')}
            style={styles.selectItem}>
            <ImageBackground
              source={
                selectedOption === 'Confirmed'
                  ? require('../../assets/img/confirmedselected.png') // Selected image
                  : require('../../assets/img/confirmedunselected.png') // Unselected image
              }
              style={styles.selectImageBackground}>
              <Text
                style={[
                  styles.selectText,
                  {color: selectedOption === 'Confirmed' ? '#fff' : '#E91E63'},
                ]}>
                Confirmed
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

      {/* List of bookings */}
      <View style={styles.bookingContainer}>
        {/* Booking 1 */}
        <TouchableOpacity
          style={styles.bookingBackground}
          onPress={() => navigation.navigate('Detail')}>
          <View style={styles.bookingContent}>
            <Image
              source={require('../../assets/img/homeclean.png')}
              style={styles.bookingImage}
            />
            <View style={styles.name}>
              <Text style={styles.bookingname}>Mubashir Mughal</Text>
              <Text style={styles.bookingText}>Office Cleaning</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.priceText}>Price</Text>
              <Text style={styles.price}>$50</Text>
              <View
                style={{
                  borderTopColor: '#cfcfcf',
                  borderTopWidth: 1,
                  width: '100%',
                }}></View>
              <Text style={styles.pendingRequest}>Pending Request</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Booking 2 */}
        <TouchableOpacity
          style={styles.bookingBackground}
          onPress={() => navigation.navigate('Detail')}>
          <View style={styles.bookingContent}>
            <Image
              source={require('../../assets/img/homeclean.png')}
              style={styles.bookingImage}
            />
            <View style={styles.name}>
              <Text style={styles.bookingname}>Mubashir Mughal</Text>
              <Text style={styles.bookingText}>Office Cleaning</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.priceText}>Price</Text>
              <Text style={styles.price}>$75</Text>
              <View
                style={{
                  borderTopColor: '#cfcfcf',
                  borderTopWidth: 1,
                  width: '100%',
                }}></View>
              <Text style={styles.pendingRequest}>Pending Request</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* Booking 3 */}
        <TouchableOpacity
          style={styles.bookingBackground}
          onPress={() => navigation.navigate('Detail')}>
          <View style={styles.bookingContent}>
            <Image
              source={require('../../assets/img/homeclean.png')}
              style={styles.bookingImage}
            />
            <View style={styles.name}>
              <Text style={styles.bookingname}>Mubashir Mughal</Text>
              <Text style={styles.bookingText}>Office Cleaning</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.priceText}>Price</Text>
              <Text style={styles.price}>$100</Text>
              <View
                style={{
                  borderTopColor: '#cfcfcf',
                  borderTopWidth: 1,
                  width: '100%',
                }}></View>
              <Text style={styles.pendingRequest}>Pending Request</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'Proxima Nova',
  },
  imageContainer: {
    alignItems: 'center',
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 30,
  },
  selectItem: {
    flex: 1,
    marginHorizontal: 4,
    position: 'relative',
  },
  selectImageBackground: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: -16,
  },
  selectText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 8,
    bottom: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  bookingname: {
    color: '#E91E63',
    fontSize: 10,
    marginVertical: 12,
    marginLeft: 8,
  },
  name: {
    flex: 1,
    flexDirection: 'column',
  },
  bookingContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  bookingItem: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  bookingBackground: {
    width: '100%', // Full width of the parent container
    height: height * 0.13, // 30% of screen width
    borderRadius: 15,
    justifyContent: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E91E63',
  },
  bookingContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  bookingImage: {
    width: 80,
    height: 80,
  },
  bookingText: {
    flex: 1,
    marginLeft: 10,
    marginTop: 5,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  pendingRequest: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#E91E63',
  },
});

export default NewBookings;
