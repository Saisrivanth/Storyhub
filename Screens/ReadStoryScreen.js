import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <Text style={styles.displayText}>
           Oops, it seems that this screen is not ready to show you yet. 
          You can read stories in this screen in the upcoming versions of this
          app.
        </Text>

        <Text style={styles.displayText}>
          But for now, you can read some moral stories by just pasting this link
          in a new tab - " https://wealthygorilla.com/best-short-moral-stories/
          " Hope, you will love !
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#ef7b64',
    flex: 1,
     },
  header: {
    backgroundColor: 'pink',
   
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
     fontSize: 20,
    padding: 15,
  },
});
//Done by saisrivath...
