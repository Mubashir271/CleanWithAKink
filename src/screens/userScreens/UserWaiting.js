import {useNavigation} from '@react-navigation/native';
import React, { useState} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const UserWaiting = () => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState('chat');

  return (
    <View style={styles.container}>
      <Image
        style={styles.backIcon}
        source={require('../../assets/icons/backicon.png')}
      />

      {/* Logo Image */}
      <Image
        source={require('../../assets/img/topservicelogo.png')}
        style={styles.logoImage}
      />

      {/* Content View */}
      <ImageBackground
        style={styles.contentView}
        source={require('../../assets/img/topservicesimage.png')}
        resizeMode="cover">
        <View style={styles.contentContainer}>
          <Text style={styles.name}>Selena Holmes</Text>
          <Text style={styles.heading}>Home Cleaning</Text>
          <Text style={styles.subText}>
            {' '}
            <Image
              source={require('../../assets/icons/bookingreview.png')}
              style={styles.bookingreviewimage}
            />
            4.5 | 1,000 reviews
          </Text>

          <View style={styles.priceRatingContainer}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.priceText}>Price</Text>
              <Text style={styles.price}>$75</Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/icons/bookingreview.png')}
                  style={styles.ratingImage}
                />
                <Text style={styles.ratingText}>4.0</Text>
              </View>
              <Text style={styles.ratingSubText}>1,000 reviews</Text>
            </View>
          </View>

          <Text style={styles.descriptionHeading}>Description</Text>
          <Text style={styles.descriptionText}>
            We offer top-notch home cleaning services tailored to your needs.
          </Text>

          <View style={styles.reviewsHeader}>
            <Text style={styles.reviewsHeading}>People Reviews</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>

          {/* Booking 1 */}
          <TouchableOpacity style={styles.bookingBackground}>
            {/* //   onPress={() => navigation.navigate('Detail')} */}
            <View style={styles.bookingContent}>
              <Image
                source={require('../../assets/img/homeclean.png')}
                style={styles.bookingImage}
              />
            </View>
            <View style={styles.headingText}>
              <Text style={styles.bookingname}>Mubashir Mughal</Text>
              <Image
                source={require('../../assets/icons/hearticon.png')}
                style={styles.heartIcon}
              />
              <Text style={styles.bookingpriceText}>100</Text>
              <Image
                source={require('../../assets/icons/timericon.png')}
                style={styles.heartIcon}
              />
              <Text style={styles.bookingpriceText}>6:15 PM</Text>
            </View>
            <View>
              <Text style={styles.subName}>
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la...
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === 'Waiting'
                ? {backgroundColor: '#E4428D'}
                : {
                    backgroundColor: '#FFD4E8',
                    borderColor: '#E4428D',
                    borderWidth: 2,
                  },
            ]}
            onPress={() => {
              setActiveButton('Waiting');
              navigation.navigate('UserWorkDone');
            }}>
            <Text
              style={[
                styles.buttonText,
                activeButton === 'Waiting'
                  ? {color: '#fff'}
                  : {color: '#E4428D'},
              ]}>
              Waiting for work done
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backIcon: {
    width: 30,
    height: 30,
    tintColor: '#E4428D',
  },
  logoImage: {
    position: 'absolute',
    width: '100%',
    height: '50%', // Adjust height as needed
    resizeMode: 'contain',
    top: 0,
  },
  contentView: {
    flex: 1,
    marginTop: '70%', // Adjust for the logo height
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent background
    borderRadius: 20,
    // padding: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E4428D',
    marginTop: -10,
  },
  heading: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    marginTop: -8,
    width: wp(40),
  },
  bookingreviewimage: {},
  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
    marginTop: 14,
  },
  priceText: {
    // alignItems:'flex-start',
    fontSize: 16,
    marginBottom: wp(-2),
    color: '#E91E63',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 30,
    color: '#E91E63',
    fontWeight: 'bold',
  },
  ratingImage: {
    top: wp(1),
    width: wp(5.5),
    height: wp(5.5),
  },
  ratingText: {
    fontSize: 30,
    marginTop: wp(2),
    color: '#E91E63',
    fontWeight: 'bold',
  },
  ratingSubText: {
    top: wp(-1),
  },
  descriptionHeading: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'flex-start',
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  reviewsHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAll: {
    fontSize: 16,
    color: '#E4428D',
  },
  reviewCard: {
    flexDirection: 'column',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewName: {
    fontWeight: 'bold',
  },
  reviewRating: {
    color: '#E4428D',
  },
  reviewTime: {
    color: '#888',
  },
  reviewText: {
    marginTop: 5,
  },
  headingText: {
    flexDirection: 'row',
    marginTop: wp(-12),
  },
  subName: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: wp(26),
    marginTop: wp(-6),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    width: '100%',
  },
  button: {
    // backgroundColor: '#E4428D',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '90%',
    bottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  bookingname: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: wp(-14),
    marginLeft: wp(24),
    marginRight: wp(10),
  },
  heartIcon: {
    marginTop: wp(-13),
    width: wp(2),
    height: wp(2),
    // marginLeft:wp(2),
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
    height: wp(28), // 30% of screen width
    borderRadius: 15,
    alignItems: 'center',
    // justifyContent:'center',
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 10,
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
    width: wp(20),
    height: wp(20),
    marginBottom: 8,
  },
  bookingText: {
    flex: 1,
    // marginLeft: 10,
    marginTop: 5,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  bookingpriceText: {
    marginRight: wp(6),
    marginTop: wp(-14),
    fontSize: 10,
    fontWeight: 'bold',
    // color: '#E91E63',
  },
  bookingprice: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4428D',
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
  },
  modalButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#E4428D',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserWaiting;
