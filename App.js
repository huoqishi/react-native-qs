import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import {StackNavigator} from 'react-navigation'
import SignInScreen from './components/SignIn'
import TabScreen from './components/TabBar'

const StackRouter = StackNavigator({
  TabBar:{
    screen: TabScreen,
    navigationOptions: {
      header: null
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
      <StackRouter />
    )
  }
}
const styles = StyleSheet.create({
  box: {
    // position: {

  }
})
