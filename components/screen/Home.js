import React, { Component } from 'react';
import { 
  View,  
  Button, 
  Image,
  StyleSheet 
} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#347474',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render () {
    return (
      <View style={styles.container}>
        <View >
          <Image 
            style={styles.image}
            source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}
          />
          <Button
            color= '#42b883'
            style={styles.box} 
            title="Todo List" 
            onPress={() => this.props.navigation.navigate('TodosScreen')} >
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 200,
    height: 200,
    padding: 25,
  },
  text: {
    paddingBottom: 10,
    alignSelf: 'center'
  },
  image: {
    width: 200,
    height: 200
  }
});

export default Home