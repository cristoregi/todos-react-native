import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import OngoingTodos from './todosOnProgress';
import DoneTodos from './todosDone';

const TabNavigator = createBottomTabNavigator({
  Ongoing: OngoingTodos,
  Done: DoneTodos,
});

const TabContainer = createAppContainer(TabNavigator);

class todosView extends Component {
  static navigationOptions = {
    title: 'To - do List',
    headerStyle: {
      backgroundColor: '#347474',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return <TabContainer />;
  }
}

export default todosView;
