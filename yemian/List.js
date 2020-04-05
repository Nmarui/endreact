import React, { Component } from 'react';
import { View, Text, Image,StyleSheet, StatusBar,TextInput} from 'react-native';

export default class List extends Component{
    state = {
        isScrollingDown: false,
        lastRow: null,
      };
    
      static getDerivedStateFromProps(props, state) {
        if (props.currentRow !== state.lastRow) {
          return {
            isScrollingDown: props.currentRow > state.lastRow,
            lastRow: props.currentRow,
          };
        }
    
        // Return null to indicate no change to state.
        return null;
      }

    render(){
        return(
            <View>
                {/* <Button
                    title = "退出登录"
                    onPress = {() => this.props.navigation.navigate('Login')}
                    style={{
                        paddingLeft:50,
                        fontSize:25,
                        color:'white',
                        width:'30%',
                        marginLeft:'35%'
                }}/>         */}
                <StatusBar barStyle="dark-content" />
                    <View style={{
                    width:'100%',
                    backgroundColor:'white',
                    height:80,
                    }}>
                        <View style={{
                            width:'90%',
                            height:80,
                            backgroundColor:'#eeeeee',
                            marginLeft:10,
                            marginTop:20
                        }}>
                            <TextInput 
                                placeholder={'请输入商品名称'} 
                                style={{
                                    height:50,
                                    paddingLeft:30 ,
                                    fontSize:20,
                                    
                            }}
                            >            
                            </TextInput>
                            
                        </View>
                    </View>
                    <View style={{height:80,backgroundColor:'white',width:600}}> 
                        <Text style={{fontSize:25,marginLeft:35,lineHeight:80}}>
                            <Text style={{color:'red'}}>
                            &nbsp;&nbsp;综合&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Text> 
                            销量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            新品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                            价格&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            信用
                        </Text>
                    </View>
                    <View style={{width:'80%',height:300,flexDirection:'row',marginTop:20}}>
                        <View style={{
                            width:"48%",
                            height:280,
                            backgroundColor:'white',
                            marginLeft:'10%'
                        }}>
                            <Image
                            source={require('../img/lie1.png')}
                            style={{marginLeft:25,marginTop:10}}
                            />
                            <Text>
                            &nbsp;&nbsp;Oishi/上好佳玉米卷20包膨化休
                            </Text>
                            <Text>
                            &nbsp;&nbsp;闲食品Oishi/上好佳
                            </Text>
                            <Text style={{marginTop:10,color:'red',fontSize:20}}>&nbsp;&nbsp;36.00</Text>
                        </View>
                        <View style={{
                            width:"48%",
                            height:280,
                            float:'left',
                            backgroundColor:'white',
                            marginLeft:'10%'
                        }}>
                            <Image
                            source={require('../img/lie2.png')}
                            style={{marginLeft:10,marginTop:10}}
                            />
                            <Text>
                            &nbsp;&nbsp;Oishi/上好佳玉米卷20包膨化休
                            </Text>
                            <Text>
                            &nbsp;&nbsp;闲食品Oishi/上好佳
                            </Text>
                            <Text style={{marginTop:10,color:'red',fontSize:20}}>&nbsp;&nbsp;36.00</Text>
                        </View>      
                    </View>
                    <View style={{width:'80%',height:300,flexDirection:'row',marginTop:20}}>
                        <View style={{
                            width:"48%",
                            height:280,
                            backgroundColor:'white',
                            marginLeft:'10%'
                        }}>
                            <Image
                            source={require('../img/lie1.png')}
                            style={{marginLeft:25,marginTop:10}}
                            />
                            <Text>
                            &nbsp;&nbsp;Oishi/上好佳玉米卷20包膨化休
                            </Text>
                            <Text>
                            &nbsp;&nbsp;闲食品Oishi/上好佳
                            </Text>
                            <Text style={{marginTop:10,color:'red',fontSize:20}}>&nbsp;&nbsp;36.00</Text>
                        </View>
                        <View style={{
                            width:"48%",
                            height:280,
                            float:'left',
                            backgroundColor:'white',
                            marginLeft:'10%'
                        }}>
                            <Image
                            source={require('../img/lie2.png')}
                            style={{marginLeft:10,marginTop:10}}
                            />
                            <Text>
                            &nbsp;&nbsp;Oishi/上好佳玉米卷20包膨化休
                            </Text>
                            <Text>
                            &nbsp;&nbsp;闲食品Oishi/上好佳
                            </Text>
                            <Text style={{marginTop:10,color:'red',fontSize:20}}>&nbsp;&nbsp;36.00</Text>
                        </View>      
                    </View>
                    <View style={{width:'80%',height:300,flexDirection:'row',marginTop:20}}>
                        <View style={{
                            width:"48%",
                            height:280,
                            backgroundColor:'white',
                            marginLeft:'10%'
                        }}>
                            <Image
                            source={require('../img/lie1.png')}
                            style={{marginLeft:25,marginTop:10}}
                            />
                            <Text>
                            &nbsp;&nbsp;Oishi/上好佳玉米卷20包膨化休
                            </Text>
                            <Text>
                            &nbsp;&nbsp;闲食品Oishi/上好佳
                            </Text>
                            <Text style={{marginTop:10,color:'red',fontSize:20}}>&nbsp;&nbsp;36.00</Text>
                        </View>
                        <View style={{
                            width:"48%",
                            height:280,
                            float:'left',
                            backgroundColor:'white',
                            marginLeft:'10%'
                        }}>
                            <Image
                            source={require('../img/lie2.png')}
                            style={{marginLeft:10,marginTop:10}}
                            />
                            <Text>
                            &nbsp;&nbsp;Oishi/上好佳玉米卷20包膨化休
                            </Text>
                            <Text>
                            &nbsp;&nbsp;闲食品Oishi/上好佳
                            </Text>
                            <Text style={{marginTop:10,color:'red',fontSize:20}}>&nbsp;&nbsp;36.00</Text>
                        </View>      
                    </View>                    
                   
            </View>
        )
    }
}
const styles = StyleSheet.create({
  
});