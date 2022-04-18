import React from "react";

import {View,Text, StatusBar,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {fonts,sizes,colors} from '../../../constant/index'
import splash_1 from "../../../assets/images/splash_1.png"
import { Icon } from "@rneui/base";






function SplashScreen({navigation}){


    const splash=SplashStyle
    return (
        <View  style={splash.splash_container}>
            <StatusBar backgroundColor={colors.background_2} barStyle={'dark-content'} />
            <Text style={splash.splash_text_1}>Jobspot</Text>
            <View style={{flex:2}} >
                <Image style={{width:'100%',height:'100%'}} source={splash_1} resizeMode={'contain'} resizeMethod={'scale'}  />
            </View>
            <View style={{flex:1}}>
                <Text style={splash.splash_text_2}>Find Your <Text style={splash.splash_text_color}>Dream Job</Text> Here!</Text>
                <Text style={splash.splash_text_desc}>Explore all the most exciting job roles based on your interest and study major.</Text>
                <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} activeOpacity={0.8} style={splash.splash_button} >
                        <Icon size={40} color={"white"} name="east" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SplashScreen


const SplashStyle=StyleSheet.create({
    splash_container:{
        display:'flex',
        paddingTop:20,
        paddingLeft:25,
        paddingRight:25,
        backgroundColor:colors.background,
        height:'100%'
    },
    splash_text_1:{
        textAlign:'right',
        fontFamily:fonts.DmSans_Bold,
        fontSize:sizes.h18,
        color:colors.secondary
        
    },
    splash_text_2:{
        fontSize:sizes.h40,
        fontFamily:fonts.DmSans_Bold,
        marginRight:20,
        color:colors.secondary,
        lineHeight:40
    },
    splash_text_color:{
        color:colors.ultra
    },
    splash_text_desc:{
        fontSize:sizes.h14,
        color:colors.primary,
        fontFamily:fonts.DmSans_Regular
    },
    splash_button:{
        backgroundColor:colors.primary,
        height:70,
        width:70,
        borderRadius:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:0,
        
    }
})