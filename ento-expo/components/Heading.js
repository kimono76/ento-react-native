import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading= (props)=> {
  return (
    <View>
        <Text
            style={styles.titleText} 
        >
            {props.appName}
        </Text>
      <Text>Welcome to the ML powered Entity Finder</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleText: {
      fontSize:20,
      fontStyle:'bold',
  }
});

export default Heading