import React, {Component} from 'react';
import {View, Text,  TextInput, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
export default class Login extends Component {
  constructor(){
    super();
    this.state = {
        username:'',
        pwd:'',
        isloading:false
    }
  }
  //用户名
  userhandle = (text)=>{
    this.setState({username:text})
  }
  //密码
  pwdhandle = (text)=>{
      this.setState({pwd:text})
  }
  //登录时判断
  login = ()=>{
    this.setState({isloading:true})
    myFetch.post('/login',{
        username:this.state.username,
        pwd:this.state.pwd}
    ).then(res=>{
        AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
                this.setState({isloading:false})
                Actions.homePage();
            })
    })
  } 
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <TextInput placeholder="搜索" />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <TextInput placeholder="搜索" />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={Actions.pop}>
                <Text>登录</Text>
            </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View><Text>登录ing</Text></View>
            :null
        }
      </View>
    );
  }
}