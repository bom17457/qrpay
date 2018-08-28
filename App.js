import React from 'react';
import {Text,View,StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

import Option from './src/layout/Option'
import Feed from './src/layout/Feed'
import Nearby from './src/layout/Nearby'
import Scanner from './src/layout/Scanner'

import {createBottomTabNavigator} from 'react-navigation'

export default class App extends React.Component{
  render(){
    return(
      <View style={{flex:1,paddingTop:StatusBar.currentHeight}}>
        <BottomNavigator />
      </View>
    )
  }
}
const BottomNavigator = createBottomTabNavigator(
  {
    home:{screen:Feed},
    nearby:{screen:Nearby},
    scanner:{screen:Scanner},
    option:{screen:Option}    
  },{    
    navigationOptions:({navigation}) =>({
      tabBarIcon:({focused,tintColor}) =>{
        const {routeName} = navigation.state;
        let iconName;
        if(routeName === 'home'){
          iconName = `ios-globe${focused ?'':'-outline'}`;          
        }else if(routeName === 'nearby'){
          iconName = `ios-pin${focused ?'':'-outline'}`;
        }else if(routeName === 'option'){
          iconName = `ios-menu${focused ?'':'-outline'}`;
        }else if(routeName === 'scanner'){
          iconName = `ios-qr-scanner${focused ?'':'-outline'}`
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