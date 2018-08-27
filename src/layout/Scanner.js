import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import { BarCodeScanner, Permissions } from 'expo'

export default class Scanner extends React.Component{
    state = {
        hasCameraPermission:null,
    }

    async componentDidMount(){
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission:status === 'granted'})
        BarCodeScanner.pausePreview()
    }

    _handleBarCodeRead = ({type, data}) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!. it's was easy`)
    }

    render(){
        const { hasCameraPermission } = this.state
        if(hasCameraPermission === null){
            return <View />
        }else if(hasCameraPermission === false){
            return <Text >Camera permission is deniey</Text>
        }

        return(
            <View style={{flex:1}} >
                <BarCodeScanner style={{flex:1}}
                    onBarCodeRead={this._handleBarCodeRead} >

                    <View style={{flex:1}}><Text>This is camera</Text></View>
                </BarCodeScanner>
            </View>
        )
    }

}