import React, {useState} from 'react'
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native'

let resultText = ``

const MainForm = ()=> {


  const getResultStack = ()=>{
    resultText += `\n This is the result text \n`
    return resultText
  }

  const [mlResults,setMlResults] = useState('No Results')

  return (
    <View style={styles.mainFormContainer}>
        <Text>This is the Form</Text>
        <Text>Here goes an input </Text> 
        <TouchableOpacity 
          style={styles.button}
          onPress={()=>{setMlResults(getResultStack())}}  
        >
          <Text 
            style={styles.buttonText}
          >
            GO
          </Text>
        </TouchableOpacity>
        <Text>{mlResults}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainFormContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin:25,
    backgroundColor: "#f70776",
    padding: 20,
    borderRadius: 50
  },
  buttonText: {
      color: "white",
      fontSize:25,
  }
});

export default MainForm