/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  Home  from './components/screen/Home';
import  TodosView  from './components/todos/todosView';

const RootStack = createStackNavigator(
  {  
    HomeScreen: Home,
    TodosScreen: TodosView
  },
  {
    intialRouteName: 'HomeScreen',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    )
  }
}
