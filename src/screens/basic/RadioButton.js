import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioButton = ({ selected, onPress, value }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.radioButtonContainer}>
      <View style={[styles.radioButton, selected ? styles.selected : styles.unselected]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    color:'black',
  },
  radioButton: {
    width: 20,
    height:20,
    borderRadius:20,
    color: 'black',
    borderColor:'#000',
    borderWidth:1,
    marginRight:10
  },
  unselected: {
   // backgroundColor: '#FFF',
    padding:5

  },
  selected: {
    backgroundColor: '#E4428D',
    padding:5

  },
  label: {
    fontSize: 16,
    color: '#000',
  },
});

export default RadioButton;
