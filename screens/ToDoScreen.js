import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Button, Alert } from 'react-native';
import { Text, Title } from 'react-native-paper';
import TaskItem from '../components/TaskItem';

const dummyAISuggestions = [
  'Drink water regularly',
  'Take a 5-minute break every hour',
  'Prioritize your tasks',
];

export default function ToDoScreen() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Sample Task 1', description: 'This is a sample task', completed: false },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');

  useEffect(() => {
    // Mock AI suggestion based on habit
    const suggestion = dummyAISuggestions[Math.floor(Math.random() * dummyAISuggestions.length)];
    setAiSuggestion(suggestion);
  }, [tasks]);

  const addTask = () => {
    if (!newTaskTitle.trim()) {
      Alert.alert('Error', 'Task title cannot be empty');
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      title: newTaskTitle,
      description: '',
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Title>To-Do List</Title>
      <TextInput
        placeholder="Add new task"
        value={newTaskTitle}
        onChangeText={setNewTaskTitle}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8, borderRadius: 4 }}
      />
      <Button title="Add Task" onPress={addTask} />
      <Text style={{ marginVertical: 16, fontStyle: 'italic' }}>AI Suggestion: {aiSuggestion}</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskItem task={item} onToggle={toggleTask} />}
      />
    </View>
  );
}
