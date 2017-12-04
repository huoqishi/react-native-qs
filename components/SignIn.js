import React, {Component} from 'react'
import {
StyleSheet,
View,
Text,
TextInput
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Btn from './Btn'

export default class SignIn extends Component {
  constructor () {
    super()
    this.state = {
      aFocus: false,
      bFocus: false
    }
  }
  render () {
    const {aFocus} = this.state
    const bFocus = !aFocus
    return (
      <View style={[styles.container]}>
        <View style={[styles.signType]}>
          <Text style={[styles.type, styles.typeActive]}>账号密码登陆</Text>
          <Text style={styles.separate}>|</Text>
          <Text style={styles.type}>验证码登陆</Text>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.inputItem}>
            <Icon style={styles.icon} name='user' size={25} color='#ccc' />
            <TextInput
              onFocus={() => this.setState({aFocus: true})}
              onBlur={() => this.setState({aFocus: false})}
              style={[styles.input, styles.inputFocus && aFocus]} placeholder='账号' />
          </View>
          <View style={styles.inputItem}>
            <Icon style={styles.icon} name='lock' size={25} color='#ccc' />
            <TextInput
              onFocus={() => this.setState({aFocus: false})}
              onBlur={() => this.setState({aFocus: true})}
              style={[styles.input, styles.inputFocus && (!bFocus)]} placeholder='密码' />
          </View>
        </View>
        <View style={styles.btnBox}>
          <Btn btnStyle={[styles.btn, styles.signBtnIn]} textStyle={[styles.signTextIn]} title='登陆' />
          <Btn btnStyle={[styles.btn, styles.signBtnUp]} textStyle={[styles.signTextUp]} >注册</Btn>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>©2017 huoqishi.net 京ICP证 火骑士空空 号</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#fff'
  },
  /**
   * 账号密码输入框部分-start
   */
  inputBox: {
    alignItems: 'center',
    marginTop: 16,
    paddingTop: 16,
    // paddingLeft: 8,
    // paddingRight: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  inputItem: {
    width: '90%',
    marginTop: 8,
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderRightColor: '#ccc',
    borderBottomColor: '#ccc',
    borderLeftColor: '#ccc',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1
    // backgroundColor: '#ccc'
  },
  input: {
    flex: 1,
    height: 39,
    fontSize: 18,
    color: '#ccc'
    // backgroundColor: '#f0f'
  },
  inputFocus: {
    // fontSize: 40,
    color: '#676767',
    borderTopColor: '#3dc6b6',
    borderRightColor: '#3dc6b6',
    borderBottomColor: '#3dc6b6',
    borderLeftColor: '#3dc6b6'
  },
  icon: {
    paddingLeft: 16,
    paddingRight: 16
  },
    /**
   * 账号密码输入框-end
   */

  /**
   * 登陆注册按钮-start
   */
  btnBox: {
    marginTop: 32,
    alignItems: 'center'
  },
  btn: {
    marginTop: 16,
    width: '90%',
    height: 39,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  signBtnIn: {
    backgroundColor: '#3dc6b6'
  },
  signBtnUp: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopColor: '#3dc6b6',
    borderRightColor: '#3dc6b6',
    borderBottomColor: '#3dc6b6',
    borderLeftColor: '#3dc6b6',
    backgroundColor: '#fff'
  },
  signTextIn: {
    color: '#fff'
  },
  signTextUp: {
    color: '#3dc6b6'
  },
  /**
   * 登陆注册按钮-end
   */

  signType: {
    // flex: 1,
    // heigh
    marginTop: 24,
    flexDirection: 'row'
    // justifyContent: 'center'
  },
  type: {
    flex: 1,
    textAlign: 'center',
    fontSize: 23,
    color: '#666',
    fontWeight: '600'
  },
  typeActive: {
    color: '#3dc6b6'
  },
  separate: {
    color: '#666'
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 100,
    alignItems: 'center'
    // justifyContent: 'center'
    // backgroundColor: '#ccc'
  },
  footerText: {
    color: '#ccc',
    fontSize: 18
  }
})
