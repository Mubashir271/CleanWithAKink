import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
} from 'react-native';

const UserTopService = () => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState('chat');
  const [schedulingModalVisible, setSchedulingModalVisible] = useState(false);
  const [serviceConfirmationModalVisible, setServiceConfirmationModalVisible] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [counter, setCounter] = useState(1); // Scheduling counter


  const handleBookService = () => {
    setSchedulingModalVisible(true);  // Show modal when the book button is clicked
  };

    // After scheduling, show service confirmation modal
    const handleScheduleComplete = () => {
      setSchedulingModalVisible(false); // Close scheduling modal
      setServiceConfirmationModalVisible(true); // Open service confirmation modal
    };

    const incrementCounter = () => {
      setCounter(prev => prev + 1);
    };
    const decrementCounter = () => {
      if (counter > 1) {
        setCounter(prev => prev - 1);
      }
    };

    // Effect to navigate based on state
    useEffect(() => {
      if (shouldNavigate) {
        navigation.navigate('UserWaiting');  // Navigate when state is set to true
      }
    },
    // [shouldNavigate]
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Image
          style={styles.backIcon}
          source={require('../../assets/icons/backicon.png')}
        />
      </TouchableOpacity>

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
              activeButton === 'chat'
                // eslint-disable-next-line react-native/no-inline-styles
                ? {backgroundColor: '#E4428D'}
                // eslint-disable-next-line react-native/no-inline-styles
                : {
                    backgroundColor: '#FFD4E8',
                    borderColor: '#E4428D',
                    borderWidth: 2,
                  },
            ]}
            onPress={() => {
              setActiveButton('chat');
              navigation.navigate('UserServiceChat');
            }}>
            <Text
              style={[
                styles.buttonText,
                // eslint-disable-next-line react-native/no-inline-styles
                activeButton === 'chat' ? {color: '#fff'} : {color: '#E4428D'},
              ]}>
              Chat Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === 'book'
                // eslint-disable-next-line react-native/no-inline-styles
                ? {backgroundColor: '#E4428D'}
                // eslint-disable-next-line react-native/no-inline-styles
                : {
                    backgroundColor: '#FFD4E8',
                    borderColor: '#E4428D',
                    borderWidth: 2,
                  },
            ]}
            onPress={() => {
              setActiveButton('book');
              handleBookService();
            }}>
            <Text
              style={[
                styles.buttonText,
                // eslint-disable-next-line react-native/no-inline-styles
                activeButton === 'book' ? {color: '#fff'} : {color: '#E4428D'},
              ]}>
              Book The Service
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>


              {/* Modal for Scheduling */}
              <Modal
            animationType="slide"
            transparent={true}
            visible={schedulingModalVisible}
            onRequestClose={() => {
              setSchedulingModalVisible(!schedulingModalVisible);
            }}
          >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Heading */}
          <Text style={styles.heading}>Scheduling</Text>

          {/* Image */}
          <Image
            source={require('../../assets/img/schedulingmodal.png')} // replace with your image path
            style={styles.schedulingModalLogo}
          />

          {/* Input fields */}
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/icons/calendaricon.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Select Date"
            />
          </View>

          {/* Second input field with counter */}
          <View style={styles.secondinputContainer}>
            <Image source={require('../../assets/icons/timer.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Select Hour"
            />
            <View style={styles.counterContainer}>
              <TouchableOpacity style={styles.counterButton} onPress={decrementCounter}>
                <Text style={styles.counterButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.counterText}>{counter}</Text>
              <TouchableOpacity style={styles.counterButton} onPress={incrementCounter}>
                <Text style={styles.counterButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Other input fields */}
          <View style={styles.inputContainer}>
            <Image source={require('../../assets/icons/noteicon.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Image source={require('../../assets/icons/noteicon.png')} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Write Note"
            />
          </View>

          {/* Done Scheduling Button */}
          <TouchableOpacity style={styles.modalButton} onPress={handleScheduleComplete}>
            <Text style={styles.modalButtonText}>Done Scheduling</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

            {/* Modal for Booking */}
            <Modal
        animationType="slide"
        transparent={true}
        visible={serviceConfirmationModalVisible}
        onRequestClose={() => {
          setServiceConfirmationModalVisible(!serviceConfirmationModalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Logo */}
            <Image source={require('../../assets/img/bookmodallogo.png')} style={styles.modalLogo} />

            {/* Modal Text */}
            <Text style={styles.modalText}>You can continue after
              paying the 40%
            payment</Text>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
              <Image source={require('../../assets/icons/cardnameicon.png')} style={styles.inputIcon} />
              <TextInput placeholder="Card Holder Name" style={styles.textInput} />
            </View>
            <View style={styles.inputContainer}>
              <Image source={require('../../assets/icons/cardnumbericon.png')} style={styles.inputIcon} />
              <TextInput placeholder="Credit Card Serial Number" style={styles.textInput} />
            </View>

            {/* Continue Button */}
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setServiceConfirmationModalVisible(false);
                setShouldNavigate(true); // Trigger the state for navigation
              }}
            >
              <Text style={styles.modalButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
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
    // marginTop: '30%',
  },
  heading: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    marginTop: -4,
    width: wp(70),
    paddingHorizontal:wp(16),
  },
  bookingreviewimage: {
    height: wp(3),
    width: wp(3),
    resizeMode: 'contain',
  },
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
    marginBottom:-4,
    color: '#E91E63',
    fontWeight: 'bold',
  },
  ratingSubText: {
    top: wp(-1),
  },
  descriptionHeading: {
    fontSize: 16,
    marginVertical: '0%',
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
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#E4428D',
    borderRadius: 10,
    justifyContent:'center',
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    width: wp(40), // Adjust width as needed
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight:'bold',
    overflow:'hidden',
  },
  bookingname: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: wp(-14),
    marginLeft: wp(30),
    marginRight: wp(10),
  },
  heartIcon: {
    marginTop: wp(-13),
    width: wp(2),
    height: wp(2),
    // marginRight:wp(2),
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
  image:{
    width: wp(20),
    height: wp(20),
    marginBottom: 8,
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

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalLogo: {
    width: 112,
    height: 116,
    marginBottom: 20,
  },
  schedulingModalLogo:{
    width:'60%',
    height:'20%',
    marginBottom:20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counterContainer:{
    flexDirection:'row',
    width:'25%',
    justifyContent:'space-evenly',
  },
  counterButton:{
    width:'35%',
    marginRight:'9%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    borderColor:'#E4428D',
    borderWidth:0.5,
  },
  counterButtonText:{
    color:'#E4428D',
  },
  counterText:{
    paddingRight:'10%',
    marginLeft:-2,
  },
  secondinputContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4428D',
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
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
    width: '6%',
    height: '45%',
    marginLeft: 10,
    resizeMode:'contain',
  },
  input:{
    fontSize:14,
    flex: 1,
    padding: 10,
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

export default UserTopService;
