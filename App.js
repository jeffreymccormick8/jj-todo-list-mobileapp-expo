import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [goals, setGoal] = useState([]);

  const addGoalHandler = goalTitle => {
    setGoal(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGoalHandler = goalId => {
    setGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.jj}>JJ McCormick's</Text>
      <Text style={styles.jj}>To-do List</Text>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={goals} renderItem={itemData => 
      <GoalItem 
      id={itemData.item.id} 
      onDelete= {removeGoalHandler} 
      title={itemData.item.value} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70
  },
  jj:{
    padding: 10,
    fontSize: 30,
    justifyContent: 'center',
  },
  todoList:{
    padding: 10,
    justifyContent: 'center',
  }
});
