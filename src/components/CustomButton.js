import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SelectButton = ({ isSelected, onPress }) => (
  <TouchableOpacity
    style={[styles.button, isSelected && styles.selectedButton]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{isSelected ? '✓' : ''}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E4428D',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginRight: 15,
  },
  selectedButton: {
    backgroundColor: '#E4428D',
  },
  buttonText: {
    fontSize: 20,
    color: '#E4428D',
  },
});

export default SelectButton;
