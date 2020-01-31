import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {actionCreators} from '../reducers/todoReducer';
import store from '../store/store';
import List from '../views/List';
import Input from '../views/Input';

class todosOnProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  componentDidMount() {
    const {todos} = store.getState();
    this.setState({todos});

    this.unsubscribe = store.subscribe(() => {
      const {todos} = store.getState();
      this.setState({todos});
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAddTodo = text => {
    store.dispatch(actionCreators.add(text));
  };

  onRemoveTodo = index => {
    store.dispatch(actionCreators.remove(index));
  };

  render() {
    const {todos} = this.state;

    return (
      <View>
        <Input
          placeholder={'Type to add mission, then hit enter'}
          onSubmitEditing={this.onAddTodo}
        />
        <Text style={styles.textBox}>Current Mission:</Text>
        <List list={todos} onPressItem={this.onRemoveTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: '#347474',
    marginBottom: 5,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});

export default todosOnProgress;
