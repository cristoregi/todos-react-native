import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {
  state = {
    text: '',
  }

  onChangeText = text => this.setState({ text })

  onSubmitEditing = () => {
    const { onSubmitEditing } = this.props
    const { text } = this.state

    if (!text) return

    onSubmitEditing(text)
    this.setState({ text: '' })
  }

  render() {
    const { placeholder } = this.props
    const { text } = this.state

    return (
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}    
      />
    )
  }
}

const styles = StyleSheet.create ({
  input: {
    padding: 10,
    height: 50
  }
})

export default Input