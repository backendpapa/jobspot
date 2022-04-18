import React from "react";
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native'
import { colors,fonts,sizes } from "../../../constant";
import email_success from '../../../assets/images/email_success.png'



function ForgotPasswordSuccess({navigation}){
    const forgot=forgotStyle
  
    return (
        <View style={forgot.container}>
            <Text style={forgot.forgot_text_1}>Successfully</Text>
            <Text style={forgot.forgot_text_2}>Your password has been updated, please change your password regularly to avoid this happening </Text>

            <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',height:'30%'}}>
                <Image style={{height:130}} resizeMode={'contain'} resizeMethod={'scale'} source={email_success} />
            </View>

          
            <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} activeOpacity={0.8} style={[forgot.button, { backgroundColor: colors.primary }]}>
                    <Text style={{ color: 'white', fontFamily: fonts.DmSans_Bold, fontSize: sizes.h14 }}>CONTINUE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} activeOpacity={0.8} style={[forgot.button, { backgroundColor: colors.tertiary }]}>
                    <Text style={{ color: 'white', fontFamily: fonts.DmSans_Bold, fontSize: sizes.h14 }}>BACK TO LOGIN</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}
export default ForgotPasswordSuccess;

const forgotStyle=StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingTop: '20%',
        paddingLeft: 25,
        paddingRight: 25
    },
    forgot_text_1: {
        fontFamily: fonts.DmSans_Bold,
        fontSize: sizes.h30,
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 15
    },
    forgot_text_2: {
        textAlign: 'center',
        fontSize: sizes.h12,
        fontFamily: fonts.DmSans_Regular
    },
    forgot_email_input: {
        height: 55,
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: sizes.h12,
        fontFamily: fonts.DmSans_Regular,
        color: colors.primary,
        paddingLeft: 20,
        paddingRight: 55
    },
    forgot_email_label: {
        fontSize: sizes.h12,
        fontFamily: fonts.DmSans_Bold,
        color: colors.primary,
        marginBottom: 5,
        marginTop: 5
    },
    button: {
        width: '100%',
        height: 55,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    }
})