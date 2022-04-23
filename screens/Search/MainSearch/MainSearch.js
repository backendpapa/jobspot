import { Icon } from "@rneui/base";
import React from "react";
import { View, Text, StyleSheet, TextInput,ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native'
import { colors, fonts, sizes } from "../../../constant";
import mainbg from '../../../assets/images/mainbg.png'
import Card from '../../../utils/CardComponent/Card2'
import google from '../../../assets/images/google.png'
import dribble from '../../../assets/images/dribbble.png'
import { useNavigation } from "@react-navigation/core";


const jobs=[1,2,3,4,5,6,7,8]
const opportunity=[
    {title:"UI/UX Designer",subtitle:"Google inc . Carlifonia, USA",icon:google,color:colors.grey_light,amount:15},
    {title:"Lead Designer",subtitle:"Dribble inc . Carlifonia, USA",icon:dribble,color:colors.pinky,amount:20},
    {title:"UI/UX Designer",subtitle:"Google inc . Carlifonia, USA",icon:google,color:colors.grey_light,amount:15},
    {title:"Lead Designer",subtitle:"Dribble inc . Carlifonia, USA",icon:dribble,color:colors.pinky,amount:20},
    {title:"UI/UX Designer",subtitle:"Google inc . Carlifonia, USA",icon:google,color:colors.grey_light,amount:15},
    {title:"Lead Designer",subtitle:"Dribble inc . Carlifonia, USA",icon:dribble,color:colors.pinky,amount:20},
    {title:"UI/UX Designer",subtitle:"Google inc . Carlifonia, USA",icon:google,color:colors.grey_light,amount:15},
    {title:"Lead Designer",subtitle:"Dribble inc . Carlifonia, USA",icon:dribble,color:colors.pinky,amount:20},
]

function MainSearch() {
    const main = mainStyle
    const navigation=useNavigation()
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

            <View style={{paddingLeft:25,paddingRight:25,marginTop:20}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Specialization')
                    }} activeOpacity={0.8} style={{height:50,width:50,backgroundColor:colors.primary,borderRadius:15,justifyContent:'center',display:'flex',alignItems:'center'}}>
                        <Icon name="tune" color={'white'} style={{transform:[{rotateZ:'90deg'}]}} />
                    </TouchableOpacity>
                    <View style={{width:'100%',marginLeft:10}}>
                        <TouchableOpacity onPress={()=>{
                        navigation.navigate('Specialization')
                    }} activeOpacity={0.8} style={{height:50,width:'80%',backgroundColor:colors.grey_light,borderRadius:15,padding:5,display:'flex',alignItems:'center',justifyContent:'center'}} >
                            <Text style={main.main_text_1}>Specialization</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{marginTop:20}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    {opportunity.map((item,i)=>{
                        return (<Card icon={item.icon} title={item.title} subtitle={item.subtitle} color={item.color} key={i} amount={item.amount} />)
                    })}
                    </ScrollView>
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
    },
    main_text_1:{
        fontFamily:fonts.DmSans_Regular,
        fontSize:sizes.h12,
        color:colors.primary
    }
})