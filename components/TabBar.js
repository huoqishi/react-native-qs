import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import {TabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import HomeScreen from './Home.js'
// import SearchScreen from './Search.js'
// import FindScreen from './Find.js'
import MineScreen from './Mine.js'
// const HomeScreen = () => (<View style={styles.container}><Text>我是Home组件</Text></View>)
const SearchScreen = () => (<View style={styles.container}><Text>我是Search组件</Text></View>)
const FindScreen = () => (<View style={styles.container}><Text>我是Find组件</Text></View>)
// const MineScreen = () => (<View style={styles.container}><Text>我是Mine组件</Text></View>)
const optionsA = {
  Mine: {
    screen: MineScreen,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon
          style={{width: 25, height: 25, color: tintColor}}
          name='user' size={25} color='#ccc' />
      )
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon
          style={{width: 25, height: 25, color: tintColor}}
          name='home' size={25} color='#ccc' />
      )
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: '搜索',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon
          style={{width: 25, height: 25, color: tintColor}}
          name='search' size={25} color='#ccc' />
      )
    }
  },
  Find: {
    screen: FindScreen,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({focused, tintColor}) => (
        <Icon
          style={{width: 25, height: 25, color: tintColor}}
          name='compass' size={25} color='#ccc' />
      )
    }
  }
}
const optionsB = {
  // tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  // animationEnabled: true,
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#06c1ae',
    inactiveTintColor: '#979797',
    style: {
      backgroundColor: '#ffffff',
      height: 49
    },
    labelStyle: {
      fontSize: 14 // 文字大小
    }
  }

}
const TabBar = TabNavigator(optionsA, optionsB)
export default TabBar

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  }
})
