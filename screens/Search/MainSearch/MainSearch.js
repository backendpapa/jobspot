import { Icon } from "@rneui/base";
import React from "react";
import { View, Text, StyleSheet, TextInput,ImageBackground, Image } from 'react-native'
import { colors, fonts, sizes } from "../../../constant";
import mainbg from '../../../assets/images/mainbg.png'



function MainSearch() {
    const main = mainStyle
    return (
        <View style={main.container}>
            <View style={{position:'absolute',width:'100%',height:250,overflow:'hidden',borderBottomRightRadius:30,borderBottomLeftRadius:30}}>
                <Image style={{height:500}} source={mainbg}  />
            </View>
            <View  style={{ height: 250,  borderBottomLeftRadius: 30, borderBottomRightRadius: 30,paddingRight:25,paddingLeft:25, display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
               
                <View style={{ position: 'absolute', bottom: 30, width: '100%' }}>
                    <View>

                        <TextInput keyboardType="email-address" style={[main.text_input, { position: 'relative' }]} placeholder="Design" placeholderTextColor={'#c0c0c0'} />
                        <View style={{ position: 'absolute', top: 0, zIndex: 3, display: 'flex', justifyContent: 'center', height: 55, marginLeft: 10 }}>
                            <Icon color={'#c0c0c0'} size={30} name="search" />
                        </View>
                    </View>

                    <View>

                        <TextInput keyboardType="email-address" style={[main.text_input, { position: 'relative' }]} placeholder="Carlifornia, USA" placeholderTextColor={'#c0c0c0'} />
                        <View style={{ position: 'absolute', top: 0, zIndex: 3, display: 'flex', justifyContent: 'center', height: 55, marginLeft: 10 }}>
                            <Icon color={colors.ultra} size={30} name="location-on" />
                        </View>
                    </View>
                </View>
            </View>


            {/* Main body */}

            <View style={{paddingLeft:25,paddingRight:25,marginTop:10}}>
                <View>
                    <View style={{height:50,width:50,backgroundColor:colors.primary,borderRadius:15,justifyContent:'center',display:'flex',alignItems:'center'}}>
                        <Icon name="tune" color={'white'} style={{transform:[{rotateZ:'90deg'}]}} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MainSearch;

const mainStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.background_2,
        display: 'flex',
        position: 'relative',
        height: '100%',

    },
    text_input: {
        height: 55,
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: sizes.h12,
        fontFamily: fonts.DmSans_Regular,
        color: colors.primary,
        paddingLeft: 50,
        paddingRight: 55,
        marginBottom: 15
    }
})