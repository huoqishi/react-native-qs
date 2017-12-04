/**
 * 自己封装的按钮!
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native'
export default class Btn extends Component {
  render () {
    const title = this.props.title || this.props.children
    // const {btnStyle, textStyle} = this.porops
    console.log(this.props.btnStyle)
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.container, this.props.btnStyle, this.props.style]}>
        <Text style={[styles.text, this.props.textStyle]}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
    backgroundColor: '#3dc6b6',
    alignItems: 'center',
    justifyContent: 'center',
    height: 39
  },
  text: {
    fontSize: 18,
    color: '#fff'
  }
})

// function (arg) {}
