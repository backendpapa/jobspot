import React from "react";

import {View,Text, StatusBar,StyleSheet} from 'react-native'



function SplashScreen(){
    const splash=SplashStyle
    return (
        <View  style={splash.splash_container}>
            <StatusBar backgroundColor={'#f9f9f9'} barStyle={'dark-content'} />
            <Text>Hello splash</Text>
        </View>
    )
}

export default SplashScreen


const SplashStyle=StyleSheet.create({
    splash_container:{
        display:'flex',
        paddingTop:20,
        paddingLeft:15,
        paddingRight:15,
        backgroundColor:'#f9f9f9',
        height:'100%'

    }
})