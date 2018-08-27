import React from 'react'
import { 
    View,
    Text,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} 
from "react-native"
import {Hoshi} from 'react-native-textinput-effects'
import {styles} from '../style/styles'
import {
    Button
} from 'native-base'

export default class Signin extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(            
            <KeyboardAvoidingView style={{flex:1,flexDirection:"column",justifyContent:'center',alignItems:'center',paddingHorizontal:50}} behavior="padding" enabled>                                    
                        <Text style={{fontSize:25}}>เข้าสู่ระบบ</Text>
                        <Hoshi style={styles.textInput} label={'อีเมล์'} borderColor={'#27ae60'} />
                        <Hoshi secureTextEntry={true} style={styles.textInput} label={'รหัสผ่าน'} borderColor={'#27ae60'} />
                        <Button full style={{marginVertical:5,backgroundColor:'#27ae60'}} onPress={()=>{alert("press button")}}>
                            <Text style={{color:'white'}}>เข้าสู่ระบบ</Text>
                        </Button>
                        <View style={{flexDirection:"row",marginTop:15}} >
                            <Text>ยังไม่เคยลงทะเบียน</Text>
                            <TouchableWithoutFeedback onPress={()=>{alert("press button")}}>
                                <View><Text style={{fontWeight:"bold"}}>ลงทะเบียน?</Text></View>
                            </TouchableWithoutFeedback>
                        </View>
            </KeyboardAvoidingView>
            
        )
    }
}