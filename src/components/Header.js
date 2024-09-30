import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, TouchableOpacity, Image, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');

const Header = ({ title, showBackButton,  rightComponent }) => {
  const navigation = useNavigation();
  const onBackPress = () =>{
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor={"#fff"} barStyle={'dark-content'}  />
      {/* Back Button */}
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image source={require('../assets/icons/backicon.png')} style={styles.backIcon} />
        </TouchableOpacity>
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Right Component (Edit) */}
      {rightComponent && (
        <View style={styles.rightComponent}>
          {rightComponent}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height:'10%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    // paddingVertical: '8%',
    backgroundColor: '#FFF',
    zIndex: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 10,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    // paddingTop: 20,
    // marginBottom: -10,
    // position:'absolute',
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    flex: 1,
  },
  backButton: {
    // paddingTop: 26,
    // marginBottom: -10,
    // left:10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  rightComponent: {
    // position: 'absolute',
    // right: 10,
    // paddingTop: 26,
  },
});

export default Header;
