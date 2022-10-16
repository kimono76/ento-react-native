import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Heading= (props)=> {
  return (
    <View>
        <Text style={styles.titleText}>
            {props.appName}
        </Text>
      <Text style={styles.subText}>Welcome to the ML powered Entity Finder</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleText: {
      padding:10,
      fontSize:20,
      fontStyle:'bold',
    },
    subText:{
      fontSize:11,
      paddingLeft:10,
      marginBottom:10,
    }
});

export default Heading