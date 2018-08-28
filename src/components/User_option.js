import React from 'react'
import {
    TouchableWithoutFeedback,
    View,
    Button,
    Text,
    Image

} from 'react-native'

export default class User_opetion extends React.Component{
    
    constructor(props){
        super(props)
    }

    
    render(){
        const  user_name  = this.props.user_name || "Akaporn Katip"
        return(
            <View style={{flexDirection:'row', justifyContent:'space-between',paddingVertical:4} }>
                <View style={{flex:1}}>
                    <Image source={
                        {uri:'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/29570519_2118566961733487_4417110192755903163_n.jpg?_nc_cat=0&oh=324f0a72a6b14f5cdabd8fcfaff2c66e&oe=5BF33267'}}
                        style={{width:78,height:78}}
                    />
                </View>
                <View style={{flex:2,justifyContent:'center'}}>
                    <Text style={{fontSize:25}}>{user_name}</Text>
                    <Text style={{fontSize:12, color:'#83868A'}}>ข้อมูลส่วนตัว บัญชีธนาคาร บัตรเครดิต</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignContent:'flex-end',alignItems:'flex-end'}}>
                    <Text style={{fontSize:13}}>></Text>
                </View>
            </View>
        )
    }
}