import { Icon, CheckBox } from "@rneui/base";
import React from "react";

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { colors, fonts, sizes } from "../../../constant";
import { DmSans_Bold, DmSans_Regular } from "../../../constant/fonts";
import google from '../../../assets/images/google.png'


function Login({navigation}) {
    const [showPassword, setShowPassword] = React.useState(false)
    const [checked, setChecked] = React.useState(false)

    const login = loginStyle
    return (
        <View style={login.container}>
            <View style={{ marginBottom: '20%' }}>
                <Text style={login.login_text_1}>Welcome Back</Text>
                <Text style={login.login_text_2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
            </View>
            <View style={{ width: '100%' }}>
                <Text style={login.login_email_label}>Email</Text>
                <TextInput keyboardType="email-address" style={login.login_email_input} placeholder="Enter valid email address" placeholderTextColor={'#c0c0c0'} />

                <Text style={login.login_email_label}>Password</Text>
                <View style={{ position: 'relative' }}>
                    <TextInput style={login.login_email_input} placeholder="Enter valid password" secureTextEntry={showPassword == false ? true : false} placeholderTextColor={'#c0c0c0'} />
                    <View style={{ position: 'absolute', height: '100%', right: 20, display: "flex", justifyContent: 'center' }}>
                        <Icon size={27} underlayColor={'white'} activeOpacity={1} onPress={() => { setShowPassword(!showPassword) }} name={showPassword == false ? "visibility-off" : "visibility"} type="material" />
                    </View>
                </View>


            </View>
            <View style={{
                width: '100%', marginTop: 15, display: 'flex', flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox checked={checked} checkedColor={colors.primary} uncheckedColor={colors.nega} onPress={() => { setChecked(!checked) }} checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o' size={25} containerStyle={{ width: 25, margin: 0, padding: 0, backgroundColor: '#f9f9f9' }} wrapperStyle={{ margin: 0, padding: 0, marginLeft: -9, }} />
                    <Text style={[login.checker_title, { color: checked == false ? colors.nega : colors.primary }]}>Remember me</Text>
                </View>
                <Text style={login.checker_title_2} onPress={()=>{navigation.navigate('ForgotPassword')}}>Forgot password?</Text>

            </View>

            <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40 }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}} activeOpacity={0.8} style={[login.button, { backgroundColor: colors.primary }]}>
                    <Text style={{ color: 'white', fontFamily: fonts.DmSans_Bold, fontSize: sizes.h14 }}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} style={[login.button, { backgroundColor: colors.tertiary, flexDirection: 'row' }]}>
                    <Image style={{ height: 30 }} resizeMode={'contain'} resizeMethod={"scale"} source={google} />
                    <Text style={{ color: colors.primary, fontFamily: fonts.DmSans_Bold, fontSize: sizes.h14, marginLeft: -5 }}> SIGN IN WITH GOOGLE</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ fontFamily: DmSans_Regular, fontSize: sizes.h12 }}>You dont have an account yet? <Text onPress={()=>{navigation.navigate('Signup')}} style={{ color: colors.ultra }}>Sign up</Text></Text>
            </View>

        </View>
    )
}

export default Login


const loginStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingTop: '20%',
        paddingLeft: 25,
        paddingRight: 25
    },
    login_text_1: {
        fontFamily: fonts.DmSans_Bold,
        fontSize: sizes.h30,
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 15
    },
    login_text_2: {
        textAlign: 'center',
        fontSize: sizes.h12,
        fontFamily: fonts.DmSans_Regular
    },
    login_email_input: {
        height: 55,
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: sizes.h12,
        fontFamily: DmSans_Regular,
        color: colors.primary,
        paddingLeft: 20,
        paddingRight: 55
    },
    login_email_label: {
        fontSize: sizes.h12,
        fontFamily: DmSans_Bold,
        color: colors.primary,
        marginBottom: 5,
        marginTop: 5
    },
    checker_title: {
        fontSize: sizes.h12,
        fontFamily: DmSans_Regular,

        marginLeft: -10
    },
    checker_title_2: {
        fontSize: sizes.h12,
        fontFamily: DmSans_Regular,
        color: colors.primary,
        textAlign: "right"
    },
    button: {
        width: '80%',
        height: 55,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
})