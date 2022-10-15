import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainForm from './components/MainForm'
import Heading from "./components/Heading";

export default function App() {
  return (
    <View style={styles.container}>
      <Heading appName='ENTO' />
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
