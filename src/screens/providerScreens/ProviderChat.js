import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity , StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'; // Adjust the path if needed

const ProviderChat = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // const { user } = route.params; // Adjust this if the parameter name is different

  // console.log(user); // Verify if user is correctly received

  // Dummy data for chat messages
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hey, how are you?', sender: 'other', time: '10:30 AM' },
    { id: '2', text: 'I’m good, thanks for asking!', sender: 'self', time: '10:32 AM' },
    { id: '3', text: 'What about you?', sender: 'other', time: '10:33 AM' },
    { id: '4', text: 'I’m doing well too.', sender: 'self', time: '10:35 AM' },
    // Add more dummy messages here
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: newMessage, sender: 'self', time: 'Just now' }]);
      setNewMessage('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={[
      styles.messageContainer,
      item.sender === 'self' ? styles.selfMessage : styles.otherMessage
    ]}>
      <Text style={styles.messageText}>{item.text}</Text>
      {item.time && <Text style={styles.messageTime}>{item.time}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.Header}>
      {/* Header */}
      <Header
        title={'Mubashir'}
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />
      </View>

      {/* Chat messages */}
      <ScrollView 
        contentContainerStyle={styles.messagesContainer}
        style={styles.scrollView}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.sender === 'self' ? styles.selfMessage : styles.otherMessage
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
            {message.time && <Text style={styles.messageTime}>{message.time}</Text>}
          </View>
        ))}
      </ScrollView>

      {/* Message input */}
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={handleSend}>
          <Image source={require('../../assets/icons/sendicon.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    Header:{
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 70, // Add padding at the bottom to ensure content isn't hidden by footer
  },
  messagesContainer: {
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 20, // Adjust this to make the bubble rounder
    marginBottom: 10,
    maxWidth: '80%',
    backgroundColor: '#fff',
    shadowColor: '#E4428D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  selfMessage: {
    alignSelf: 'flex-end',
    borderTopRightRadius: 0, // Make right side squared
    borderTopLeftRadius: 20, // Keep left side rounded
  },
  otherMessage: {
    alignSelf: 'flex-start',
    borderTopRightRadius: 20, // Keep right side rounded
    borderTopLeftRadius: 0, // Make left side squared
  },
  messageText: {
    color: '#000',
  },
  messageTime: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    marginBottom: '10%',
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    elevation: 6, // Adds a shadow for better separation from the chat area
    shadowOpacity: 0.1,
    shadowColor:'#E4428D',
    borderRadius: 50,
    marginHorizontal:10,
},
  input: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  sendIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default ProviderChat;
