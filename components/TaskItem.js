import React from 'react';
import { List } from 'react-native-paper';

export default function TaskItem({ task, onToggle }) {
  return (
    <List.Item
      title={task.title}
      description={task.description}
      onPress={() => onToggle(task.id)}
      left={props => <List.Icon {...props} icon={task.completed ? 'check-circle' : 'circle-outline'} />}
    />
  );
}
