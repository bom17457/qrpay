import React from 'react';
import {Text,View,StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Scanner from './src/layout/Scanner'
import Signup from './src/layout/Signup'
import Signin from './src/layout/Signin'

import {createBottomTabNavigator} from 'react-navigation'

export default class App extends React.Component{
  render(){
    return(
      <View style={{flex:1,paddingTop:StatusBar.currentHeight}}>
        <Signin />
      </View>
    )
  }
}
const BottomNavigator = createBottomTabNavigator(
  {
    signup:{screen:Signup},
    
  },{
    initialRouteName:'signup',
    navigationOptions:({navigation}) =>({
      tabBarIcon:({focused,tintColor}) =>{
        const {routeName} = navigation.state;
        let iconName;
        if(routeName === 'signup'){
          iconName = `ios-home${focused ?'':'-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions:{
      activeTintColor:'#27ae60',
      inactiveTintColor:'gray',
      showLabel:false
    }
  }
)