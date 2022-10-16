import React, {useState} from 'react'
import { View,Text,StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Card , FAB} from 'react-native-paper'

let resultText = ``

const MainForm = ()=> {
  const mockListData = [
    {id:1, title:`Title 1`, body:`body text one`},
    {id:2, title:`Title 2`, body:`body text two`},
    {id:3, title:`Titlw 3`, body:`body text three`}
  ]

  const renderListData = item =>{
    return (
      <Card style={styles.card}>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
      </Card>
    )
  }

  const getResultStack = ()=>{
    resultText += `\n This is one row of the result text \n`
    console.log(` ---- \n text from getResultStack function \n `)
    return resultText
  }

  const [mlResults,setMlResults] = useState('No Results')

  return (
    <View style={{flex:1}}>
    {/*<View style={styles.mainFormContainer}>*/}
        <Text>This is the Form</Text>
        <Text>Here goes an input </Text> 
        <TouchableOpacity 
          style={styles.button}
          onPress={()=>{
            setMlResults(getResultStack())
            
            }
          }  
        >
          <Text 
            style={styles.buttonText}
          >
            GO
          </Text>
        </TouchableOpacity>
        {/* <Text>{mlResults}</Text> */}

        <FlatList
          data={mockListData}
          renderItem={({item}) => {
            //console.log(item)
            return renderListData(item)
            }
          }
          keyExtractor={item=>`${item.id}`}
        />
{/* 
        <FAB 
          style={styles.fab}
          small={false}
          icon="plus"
          theme={{colors:{accent:"red"}}}
          onpress={()=> console.log(`\n BUTTON PLUS PRESSED \n`)}
        /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  mainFormContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    width:100,
    position:"relative",
    alignItems: 'center',
    justifyContent: 'center',
    margin:25,
    backgroundColor: "#f70776",
    padding: 20,
    borderRadius: 50
  },
  buttonText: {
      color: "white",
      fontSize:25,
  },
  card:{
    margin:10,
    padding:10,
  },
  fab:{
    // position:'absolute',
    // position:'relative',
    margin:16,
    right:0,
    button:0,
    // left:220,
    //borderRadius:50,
    width:60
    // top:400,
  }
});

export default MainForm