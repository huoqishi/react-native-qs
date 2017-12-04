import React, {Component} from 'react'
import {
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native'
import {StackNavigator} from 'react-navigation'
import SignInScreen from './components/SignIn'
import TabScreen from './components/TabBar'
import DetailScreen from './components/Detail'

const StackRouter = StackNavigator({
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      headerTitle: '详情'
    }
  },
  TabBar: {
    screen: TabScreen,
    navigationOptions: {
      // header: null
    }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerTitle: '登陆'
    }
  }
})

// export default StackRouter
export default class App extends Component {
  render () {
    return (
      // <View>
      //   <View style={styles.box} />
      //   <Text>oddk</Text>
      //   <Text>oddk</Text>
      //   <Text>oddk</Text>
      //   <Text>oddk</Text>

      // </View>
      // <View>
      //   <StatusBar
      //     backgroundColor="blue"
      //     barStyle="light-content"
      //   />
      // </View>
      <StackRouter />

    )
  }
}
const styles = StyleSheet.create({
  box: {
    // position: {

  }
})
