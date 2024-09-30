import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Modal,
  Platform,
  StatusBar,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import SearchHeader from '../../components/SearchHeader';
const {width, height} = Dimensions.get('window'); // Get screen width
import {useNavigation} from '@react-navigation/native';

const UserHome = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const openSearch = () => {
    setModalVisible(true);
  };
  const onBackPress = () => {
    setModalVisible(false);
  };

  //Data for Modal
  const sampleData = [
    {id: '1', title: 'Laundry'},
    {id: '2', title: 'Water Faucet repairing'},
    {id: '3', title: 'House shofting'},
    {id: '4', title: 'Floor washing'},
    {id: '5', title: 'Window cleaning'},
    {id: '6', title: 'Laundry'},
    {id: '7', title: 'Water Faucet repairing'},
    {id: '8', title: 'House shofting'},
    {id: '9', title: 'Floor washing'},
    {id: '10', title: 'Window cleaning'},
    {id: '11', title: 'Maid Cleaning'},
    // Add more items as needed
  ];

  // Dummy data for the flatlists
  const topServices = [
    {
      id: 1,
      image: require('../../assets/img/topservices.png'),
      heading: 'Home Cleaning',
      text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.....',
    },
    {
      id: 2,
      image: require('../../assets/img/topservices.png'),
      heading: 'Basic House Cleaning',
      text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.....',
    },
    {
      id: 3,
      image: require('../../assets/img/topservices.png'),
      heading: 'Carpet & Holster Clean',
      text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.....',
    },
  ];

  const topCleaners = [
    {
      id: 1,
      image: require('../../assets/img/homeclean.png'),
      text: 'Cleaner 1',
    },
    {
      id: 2,
      image: require('../../assets/img/homeclean.png'),
      text: 'Cleaner 2',
    },
  ];

  //Render Item for FlatList
  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.title}</Text>
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/cancelbutton.png')}
          style={styles.listItemIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* Header */}
      <Header title="Home" />

      {/* Main Content */}
      <ScrollView style = {{flex:1 , }}>
        {/* Search Bar */}

        {/* <TouchableOpacity onPress={openSearch}> */}
        <View style={styles.searchContainer}>
          <Image
            source={require('../../assets/icons/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#666"
            onPress={() => setModalVisible(true)}
          />
        </View>
        {/* </TouchableOpacity> */}
        {/* Services Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Services</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('UserAllServices')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.servicesRow}>
          <ImageBackground
            source={require('../../assets/img/homeservices.png')}
            style={styles.serviceback}>
            <Image
              source={require('../../assets/icons/housekeeping.png')}
              style={styles.serviceimg}
            />
            <Text style={styles.serviceText}>House Cleaning</Text>
          </ImageBackground>

          <ImageBackground
            source={require('../../assets/img/homeservices.png')}
            style={styles.serviceback}>
            <Image
              source={require('../../assets/icons/housecleaning.png')}
              style={styles.serviceimg}
            />
            <Text style={styles.serviceText}>Basic House Cleaning</Text>
          </ImageBackground>

          <ImageBackground
            source={require('../../assets/img/homeservices.png')}
            style={styles.serviceback}>
            <Image
              source={require('../../assets/icons/carpetcleaning.png')}
              style={styles.serviceimg}
            />
            <Text style={styles.serviceText}>Carpet & Holster Cl...</Text>
          </ImageBackground>

          <ImageBackground
            source={require('../../assets/img/homeservices.png')}
            style={styles.serviceback}>
            <Image
              source={require('../../assets/icons/maid.png')}
              style={styles.serviceimg4}
            />
            <Text style={styles.serviceText}>Maid Cleaning</Text>
          </ImageBackground>
        </View>
        {/* Top Services Section */}
        <View style={styles.servicesectionHeader}>
          <Text style={styles.sectionTitle}>Top Services</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={topServices}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('UserTopService')}>
              <View style={styles.topServiceItem}>
                <ImageBackground
                  source={item.image}
                  style={styles.topServiceImage}>
                  <Image
                    source={require('../../assets/icons/logo.png')}
                    style={styles.topServiceimg}
                  />
                  <View style={styles.topServiceTextContainer}>
                    <Text style={styles.topServiceHeading}>{item.heading}</Text>
                    <Text style={styles.topServiceText}>{item.text}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
        {/* Top Cleaners Section */}
        <View style={styles.cleanersectionHeader}>
          <Text style={styles.sectionTitle}>Top Cleaners</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.ScrollViewcleaner}>
          <TouchableOpacity style={styles.bookingContent}>
            <Image
              source={require('../../assets/img/homeclean.png')}
              style={styles.bookingImage}
            />
            <View style={styles.name}>
              <Text style={styles.bookingname}>Mubashir Mughal</Text>
              <Text style={styles.bookingText}>Home Cleaning</Text>
              <Text style={styles.bookingreviewtext}>
                <Image
                  source={require('../../assets/icons/bookingreview.png')}
                  style={styles.bookingreviewimage}
                />
                4.5 | 1,000 reviews
              </Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.priceText}>Price</Text>
              <Text style={styles.price}>$75</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bookingContent}>
            <Image
              source={require('../../assets/img/homeclean.png')}
              style={styles.bookingImage}
            />
            <View style={styles.name}>
              <Text style={styles.bookingname}>Mubashir Mughal</Text>
              <Text style={styles.bookingText}>Home Cleaning</Text>
              <Text style={styles.bookingreviewtext}>
                <Image
                  source={require('../../assets/icons/bookingreview.png')}
                  style={styles.bookingreviewimage}
                />
                4.5 | 1,000 reviews
              </Text>
            </View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Text style={styles.priceText}>Price</Text>
              <Text style={styles.price}>$75</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>

      {/* <BottomNavUser /> */}
      <Modal
        style={styles.modalContainer}
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View>
          <View style={styles.header}>
            {/* <View style={styles.contentContainer}> */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.backButton}
            />

            <View style={styles.searchingContainer}>
              {/* Header Section */}
              <SearchHeader title="Searching...." showBackButton={true} />
              {/* Search Bar */}
              <View style={styles.searchContainer}>
                <Image
                  source={require('../../assets/icons/search.png')}
                  style={styles.searchIcon}
                />
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search..."
                  placeholderTextColor="#666"
                />
              </View>

              {/* Row: All Searches and Clear All */}
              <View style={styles.searchActionsContainer}>
                <Text style={styles.searchActionText}>All Searches</Text>
                <TouchableOpacity>
                  <Text style={styles.clearText}>Clear All</Text>
                </TouchableOpacity>
              </View>

              {/* List View Example */}
              <FlatList
                data={sampleData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
            {/* </View> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: wp(4),
  },
  iconContainer: {
    marginRight: wp(2),
  },
  icon: {
    width: wp(5),
    height: wp(5),
    tintColor: '#666',
  },
  headerTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#333',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // borderBottomColor: 'black',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingVertical: wp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#E4428D',
    marginBottom: wp(4),
    zIndex: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 10,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    paddingTop: 20,
    marginBottom: -10,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    flex: 1,
  },
  backButton: {
    paddingTop: 26,
    marginBottom: -10,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginBottom: wp(3),
  },
  servicesectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginBottom: wp(3),
    marginTop: wp(-2),
  },
  sectionTitle: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: '#424242',
    marginVertical: wp(1),
  },
  seeAllText: {
    fontWeight: 'bold',
    fontSize: wp(3),
    color: '#E4428D',
  },
  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: wp(4),
    marginBottom: wp(4),
  },
  serviceimg: {
    width: '50%',
    height: '50%',
    marginHorizontal: 18,
    marginTop: 3,
  },
  serviceimg4: {
    width: '55%',
    height: '55%',
    marginHorizontal: 18,
    marginTop: 8,
  },
  serviceback: {
    width: wp(21),
    height: wp(21),
    marginBottom: wp(2),
    marginHorizontal: wp(0.7),
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceText: {
    resizeMode: 'contain',
    fontSize: wp(2.5),
    fontWeight:'bold',
    textAlign: 'center',
  },
  serviceText4: {
    resizeMode: 'contain',
    fontSize: wp(3),
    textAlign: 'center',
  },
  topServiceItem: {
    width: wp(42),
    alignItems: 'center',
    marginHorizontal: wp(1.5),
    marginRight: wp(-2),
  },
  topServiceImage: {
    width: wp(36),
    height: wp(36),
    borderRadius: 10,
  },
  topServiceimg: {
    width: '100%',
    height: wp(18),
    resizeMode: 'contain',
    // marginLeft: 1,
  },
  topServiceTextContainer: {
    marginTop: wp(2),
    paddingHorizontal: wp(2),
    alignItems: 'flex-start',
  },
  topServiceHeading: {
    fontSize: wp(3.2),
    fontWeight: 'bold',
    color: '#424242',
    marginBottom: wp(0.5),
  },
  topServiceText: {
    fontSize: wp(2.1),
    color: '#666',
  },
  bookingname: {
    color: '#E91E63',
    fontSize: 10,
    marginVertical: 10,
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

  bookingContent: {
    // marginHorizontal:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4428D',
    borderRadius: 15,
    width: '90%',
    padding: 15,
    marginTop: 10,
    // height: wp(25),
    alignSelf: 'center',
  },
  bookingImage: {
    width: 80,
    height: 80,
  },
  bookingText: {
    flex: 1,
    marginLeft: 8,
    // marginTop: 5,
    fontSize: 16,
    color: '#424242',
    fontWeight: 'bold',
  },
  bookingreviewtext: {
    fontSize: 10,
    marginLeft:8,
  },
  bookingreviewimage: {
    height: wp(3),
    width: wp(3),
    // marginLeft:4,
    resizeMode: 'contain',
  },
  priceText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  pendingRequest: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  cleanersectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginBottom: wp(-2),
    marginTop: wp(4),
  },
  ScrollViewcleaner: {
    flexDirection: 'column',
  },

  //Modal CSS

  modalContainer: {
    flex: 1,
    height: '100%',
    width: wp(100),
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  searchingContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems:'center'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(4),
    borderColor: '#E4428D',
    borderWidth: 1,
    borderRadius: 20,
    // padding: wp(2),
    marginVertical: wp(6),
  },
  searchInput: {
    // flex: 1,
    fontSize: wp(3),
    color: '#333',
  },
  searchIcon: {
    width: wp(4),
    height: wp(4),
    tintColor: '#666',
    marginHorizontal: wp(3.5),
    left:wp(2),
  },
  searchActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    marginBottom: wp(4),
    marginTop: wp(2),
  },
  searchActionText: {
    fontSize: wp(4),
    color: '#black',
    fontWeight: 'bold',
    marginBottom: wp(4),
  },
  clearText: {
    fontSize: wp(4),
    color: '#E4428D',
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: wp(3),
    paddingHorizontal: wp(4),
    // borderBottomWidth: 1,
    borderBottomColor: '#E4428D',
  },
  listItemText: {
    fontSize: wp(4),
    color: '#333',
  },
  listItemIcon: {
    width: wp(4),
    height: wp(4),
    // tintColor: '#666',
  },
});

export default UserHome;
