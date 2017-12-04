import React, {Component} from 'react'
import {
  StyleSheet,
  StatusBar,
  View,
  TextInput,
  Text,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Search extends Component {
  render () {
    return (
      <View>
        <StatusBar
          barStyle='light-content'
        />
        <View style={styles.search}>
          <View style={styles.searchBox}>
            <Icon name='search' size={22} color='#fff' style={styles.sIcon} />
            <TextInput
              placeholder='搜索'
              underlineColorAndroid="transparent" style={styles.ipt}/>
          </View>
        </View>
        <View>
          <Text>搜索记录</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sIcon: {
    width: 25,
    height: 25
  },
  search: {
    alignItems: 'center',
    paddingTop: 24,
    height: 68,
    backgroundColor: '#191c1e'
  },
  searchBox: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  ipt: {
    padding: 0,
    width: '100%',
    height: 32,
    color: '#fff',
    // backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#fff'
  },
  sHistory: {

  }
})
