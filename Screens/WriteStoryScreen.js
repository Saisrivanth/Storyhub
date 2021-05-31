import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
    author :'',
    storyText :'',
    title :'',
    }
  }

  submitStory = () =>{
    db.collection('stories').add({
      author:this.state.author,
      storyText:this.state.storyText,
      title:this.state.title,
    })
    this.setState({
      author:'',
      storyText:'',
      title:'',
    })
  }

  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Write the title of the story here"
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Write the name of the author here"
        />

        <TextInput
          style={styles.storyBox}
          placeholder="Write your story here"
        />

        <TouchableOpacity 
          style={styles.submitButton} 
          onPress = {this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#38b29b',
    flex: 1,
  },
  header: {
    backgroundColor: 'orange',
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: 'orange',
    width: '50%',
    height: 40,
     marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
  },
});
//Done by saisrivanth...
