import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
});