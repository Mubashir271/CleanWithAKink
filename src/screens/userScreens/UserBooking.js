import React, {useState} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
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

const UserBooking = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const navigation = useNavigation();
  const handleSelect = option => {
    setSelectedOption(option);
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title="Bookings"
        showBackButton={true} // Left component for back button
        onBackPress={() => navigation.goBack()} // Navigate back when pressed
        rightComponent={null} // No right component needed
      />
      <View style={{paddingHorizontal: 10}}>
        {/* Header with title */}
        {/* Two selectable images with text */}
        <View style={styles.imageContainer}>
          <View style={styles.selectContainer}>
            <TouchableOpacity
              onPress={() => handleSelect('Accepted')}
              style={styles.selectItem}>
              <ImageBackground
                source={
                  selectedOption === 'Accepted'
                    ? require('../../assets/img/approvedselected.png') // Selected image
                    : require('../../assets/img/approvedunselected.png') // Unselected image
                }
                style={styles.selectImageBackground}>
                <Text
                  style={[
                    styles.selectText,
                    {color: selectedOption === 'Accepted' ? '#fff' : '#E91E63'},
                  ]}>
                  Accepted
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSelect('Completed')}
              style={styles.selectItem}>
              <ImageBackground
                source={
                  selectedOption === 'Completed'
                    ? require('../../assets/img/confirmedselected.png') // Selected image
                    : require('../../assets/img/confirmedunselected.png') // Unselected image
                }
                style={styles.selectImageBackground}>
                <Text
                  style={[
                    styles.selectText,
                    {
                      color:
                        selectedOption === 'Completed' ? '#fff' : '#E91E63',
                    },
                  ]}>
                  Completed
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

                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={require('../../assets/icons/Group9.png')}
                    style={styles.bookingreviewimage}
                  />
                  <Text style={styles.subText}> 4.5 | 1,000 reviews</Text>
                </View>
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
                <Text style={styles.pendingRequest}>Request Accepted</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
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
    // marginHorizontal:10
    marginLeft: 20,
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
    marginVertical: 20,
  },
  selectItem: {
    flex: 1,
    position: 'relative',
  },
  selectImageBackground: {
    width: width * 0.5,
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
    // marginVertical: 12,
    marginBottom: 8,
    // marginLeft: 8,
  },
  name: {
    width: '50%',
    marginLeft:7,
    flexDirection: 'column',
  },
  bookingContainer: {
    marginTop: 20,
    // paddingHorizontal: 20,
  },
  bookingItem: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  bookingBackground: {
    width: '100%', // Full width of the parent container
    height: height * 0.15, // 30% of screen width
    borderRadius: 15,
    justifyContent: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
    borderWidth: 1,
    paddingRight:15,
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
    // marginLeft: 10,
    // marginTop: 5,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  bookingreviewimage: {
    // marginRight:1,
    height: wp(3),
    width: wp(3),
    resizeMode: 'contain',
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
  subText: {
    fontSize: 10,
  },
  pendingRequest: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#E91E63',
  },
});

export default UserBooking;
