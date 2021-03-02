// Import
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Export application
export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text>CU There</Text>
      <Button
        title="Click here to increment"
        onPress={() => setCount(count + 1)}
      />
      <Button
        title="Click here to decrement"
        onPress={() => setCount(Math.max(count - 1, 0))}
      />
      <Text>{count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
