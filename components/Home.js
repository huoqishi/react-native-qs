import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  Dimensions
} from 'react-native'
import Carousel from './Carousel'
const {width, height} = Dimensions.get('window')
export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      data: [
        {
          key: 'dfd',
          id: 'xx'
        },
        {
          key: 'dd',
          id: 1,
          src: '../assets/images/timg-pai.jpeg'},
        {
          key: 'ff',
          id: 2,
          src: '../assets/images/timg-shala.jpeg'},
        {
          key: 'aa',
          id: 3,
          src: '../assets/images/timg-shala.jpeg'}]
    }
  }
  render () {
    return (
      <View style={[styles.container]}>
        {/* <Image style={styles.img} source={{uri: 'http://m.paixin.com/static/img/rectangle-19@2x.f2d3663.jpg'}} /> */}
        <FlatList
          // data={[{id: 1}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]}
          data={this.state.data}
          renderItem={({index, item}) => {
            // console.log(row, item)
            if (index === 0) {
              return <Carousel
              // interval={1000}
                data={this.state.data}
                renderItem={this._renderItem}
              />
            }
            return (
              <View
              //  keyExtractor={(item, index) => item.id} style={styles.qsList}
              >
                <View style={styles.qsItem}>
                  <View style={styles.qsUser}><Image style={styles.qsAvatar} source={require('../assets/images/avatar.png')} />
                    <Text style={styles.qsUserName}>火骑士空空{item.id}</Text></View>
                  {/* <Image style={styles.qsImg} source={require('../assets/images/timg-pai.jpeg')} /> */}
                  <Image style={styles.qsImg} source={require('../assets/images/test2.jpg')} />
                  <Text style={styles.qsSummary} >我不会被打的, 对吧？[图片]</Text>
                  <View style={styles.qsData}><Text style={[styles.qsBingo, styles.qsDataTxt]}>699 赞同</Text><Text style={[styles.qsCom, styles.qsDataTxt]}>98 评论</Text><Text style={[styles.qsTime, styles.qsDataTxt]}>20 小时前</Text></View>
                </View>
              </View>
            )
          }}
        />
      </View>
    )
  }
  _renderItem (row, index) {
    // alert(row)
    return (
      <View key={Math.random()}
        style={[styles.item, {backgroundColor: 'blue'}]}
      >
        <Image style={styles.img} source={require('../assets/images/timg-pai.jpeg')} />
        {/* <Image style={styles.img} source={{uri: 'http://m.paixin.com/static/img/rectangle-19@2x.f2d3663.jpg'}} /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    flex: 1,
    width: width / 2,
    justifyContent: 'center',
    height: 200
    // borderRightWidth: 10
    // flexDirection: 'row'
  },
  img: {
    flex: 1,
    width: width,
    height: 100
    // height: 100
  },
  qsCom: {

  },
  qsTime: {

  },
  qsBingo: {

  },
  qsDataTxt: {
    color: '#999',
    fontSize: 16,
    marginRight: 8
  },
  qsData: {
    marginTop: 8,
    flexDirection: 'row'
    // color: '#ccc'
  },
  qsSummary: {
    fontSize: 16
  },
  qsUser: {
    flexDirection: 'row',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  qsAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12
  },
  qsUserName: {
    paddingLeft: 16,
    color: '#a7a7a7',
    fontSize: 14
  },
  qsImg: {
    marginBottom: 8,
    marginTop: 16,
    width: '100%',
    height: 150,
    borderRadius: 8
    // resizeMode: 'stretch'
  },
  qsItem: {
    marginTop: 8,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  qsList: {

  }
})

function getColor () {
  // 定义字符串变量colorValue存放可以构成十六进制颜色值的值
  var colorValue = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
  // 以","为分隔符，将colorValue字符串分割为字符数组["0","1",...,"f"]
  var colorArray = colorValue.split(',')
  var color = '#'// 定义一个存放十六进制颜色值的字符串变量，先将#存放进去
  // 使用for循环语句生成剩余的六位十六进制值
  for (var i = 0; i < 6; i++) {
    // colorArray[Math.floor(Math.random()*16)]随机取出
    // 由16个元素组成的colorArray的某一个值，然后将其加在color中，
    // 字符串相加后，得出的仍是字符串
    color += colorArray[Math.floor(Math.random() * 16)]
  }
  return color
}
