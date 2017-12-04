import React, {Component} from 'react'
import {
StyleSheet,
View,
Text,
Animated,
Dimensions
} from 'react-native'
const {width, height} = Dimensions.get('window')
export default class Carousel extends Component {
  constructor (...arg) {
    super(...arg)
    this.state = {
      intervalId: null,
      nowPage: 1,
      left: new Animated.Value(0)
    }
  }
  componentDidMount () {
    this.state.intervalId = setInterval(() => {
      this.nextPage()
    }, 2000)
  }
  componentUnmount () {
    clearInterval(this.state.intervalId)
  }
  render () {
    return (
      <View style={[styles.container]}>
        {this.CarouselView()}
      </View>
    )
  }
  // 其实是两个轮播slider之间滚动
  CarouselView () {
    const {data, renderItem} = this.props
    if (!(data instanceof Array)) {
      throw new Error('need provide data props(type Array)')
    }
    if (typeof renderItem !== 'function') {
      throw new Error('need provide renderItem props(type function and return react element)')
    }
    return (
      <Animated.View style={[styles.itemBox, {width: width * data.length, left: this.state.left}]}>
        {data.map((item, index) => renderItem(item, index))}
      </Animated.View>
    )
  }
  nextPage () {
    const {nowPage} = this.state
    const {data} = this.props
    const left = (nowPage - 1) * -width
    if (this.state.nowPage >= data.length) {
      this.state.nowPage = 1
    } else {
      this.state.nowPage += 1
    }
    this.setState({}, () => {
      this.updateAnimate('left', left)
    })
  }
  updateAnimate (key, value) {
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state[key],                      // 动画中的变量值
      {
        toValue: value                             // 新值
      }
    ).start()
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
  },
  itemBox: {
    flexDirection: 'row'
  },
  item: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    backgroundColor: 'red'
  }
})
