import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../../components/Header';

const notifications = [
  {
    id: '1',
    title: 'Cleaning Service',
    message: 'Your cleaning service has been scheduled.',
    time: '10:30 AM',
    icon: require('../../assets/icons/notificationicon.png'), // Adjust path if needed
  },
  {
    id: '2',
    title: 'Appointment Reminder',
    message: 'Your appointment is tomorrow at 3 PM.',
    time: '09:15 AM',
    icon: require('../../assets/icons/notificationicon.png'),
  },
  {
    id: '3',
    title: 'New Booking',
    message: 'You have a new booking request.',
    time: '08:00 AM',
    icon: require('../../assets/icons/notificationicon.png'),
  },
  // Add more notifications as needed
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Notifications" />

      {/* Notifications list */}
      <ScrollView style={styles.scrollView}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationContainer}>
            <Image source={notification.icon} style={styles.notificationIcon} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
            </View>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
        ))}
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    // padding: wp(8),
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(2),
    marginTop: wp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: wp(5),
    // marginHorizontal:wp(5),
    width:wp(100)
  },
  notificationIcon: {
    width: wp(14),
    height: wp(14),
    borderRadius:20,
    marginRight: wp(4),
    marginLeft: wp(-4),
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: '#333',
  },
  notificationMessage: {
    fontSize: wp(3.5),
    color: '#666',
    marginTop: wp(1),
  },
  notificationTime: {
    fontSize: wp(3),
    color: '#E4428D',
    bottom: -30,
  },
});

export default NotificationScreen;
