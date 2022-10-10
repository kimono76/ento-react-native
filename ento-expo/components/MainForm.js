import React, {useState} from 'react'
import { View,Text,Button,StyleSheet } from 'react-native'

const MainForm = ()=> {

  const [mlResults,setMlResults] = useState('No Results')

  return (
    <View style={styles.mainFormContainer}>
        <Text>This is the Form</Text>
        <Text>Here goes an input </Text> 
        <Text>... and next to it there's a GO Button  </Text>
        <Text>And here are the ML results</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainFormContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainForm