/**
 * 详情组件
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  TextInput,
  Text,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Btn from './Btn.js'

export default class Search extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content'/>
        <Btn style={styles.qEditBtn}><Icon style={styles.qEditIcon} name="edit"/></Btn>
        <View style={styles.qBox}>
          <Text style={styles.qTitle}>标题标题标题标题标题题标题标题题标题标题?</Text>
          <Text style={styles.qContent}>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</Text>
          <View style={styles.qInfo}>
            <Text style={[styles.qSup, styles.qTmp]}>189人点赞</Text>
            <Text style={[styles.qCom, styles.qTmp]}>19 条评论</Text>
            <View style={styles.qOpt}><Btn style={styles.qBingo} title="+点赞"/></View>
          </View>
        </View>
        <View style={styles.comBox}>
          <FlatList
            data={[{key: '1'}, {key: '2 '}, {key: '3'}, {key: 4}]}
            renderItem={() => (
              <View style={styles.comItem}>
                <View style={styles.comUser}>
                  <Image source={require('../assets/images/avatar.png')} style={styles.comAvatar}/>
                  <Text style={styles.comName}>火骑士空空</Text></View>
                <View style={styles.comContext}>
                  <Text numberOfLines={3} style={styles.comInner}>评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容评论内容，评论内容</Text>
                </View>
                <View style={styles.comInfo}>
                  <Text style={styles.comDate}>2017-03-12</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  qEditBtn: {
    position: 'absolute',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    zIndex: 100,
    bottom: 100,
    right: 30,
    shadowColor: '#000',
    // shadowOffset: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4
  },
  qEditIcon: {
    fontSize: 24
  },
  qBox: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff'
  },
  qTitle: {
    fontSize: 20
  },
  qContent: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 15,
    lineHeight: 20,
    color: '#575757'
  },
  qInfo: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  qOpt: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  qBingo: {
    width: 200,
    height: 32,
    borderRadius: 4
  },
  qSup: {},
  qCom: {},
  qTmp: {
    marginRight: 16,
    fontSize: 13,
    color: '#222'
  },
  comBox: {
    flex: 1
    // backgroundColor: ''
  },
  comItem: {
    marginTop: 8,
    paddingTop: 24,
    paddingLeft: 16,
    paddingBottom: 16,
    backgroundColor: '#fff'
  },
  comUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  comAvatar: {
    width: 25,
    height: 25
  },
  comName: {
    flex: 1,
    marginLeft: 16
  },
  comContext: {
    marginTop: 16,
    // height: 80,
    paddingBottom: 8,
    overflow: 'hidden'
  },
  comInner: {
    fontSize: 14,
    color: '#333',
    lineHeight: 18
  },
  comInfo: {
  },
  comDate: {
    color: '#aaa',
    fontSize: 15
  }
})
