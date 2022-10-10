import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainForm from './components/MainForm'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ENTO</Text>
      <Text>Welcome to the ML powered Entity Finder</Text>
      <MainForm/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
});
