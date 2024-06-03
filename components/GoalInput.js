import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  // 입력창의 상태를 관리하는 변수를 React에서 사용하는 useState 훅을 활용하여 선언.
  const [enteredGoalText, setEnteredGoalText] = useState('');

  // 사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  const goalInputHandler = (enterdText) => {
    setEnteredGoalText(enterdText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          marginTop: 20,
        }}
      >
        **** 군범이의 할일 ****
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='할 일을 입력하세요'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title='할 일 추가하기' onPress={addGoalHandler} />
      </View>
      <View>
        <Text style={styles.goalsTitle}>할 일 List</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row', // 가로배치
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  goalsTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'orangered',
    marginBottom: 10,
    paddingBottom: 8,
    backgroundColor: '	#FA8072',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
