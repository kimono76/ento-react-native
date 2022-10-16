import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MainForm from './components/MainForm'
import Heading from "./components/Heading";

// for installing React Native Paper

//yarn add react-native-paper@5.0.0-rc.6

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
