import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Header from '../../components/Header';// Adjust this import according to the actual path of your header

const UserAllServices = () => {
  const services = [
    { id: '1', title: 'House Cleaning', image: require('../../assets/icons/housekeeping.png') },
    { id: '2', title: 'Basic House Cleaning', image: require('../../assets/icons/housecleaning.png') },
    { id: '3', title: 'Carpet & Holster Clean', image: require('../../assets/icons/carpetcleaning.png') },
    { id: '4', title: 'Maid Cleaning', image: require('../../assets/icons/maid.png') },
    { id: '5', title: 'Spring Cleaning', image: require('../../assets/icons/springcleaning.png') },
    { id: '6', title: 'Commercial Cleaning', image: require('../../assets/icons/commercialcleaning.png') },
    { id: '7', title: 'House Cleaning', image: require('../../assets/icons/housekeeping.png') },
    { id: '8', title: 'Basic House Cleaning', image: require('../../assets/icons/housecleaning.png') },
    // Add more services as needed
  ];

  const renderService = ({ item }) => (
    <View style={styles.serviceContainer}>
      <ImageBackground source={require('../../assets/img/homeservices.png')}
      style={styles.backimg}>
      <Image source={item.image} style={styles.serviceImage} />
      <Text style={styles.serviceText}>{item.title}</Text>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Use the HeaderComponent here */}
      <Header title="All Services" 
      showBackButton={true}
      />

      <FlatList
        data={services}
        renderItem={renderService}
        keyExtractor={(item) => item.id}
        numColumns={4}  // Display 4 items per row
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 20,
    resizeMode:'cover',
    width:'100%',
  },
  serviceContainer: {
    flex: 1,
    margin: 5,
    height: '90%',
    width:'60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceImage: {
    width: '50%',
    height: 50,
    marginLeft: 16,
    resizeMode: 'contain',
    // marginBottom: 5,
  },
  serviceText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  backimg: {
    width: '100%',
    height: '85%',
    // resizeMode: 'contain'
  },
});

export default UserAllServices;
