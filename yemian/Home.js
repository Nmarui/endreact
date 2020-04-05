import React, { Component } from 'react';
import { View, StyleSheet,TextInput,Image,Button} from 'react-native';

export default class Home extends Component{
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
                    backgroundColor:'#f23030',
                    height:50,
                    marginLeft:30,
                    width:'90%',
                    marginTop:20
                }}>
                    <TextInput 
                        placeholder={'请输入您要搜索的关键字'} 
                        style={{                            
                            paddingLeft:30 ,
                            fontSize:20,
                            color:'white',
                            width:'90%'
                        }}>
                                        
                    </TextInput>
                    <Image source={require('../img/gou.png')} style={{marginRight:0}}/>
                </View>
                <View style={{
                    width:'100%',
                    height:100,
                    backgroundColor:'white'
                }}>
                    <Image source={require('../img/one.png')}/>                    
                </View>
                <View style={{
                    width:'100%',
                    height:100,
                    backgroundColor:'white',
                    marginTop:10                
                }}>
                    <Image source={require('../img/two.png')}/>
                </View>
                <View style={{
                    width:'100%',
                    height:100,
                    backgroundColor:'white',
                    marginTop:10
                }}>
                    <Image source={require('../img/three.png')}/>
                </View>
                <View style={{
                    width:'100%',
                    height:100,
                    backgroundColor:'white',
                    marginTop:10
                }}>
                    <Image source={require('../img/four.png')}/>
                </View>
                <View style={{
                    marginLeft:180,
                    marginTop:5,
                    backgroundColor:'#f23030',
                    width: 200,
                    height:50,
                }}>
                    <Button title={"发布需求"}  style={{
                        paddingLeft:50,
                        fontSize:25,
                        color:'white'
                    }}/>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
  
});