import { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  // 입력창의 상태를 관리하는 변수를 React에서 사용하는 useState 훅을 활용하여 선언.
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [todoGoals, setTodoGoals] = useState([]);

  // 사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  const goalInputHandler = (enterdText) => {
    setEnteredGoalText(enterdText);
  };

  // 버튼을 누르면 할 일 목록을 추가하는 함수
  const addGoalHandler = () => {
    // console.log(enteredGoalText);
    // setTodoGoals([...todoGoals, enteredGoalText]);

    // useState setter 메서드의 스냅샷 방식
    // 콜백 함수의 매개값은 해당 상태 변수의 최신 값이
    setTodoGoals((currentTodoGoals) => [
      ...currentTodoGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
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
        />
        <Button title='할 일 추가하기' onPress={addGoalHandler} />
      </View>
      <View>
        <Text style={styles.goalsTitle}>할 일 List</Text>
      </View>
      <View style={styles.goalsContainer}>
        {/*
          ScrollView는 전체 화면이 렌더링 될 때 안에 항목들을 전부 렌더링 합니다.
          이로 인해 성능 상의 저하가 나타날 수 있습니다.
          (보이지 않는 영역까지 렌더링을 진행하기 때문에 목록이 많다면 로딩이 길어짐.)
          FlatList는 보이는 영역만 일단 렌더링을 진행하고, 나머지 항목들은
          스크롤 움직임이 발생하면 그때 그때 렌더링을 진행합니다.
      */}
        <FlatList
          data={todoGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16, // 수평으로
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row', // 가로배치
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalsTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'orangered',
    marginBottom: 10,
    paddingBottom: 8,
    backgroundColor: '	#FA8072',
  },
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
