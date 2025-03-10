import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>My Todo List</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  listItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
});