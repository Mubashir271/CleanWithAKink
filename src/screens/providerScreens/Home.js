import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
// import BottomNav from '../../navigation/BottomNav';

const Home = () => {
  const navigation = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Header title="Home" />
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {/* New Bookings Card */}
          <TouchableOpacity
            style={styles.fullCard}
            onPress={() => navigation.navigate('NewBookings')}>
            <ImageBackground
              source={require('../../assets/img/squarenewcard.png')}
              style={styles.fullCardBackground}
              imageStyle={styles.imageStyle}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.cardTitle}>New{'\n'}Bookings</Text>
                <Text style={styles.cardNumber}>5/1</Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/icons/calendar.png')} // Replace with actual calendar icon
                  style={styles.fullicon}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* Accepted Bookings Card */}
          <TouchableOpacity style={styles.halfCard}>
            <ImageBackground
              source={require('../../assets/img/squareframe.png')}
              style={styles.halfCardBackground}
              imageStyle={styles.halfimageStyle}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.halfcardTitle}>Accepted Bookings</Text>
                <Image
                  source={require('../../assets/icons/accepted.png')} // Replace with actual accepted icon
                  style={styles.halficon}
                />
              </View>
              {/* <View> */}
              <Text style={styles.halfcardNumber}>5</Text>
              {/* </View> */}
            </ImageBackground>
          </TouchableOpacity>

          {/* Rejected Bookings Card */}
          <TouchableOpacity style={styles.halfCard}>
            <ImageBackground
              source={require('../../assets/img/squareframe.png')}
              style={styles.halfCardBackground}
              imageStyle={styles.halfimageStyle}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.halfcardTitle}>Rejected Bookings</Text>
                <Image
                  source={require('../../assets/icons/rejected.png')} // Replace with actual rejected icon
                  style={styles.halficon}
                />
              </View>
                <Text style={styles.halfcardNumber}>5</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* Completed Bookings Card */}
          <TouchableOpacity style={styles.fullCard}>
            <ImageBackground
              source={require('../../assets/img/squarenewcard.png')}
              style={styles.fullCardBackground}
              imageStyle={styles.imageStyle}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.cardTitle}>Completed{'\n'}Bookings</Text>
                <Text style={styles.cardNumber}>8</Text>
              </View>
              <View>
                <Image
                  source={require('../../assets/icons/completed.png')} // Replace with actual calendar icon
                  style={styles.completedfullicon}
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
      {/* <BottomNav /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor:'#fff',
    justifyContent: 'space-between',
    padding: 20.5,
  },
  fullCardBackground: {
    width: '99.2%',
    flexDirection: 'row',
    height: '92%',
    justifyContent: 'space-between',
  },
  halfcardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242',
    // marginBottom: 3,
    margin: 12,
    top:20
  },
  halfcardNumber: {
    margin: 12,
    fontSize: 40,
    bottom:20,
    left:6,
    color: '#E4428D',
    fontWeight: 'bold',
  },
  halfCardBackground: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    resizeMode:'contain'
    // justifyContent: 'center',
  },
  halfCard: {
    width: '47%',
    height: 200, // Added equal height for both half cards
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 15,
    // margin: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 5,
    // marginBottom: 18, // Add margin for spacing between cards
  },
  halficon: {
    height: 90,
    width: 90,
    margin: -45,
    marginTop: 80,
  },
  imageStyle: {
    resizeMode: 'contain',
  },
  halfimageStyle: {
    resizeMode: 'contain',
  },
  fullCard: {
    width: '100%',
    // backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '28%',
    // marginBottom: '4%',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    elevation: 2,
  },

  completedfullicon: {
    height: 120,
    width: 120,
    // margin: 10,
    marginTop: 10,
    right: 10,
  },
  fullicon: {
    height: 120,
    width: 120,
    // margin: 10,
    marginTop: 10,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242',
    // marginBottom: 2,
    margin: 20,
    bottom:10,
  },
  cardNumber: {
    margin: 20,
    marginTop: 20,
    fontSize: 40,
    bottom:30,
    color: '#E4428D',
    fontWeight: 'bold',
  },
});

export default Home;
