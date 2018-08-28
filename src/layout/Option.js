import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native'
import {Button} from 'native-base'
import User_option from '../components/User_option'
import {createStackNavigator} from 'react-navigation'
import Signin from './Signin'

class Option extends React.Component{

    static navigationOption = {
        title:'การตั้งค่า',
        style:StyleSheet.create({
            navi:{
                backgroundColor:'white',
                justifyContent:'center',
                height:50,
                paddingLeft:10,
                borderBottomColor:'#f5f5f5',
                borderBottomWidth:1
            },
            navi_text:{                
                fontSize:20
            }

        })
    }
    constructor(props){
        super(props)

        this.state = {
            isLoggin:false
        }
    }


    render(){
        return(
            <ScrollView style={{paddingHorizontal:10}}>
                {(this.state.isLoggin)? <User_option style={{backgroundColor:'white'}}/>:
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}><Button style={{backgroundColor:'#27ae60',padding:10}}><Text style={{color:'white'}}>เข้าสู่ระบบ | สมัครสมาชิก</Text></Button></View>
            }           
                
            </ScrollView>
        )
    }
}

export default OptionStack = createStackNavigator(
    {
        Option:{
            screen:Option,            
        },
        Signin:{
            screen:Signin,
        }
    },
    {
        
        navigationOptions:{
            header:<View style={Option.navigationOption.style.navi} ><Text style={Option.navigationOption.style.navi_text}>{Option.navigationOption.title}</Text></View>,
            headerBackTitle:true
        }
    }
)
