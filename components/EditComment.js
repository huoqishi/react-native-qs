/**
 * 自己封装的按钮!
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Dimensions
} from 'react-native'
import Btn from './Btn'
const {width, height} = Dimensions.get('window')
export default class EditComment extends Component {
  render () {
    const {isShow} = this.props
    if (!isShow) return null
    return (
      <View style={styles.container}>
        <View style={styles.comment}>
          <TextInput style={styles.title} placeholder='标题'/>
          <TextInput multiline={true} style={styles.content}
            placeholder='评论内容'
            placeholderTextColor='#bbb' />
          <Btn style={styles.sub} title="评论"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    zIndex: 101,
    // top: ,
    width: width,
    height: height,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center'
    // top: 0,
    // left: 0
    // backgroundColor: '#3dc6b6'
  },
  comment: {
    width: '94%',
    marginTop: 48,
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#ccc'
  },
  title: {
    // width: '90%',
    fontSize: 16,
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff'
    // paddingRight：
  },
  sub: {
    marginTop: 16,
    width: '100%'
  },
  content: {
    marginTop: 16,
    // width: '90%',
    fontSize: 16,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    height: 150,
    backgroundColor: '#fff'
  }
})

// function (arg) {}
