import React, {useState, useEffect} from 'react'
import { View,Text,StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Card , FAB} from 'react-native-paper'

let resultText = ``

const MainForm = ()=> {
  const [mlResults,setMlResults] = useState('No Results')
  
  const[mockListData,SetMockListData]= useState([])

  useEffect(
    ()=>{
      fetch('http://192.168.0.110:3000/sample',
        {
          method:'GET'
        })
      .then( resp=> resp.json())
      .then(article =>{
        console.log(article['ents'])
        SetMockListData(article['ents'])
      })
    },[]) 

  // const mockListData = [
  //   {id:1, title:`Title 1`, body:`body text one`},
  //   {id:2, title:`Title 2`, body:`body text two`},
  //   {id:3, title:`Titlw 3`, body:`body text three`}
  // ]

  const renderListData = item =>{
    //console.log(item)

    return (
      <Card style={styles.card}>
        <Text>{item.ent}</Text>
        <Text>{item.label}</Text>
      </Card>
    )
  }

  const getResultStack = ()=>{
    resultText += `\n This is one row of the result text \n`
    console.log(` ---- \n text from getResultStack function \n `)
    return resultText
  }


  return (
    <View style={{flex:1}}>
    {/*<View style={styles.mainFormContainer}>*/}

        <Text style={{margin:10}}>Here goes an input </Text> 
        <TouchableOpacity 
          style={styles.button}
          onPress={()=>{
            // SetMockListData()
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
          keyExtractor={item=>`${item.ent}`}
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
    borderTopLeftRadius:0,
    borderTopRightRadius:0,
    borderButtonLeftRadius:0,
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