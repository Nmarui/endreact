/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Router, Scene,Tabs} from "react-native-router-flux";

import {StyleSheet} from 'react-native';
import List from './yemian/List';
import Home from './yemian/Home';
import My from './yemian/My';

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Tabs
          key='tabbar'
          hideNavBar
          activeintColor="red"
          inactiveTintColor="blue"
          tabBarStyle={{backgroundColor:'#aaa'}}
        >
          <Scene key="分类"
             hideNavBar
              //  icon={
              //    ({focused})=<Icon size={30} color={focused ? 'red' : '#009898' } name={'list'} />
              //  }
            > 
              <Scene key="list" component={List}/>
          </Scene>
          <Scene key="首页"
            // hideNavBar
            //   icon={
            //     ({focused})=<Icon size={30} color={focused ? 'red' : '#009898' } name={'list'} />
            //   }
            > 
              <Scene key="home" component={Home}/>
          </Scene>
          <Scene key="个人中心"
            // hideNavBar
            //   icon={
            //     ({focused})=<Icon size={30} color={focused ? 'red' : '#009898' } name={'list'} />
            //   }
            > 
            <Scene key="my" component={My}/>
          </Scene>
        </Tabs>
       </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
