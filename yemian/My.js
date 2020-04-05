import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Button } from 'react-native';

export default class My extends Component{
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
                <View style={{
                    width:'100%',
                    backgroundColor:'#dd2200',
                    height:200,

                }}>
                    <View style={styles.circle}>
                        <Text style={{fontSize:19,textAlign:'center',color:'#fff'}}>
                            {/* <Camera
                                ref={(cam) => {
                                    this.camera = cam;
                                }}
                                captureTarget={Camera.constants.CaptureTarget.temp}
                                mirrorImage={false}
                                captureQuality="medium"
                                style={styles.preview}
                                aspect={Camera.constants.Aspect.fill}
                            >
                                <Image 
                                    source={require('../img/tou.png')}
                                    style={styles.capture} onPress={this.takePicture.bind(this)}
                                    />
                                <Image style={{width: 100, height: 100, marginBottom: 20}} source={{uri: this.state.imagePath}}></Image>
                            </Camera> */}
                        </Text>
                    </View>

                    <Text style={{
                        marginLeft:'40%',marginTop:'60%',color:'white',fontSize:25
                    }}>
                        BINNU DHILLON
                    </Text>
                </View>
                <View style={{backgroundColor:'white',width:'100%',height:300}}>
                    <Text><Image source={require('../img/biao.png')}/> 
                    <Text style={{fontSize:20}}>&nbsp;我的个人中心</Text></Text>
                    <View style={{width:'100%',height:60,backgroundColor:'white'}}>
                        <View style={{width:'100%',float:'left',height:'100%'}}>
                            <Image source={require('../img/shang.png')} style={{marginLeft:50}}/>
                        </View>
                        {/* <View style={{width:'30%',float:'left',height:'100%',position:'relative'}}>
                            <Image source={require('../img/02.png')} style={{marginLeft:50}}/>
                        </View>
                        <View style={{width:'30%',float:'left',height:'100%'}}>
                            <Image source={require('../img/03.png')} style={{marginLeft:50}}/>
                        </View> */}
                    </View>
                    <Text style={{fontSize:20,marginLeft:45}}>
                        &nbsp;账户管理
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收货地址
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的信息
                    </Text>
                    <View style={{width:'100%',height:60,backgroundColor:'white'}}>
                        <View style={{width:'100%',float:'left',height:'100%'}}>
                            <Image source={require('../img/shang1.png')} style={{marginLeft:50}}/>
                        </View>
                        {/* <View style={{width:'30%',float:'left',height:'100%'}}>
                            <Image source={require('../img/05.png')} style={{marginLeft:50}}/>
                        </View>
                        <View style={{width:'30%',float:'left',height:'100%'}}>
                            <Image source={require('../img/06.png')} style={{marginLeft:50}}/>
                        </View> */}
                    </View>
                    <Text style={{fontSize:20,marginLeft:45}}>
                        &nbsp;我的订单
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的二维码
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的积分
                    </Text>
                    <Image  source={require('../img/xia.png')} style={{marginLeft:55}}/>
                    <Text style={{fontSize:20,marginLeft:45}}>
                        &nbsp;我的收藏                        
                    </Text>                            
                </View>
                <View style={{backgroundColor:'white',width:'100%',height:300,marginTop:10}}>
                    <Text><Image source={require('../img/biao.png')}/> 
                    <Text style={{fontSize:20}}>&nbsp;E族活动</Text></Text>
                    <View style={{width:'100%',height:60,backgroundColor:'white'}}>
                        <View style={{width:'100%',float:'left',height:'100%'}}>
                            <Image source={require('../img/zhong.png')} style={{marginLeft:50}}/>
                        </View>
                        {/* <View style={{width:'30%',float:'left',height:'100%'}}>
                            <Image source={require('../img/12.png')} style={{marginLeft:50}}/>
                        </View>
                        <View style={{width:'30%',float:'left',height:'100%'}}>
                            <Image source={require('../img/13.png')} style={{marginLeft:50}}/>
                        </View> */}
                    </View>
                    <Text style={{fontSize:20,marginLeft:45}}>
                        居家维修保养
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出行接送
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的受赠人
                    </Text>
                    <View style={{width:'100%',height:60,backgroundColor:'white'}}>
                        <View style={{width:'100%',float:'left',height:'100%'}}>
                            <Image source={require('../img/zhong.png')} style={{marginLeft:50}}/>
                        </View>
                         {/* <View style={{width:'30%',float:'left',height:'100%'}}>
                            <Image source={require('../img/15.png')} style={{marginLeft:50}}/>
                        </View>
                        <View style={{width:'30%',float:'left',height:'100%'}}>
                            <Image source={require('../img/15.png')} style={{marginLeft:50}}/>
                            <Scene key="cno" component={Cno}>
                                <Image source={require('../img/01.png')} style={{marginLeft:50}}/>
                            </Scene>
                            
                        </View>  */}
                    </View>
                    <Text style={{fontSize:20,marginLeft:45}}>
                        我的住宿优惠
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的活动
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的发布
                    </Text>
                    <Button title={"点击查看我的发布"}  style={{
                        paddingLeft:50,
                        fontSize:25,
                        color:'white',
                        width:'30%',
                        marginLeft:'35%'
                    }}/>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  
});