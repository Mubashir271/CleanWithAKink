import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import BottomNav from '../../navigation/BottomNav'; // Assuming you're using this component for the bottom navigation
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';




const UserChat = () => {
  const navigation = useNavigation();
  // Dummy data for user profiles/messages
  const users = [
    {
      id: 1,
      name: 'John Doe',
      avatar: require('../../assets/img/avatar1.png'),
      message: 'Hey, how are you?',
      time: '10:30 AM',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: require('../../assets/img/avatar1.png'),
      message: 'I sent you the documents.',
      time: '09:15 AM',
    },    
    {
      id: 3,
      name: 'John Doe',
      avatar: require('../../assets/img/avatar1.png'),
      message: 'Hey, how are you?',
      time: '10:30 AM',
    },
    {
      id: 4,
      name: 'Jane Smith',
      avatar: require('../../assets/img/avatar1.png'),
      message: 'I sent you the documents.',
      time: '09:15 AM',
    },
    // Add more dummy users
  ];

  const handleUserPress = (user) => {
    navigation.navigate('UserChatExtend', { user });
  };

  return (
    <View style={{ flex: 1 , backgroundColor: '#fff' }}>
      {/* Header */}
      <Header title="Chat" />

      <View style={styles.container}>
        {/* Chat list */}
        <ScrollView style={[styles.scrollView, { marginTop: 10 }]}>
          {users.map((user) => (
            <TouchableOpacity key={user.id} style={styles.userProfile} onPress={() => handleUserPress(user)}>
              <Image source={user.avatar} style={styles.avatar} />
              <View style={styles.messageInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userMessage}>{user.message}</Text>
              </View>
              <Text style={styles.messageTime}>{user.time}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    padding: wp(4),
    color: '#fff',
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: wp(4),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: wp(2),
  },
  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
  },
  messageInfo: {
    flex: 1,
    marginLeft: wp(4),
  },
  userName: {
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  userMessage: {
    fontSize: wp(3.5),
    color: '#666',
  },
  messageTime: {
    fontSize: wp(3),
    color: '#999',
  },
});

export default UserChat;
