import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: 'orange',
  },
  goalText: {
    color: 'white',
    fontSize: 30,
  },
});
