import { Icon } from "@rneui/base";
import React from "react";

import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import google_icon from '../../assets/images/google_icon.png'
import { colors, fonts, sizes } from "../../constant";

import { useNavigation } from '@react-navigation/native';

function Card(props){
    const navigation = useNavigation(); 
    const card=cardStyle
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={()=>{navigation.navigate('Description')}} style={card.container}>
            <View style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between'}}>
                <View style={{height:45,width:45,backgroundColor:props.color,borderRadius:50,display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Image style={{height:26,width:26}} source={props.icon} />
                </View>
               
                <View  >
                   
                    <Icon size={30} name="bookmark-border" />
                </View>
            </View>
            <View style={{marginTop:10}}>
                    <Text style={card.card_text_1}>{props.title}</Text>
                    <Text style={card.card_text_2}>{props.subtitle}</Text>
                </View>
           
            <View style={{marginTop:15}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <View style={{display:'flex',flexDirection:'row'}}>
                   <View  style={{borderRadius:25,backgroundColor:colors.background_3,padding:8,paddingLeft:15,paddingRight:15,display:'flex',justifyContent:'center',alignItems:'center'}}>
                       <Text style={card.card_text_5}>Senior Designer</Text>
                        </View>  

                        <View  style={{borderRadius:25,backgroundColor:colors.background_3,padding:8,paddingLeft:15,paddingRight:15,marginLeft:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                       <Text style={card.card_text_5}>Full time</Text>
                        </View>  
                        <View  style={{borderRadius:25,backgroundColor:colors.background_3,padding:8,paddingLeft:25,paddingRight:25,marginLeft:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                       <Text style={card.card_text_5}>Design</Text>
                        </View>  
                   </View>


                </View>


                <View style={{marginTop:15}}>
                    <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                        <Text style={{fontFamily:fonts.DmSans_Regular,fontSize:sizes.h10,color:colors.background_3}}>25 minute ago</Text>
                        <Text style={card.card_text_3}>${props.amount}k<Text style={card.card_text_4}>/Mo</Text></Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity >
    )
}

export default Card;

const cardStyle=StyleSheet.create({
    container:{
        minHeight:160,
        borderRadius:25,
        backgroundColor:'white',
        padding:20,
        width:'100%',
        marginBottom:15
    },
    card_text_1:{
        fontFamily:fonts.DmSans_Bold,
        fontSize:sizes.h14,
        color:colors.primary
    },
    card_text_2:{
        fontFamily:fonts.DmSans_Regular,
        fontSize:sizes.h12,
        color:colors.primary
    },
    card_text_3:{
        fontFamily:fonts.OpenSans_SemiBold,
        fontSize:sizes.h14,
        color:colors.primary
    },
    card_text_4:{
        fontFamily:fonts.OpenSans_Regular,
        fontSize:sizes.h14,
        color:'grey'
    },
    card_text_5:{
        fontSize:sizes.h10,
        fontFamily:fonts.DmSans_Regular,
        color:colors.primary
    }
})