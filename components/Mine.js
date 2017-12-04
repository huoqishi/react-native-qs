import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
export default class Mine extends Component {
  render () {
    return (
      <View style={[styles.container]}>
        <View style={styles.user}>
          <Image style={styles.avatar} source={require('../assets/images/avatar.png')}/>
          <View style={styles.info}>
            <Text style={styles.nickname}>昵称: 火骑士空空</Text>
            <Text style={styles.usernum}>社区号: huoqishikong</Text>
          </View>
          <View style={styles.userRight}>
            <Image style={styles.qrcode} source={require('../assets/images/avatar.png')}/>
          </View>
        </View>
        <View style={[styles.item]}>
          <Icon
            style={styles.itemIcon}
            name='money' size={25} color='#6bb0ec' />
          <Text style={styles.itemText}>钱包</Text>
        </View>
        <View style={[styles.item]}>
          <Icon
            style={styles.itemIcon}
            name='users' size={25} color='#6bb0ec' />
          <Text style={styles.itemText}>钱包</Text>
        </View>
        <View style={[styles.item]}>
          <Icon
            style={styles.itemIcon}
            name='ge' size={25} color='#6bb0ec' />
          <Text style={styles.itemText}>钱包</Text>
        </View>
        <View style={[styles.item]}>
          <Icon
            style={styles.itemIcon}
            name='wordpress' size={25} color='#6bb0ec' />
          <Text style={styles.itemText}>钱包</Text>
        </View>
        <View style={[styles.item]}>
          <Icon
            style={styles.itemIcon}
            name='weixin' size={25} color='#6bb0ec' />
          <Text style={styles.itemText}>钱包</Text>
        </View>
        <View></View>
        <View></View>
        <View></View>
      </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    backgroundColor: '#fff'
  },
  itemIcon: {
    marginLeft: 24,
    marginRight: 16,
    width: 25,
    height: 25
  },
  itemText: {
    fontSize: 18
  },
  user: {
    marginTop: 32,
    // marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#fff'
  },
  nickname: {
    fontSize: 20,
    color: '#000'
  },
  usernum: {
    marginTop: 8,
    fontSize: 18,
    color: '#666'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  info: {
    marginLeft: 24
  },
  userRight: {
    flex: 1,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  qrcode: {
    width: 40,
    height: 40
  }
})
