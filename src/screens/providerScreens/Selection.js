import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  Platform,
  ScrollView,
} from 'react-native';
import SelectButton from '../../components/CustomButton'; // Adjust the import path as needed
import Header from '../../components/Header'; // Adjust the import path as needed
import {useNavigation} from '@react-navigation/native';

const services = [
  {
    id: '1',
    name: 'House Keep...',
    price: '100',
    icon: require('../../assets/icons/housekeeping.png'),
  },
  {
    id: '2',
    name: 'Basic House Cleaning',
    price: '100',
    icon: require('../../assets/icons/housecleaning.png'),
  },
  {
    id: '3',
    name: 'Carpet & Upholstery...',
    price: '100',
    icon: require('../../assets/icons/carpetcleaning.png'),
  },
  {
    id: '4',
    name: 'Maid Service',
    price: '100',
    icon: require('../../assets/icons/maid.png'),
  },
  {
    id: '5',
    name: 'Spring Cleani..',
    price: '100',
    icon: require('../../assets/icons/springcleaning.png'),
  },
  {
    id: '6',
    name: 'Commercial Cleaning',
    price: '100',
    icon: require('../../assets/icons/commercialcleaning.png'),
  },
];

export default function ServiceSelectionScreen() {
  const navigation = useNavigation();
  const [selectedService, setSelectedService] = useState(null);

  const handleSelect = id => {
    setSelectedService(prev => (prev === id ? null : id)); // Toggle selection
  };

  const renderService = ({item}) => (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/img/rectangleframe.png')}
        style={styles.backgroundImage}
        imageStyle={{
          borderRadius: 10,
          resizeMode: 'contain',
          height:'70%',
          width: '95%',
          margin: 10,
        }}>
        <TouchableOpacity
          style={[
            styles.serviceItem,
            selectedService === item.id && styles.selectedService,
          ]}
          onPress={() => handleSelect(item.id)}>
          <SelectButton
            isSelected={selectedService === item.id}
            onPress={() => handleSelect(item.id)}
            style={styles.SelectButton}
          />
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.serviceName}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );

  return (
    <View style={{flex: 1}}>
      <Header title="Selection" />

      <View style={styles.container}>
        <View style={styles.servicelist}>
          <FlatList
            data={services}
            renderItem={renderService}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
          />
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate('BottomNav')}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    // flexGrow: 1,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    resizeMode: 'contain',
    padding: 4,
    marginHorizontal: '10%',
    // marginTop: 10,
    marginBottom: '8%',
  },
  servicelist: {
    marginTop: 10,
    // paddingTop:-50,
  },
  selectedService: {
    // borderColor: '#E4428D', // Border color for selected service
    // borderWidth: 2,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
    flexDirection: 'row',
    // paddingVertical: 1,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  icon: {
    width: 55,
    height: 55,
    top: 9,
    left: -10,
    resizeMode: 'cover',
  },
  serviceName: {
    flex: 1,
    fontSize: 16,
    paddingTop:14,
  },
  price: {
    color: '#E4428D',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight:-14,
    marginTop:14,
  },
  continueButton: {
    backgroundColor: '#E4428D',
    position: 'absolute',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '10%',
    marginHorizontal: 20,
    bottom: '2%',
    width: '90%',
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
  },
});
