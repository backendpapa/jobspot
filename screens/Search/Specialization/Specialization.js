import { Icon } from "@rneui/base";
import React from "react";

import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image, ScrollView,} from 'react-native'

import { colors,fonts,sizes } from "../../../constant";
import design from '../.././../assets/images/icons/design.png'
import finance from '../.././../assets/images/icons/finance.png'
import education from '../.././../assets/images/icons/education.png'
import restaurant from '../.././../assets/images/icons/restaurant.png'
import health from '../.././../assets/images/icons/health.png'
import programmer from '../.././../assets/images/icons/programmer.png'
import { Picker } from "@react-native-picker/picker";
import {Slider,} from '@miblanchard/react-native-slider'


let specials=[
    {title:"Design",jobs:140,icon:design,press:false},
    {title:"Finance",jobs:250,icon:finance,press:false},
    {title:"Education",jobs:120,icon:education,press:false},
    {title:"Restaurant",jobs:85,icon:restaurant,press:false},
    {title:"Health",jobs:235,icon:health,press:false},
    {title:"Programmer",jobs:412,icon:programmer,press:false},
]
let sub_category=[
    'UI/UX Design',
    'Product Design',
    'Frontend Developer',
    'Backend Developer',
    'Devops Engineer'
]

let location=[
    'Carlifornia',
    'San Diego',
    'Los Angelis',
    'Madrid'
]

function Specialization(){
    
    const special=specialization
    const [showFilter,setShowFilter]=React.useState(false)
    const [selectedValue,setSelectedValue]=React.useState('design')
    const [ii,setIi]=React.useState(null)
    return (
        <View style={special.container}>
            {showFilter==false?(<View style={{paddingTop: '20%'}}>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                        <View style={{flex:1}}>

                        <TextInput keyboardType="email-address" style={[special.text_input, { position: 'relative' }]} placeholder="Search" placeholderTextColor={'#c0c0c0'} />
                        <View style={{ position: 'absolute', top: 0, zIndex: 3, display: 'flex', justifyContent: 'center', height: 55, marginLeft: 10 }}>
                            <Icon color={'#c0c0c0'} size={30} name="search" />
                        </View>
                        </View>
                        <View style={{marginLeft:10}}>
                        <TouchableOpacity onPress={()=>{
                            setShowFilter(true)
                        }} activeOpacity={0.8} style={{height:55,width:55,backgroundColor:colors.ultra,borderRadius:15,justifyContent:'center',display:'flex',alignItems:'center'}}>
                        <Icon name="tune" color={'white'} style={{transform:[{rotateZ:'90deg'}]}} />
                    </TouchableOpacity>
                        </View>
            </View>


            {/* specializations */}

           <View>
         


            <ScrollView showsVerticalScrollIndicator={false} style={{display:'flex',height:680}}>
            <View style={{marginTop:20}}>
                    <Text style={special.special_text_1}>Specialization</Text>
            </View>
            <View style={{marginTop:20}}>
                <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                    {specials.map((item,i)=>{
                        return (<TouchableOpacity onPressOut={()=>{
                            setIi(null)
                        }} onPressIn={()=>{
                            let ii=i
                            setIi(i)
                        }}  activeOpacity={0.8} style={{width:'45%',height:200,backgroundColor:i!==ii?'white':colors.ultra,borderRadius:25,marginBottom:20,shadowColor: colors.background_3,
                        shadowOffset: {width: 0, height: 1},
                        shadowOpacity: 0.1,
                        elevation: 10,}}>
                            <View style={{height:'100%',width:'100%',borderRadius:25,padding:20,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <View style={{height:70,width:70,backgroundColor:i!==ii?colors.ultra_sur:'white',borderRadius:50,justifyContent:'center',display:'flex',alignItems:'center'}}>
                                    <Image source={item.icon} style={{width:40,height:40}}  />
                                </View>
                                <View style={{marginTop:20}}>
                    <Text style={{fontFamily:fonts.DmSans_Bold,fontSize:sizes.h14,color:i!==ii?colors.primary:'white'}}>{item.title}</Text>
                    <Text style={{fontFamily:fonts.DmSans_Regular,fontSize:sizes.h12,color:i!==ii?'grey':'white',textAlign:'center',marginTop:10}}>{item.jobs} Jobs</Text>
                </View>
                            </View>

                            
                        </TouchableOpacity>)
                    })}
                    
                    
                   
                   
                </View>

                
            </View>
            </ScrollView>
           </View>
            </View>):<View></View>}


           {/* Filter Section */}
          {showFilter==true? <View style={{paddingTop: '11%',display:'flex',position:'relative',height:'100%'}}>
            <Text style={{fontFamily:fonts.DmSans_Bold,textAlign:'center',fontSize:sizes.h20,color:colors.primary}}>Filter</Text>

            <View style={{marginTop:40}}>
                <View>
                <Text style={{fontSize:sizes.h14,fontFamily:fonts.OpenSans_SemiBold,color:colors.primary}}>Category</Text>
                <Picker selectedValue={selectedValue}onValueChange={(item,i)=>setSelectedValue(item)}  style={{height:40,backgroundColor:'white',marginTop:20}}>
                    {specials.map((item,i)=>{
                        return <Picker.Item key={i} style={special.picker_text} label={item.title} value={item.title.toLocaleLowerCase()}></Picker.Item>
                    })}

                    
                    
                </Picker>
                </View>

                <View style={{marginTop:20}}>
                <Text style={{fontSize:sizes.h14,fontFamily:fonts.OpenSans_SemiBold,color:colors.primary}}>Sub Category</Text>
                <Picker selectedValue={selectedValue}onValueChange={(item,i)=>setSelectedValue(item)}  style={{height:40,backgroundColor:'white',marginTop:20}}>
                    {sub_category.map((item,i)=>{
                        return <Picker.Item key={i} style={special.picker_text} label={item} value={item.toLocaleLowerCase()}></Picker.Item>
                    })}
                    
                    
                    
                </Picker>
                </View>

                <View style={{marginTop:20}}>
                <Text style={{fontSize:sizes.h14,fontFamily:fonts.OpenSans_SemiBold,color:colors.primary}}>Location</Text>
                <Picker selectedValue={selectedValue}onValueChange={(item,i)=>setSelectedValue(item)}  style={{height:40,backgroundColor:'white',marginTop:20}}>
                    {location.map((item,i)=>{
                        return <Picker.Item key={i} style={special.picker_text} label={item} value={item.toLocaleLowerCase()}></Picker.Item>
                    })}
                    
                    
                    
                </Picker>
                </View>

                <View style={{marginTop:80}}>
                <Text style={{fontSize:sizes.h14,fontFamily:fonts.OpenSans_SemiBold,color:colors.primary,marginBottom:25}}>Salary</Text>
                    <Slider minimumTrackTintColor={colors.ultra} thumbTintColor={colors.primary} maximumTrackTintColor={colors.grey_sur} step={0} />
                </View>

                <View style={{marginTop:20}}>
                <Text style={{fontSize:sizes.h14,fontFamily:fonts.OpenSans_SemiBold,color:colors.primary,marginBottom:25}}>Job Type</Text>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <TouchableOpacity style={{backgroundColor:colors.ultra_ama,padding:10,borderRadius:10,paddingLeft:20,paddingRight:20,display:'flex',justifyContent:'center',alignItems:'center',width:'100%',flex:1,margin:5}}>
                            <Text style={{fontFamily:fonts.DmSans_Regular,fontSize:sizes.h10}}>Full time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:colors.ultra_ama,padding:10,borderRadius:10,paddingLeft:20,paddingRight:20,display:'flex',justifyContent:'center',alignItems:'center',width:'100%',flex:1,margin:5}}>
                            <Text style={{fontFamily:fonts.DmSans_Regular,fontSize:sizes.h10}}>Part time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:colors.ultra_ama,padding:10,borderRadius:10,paddingLeft:20,paddingRight:20,display:'flex',justifyContent:'center',alignItems:'center',width:'100%',flex:1,margin:5}}>
                            <Text style={{fontFamily:fonts.DmSans_Regular,fontSize:sizes.h10}}>Remote</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <TouchableOpacity style={{backgroundColor:colors.ultra_ama,padding:10,borderRadius:10,paddingLeft:20,paddingRight:20,display:'flex',justifyContent:'center',alignItems:'center',width:'100%',flex:1,margin:5}}>
                            <Text style={{fontFamily:fonts.DmSans_Regular,fontSize:sizes.h10}}>Apprehentice</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:colors.ultra_ama,padding:10,borderRadius:10,paddingLeft:20,paddingRight:20,display:'flex',justifyContent:'center',alignItems:'center',width:'100%',flex:1,margin:5}}>
                            <Text style={{fontFamily:fonts.DmSans_Regular,fontSize:sizes.h10}}>Contract</Text>
                        </TouchableOpacity>
                       <View style={{flex:1}}>
                           </View>
                    </View>

                   
                </View>
            </View>
            <View style={{position:'absolute',bottom:10,width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>{
                            setShowFilter(false)
                        }} style={{height:50,width:'80%',backgroundColor:colors.primary,borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:fonts.DmSans_Bold,fontSize:sizes.h14,color:'white'}}>APPLY NOW</Text>
                        </TouchableOpacity>
                    </View>
           </View>:<View></View>}


         
        </View>
    )
}

export default Specialization


const specialization=StyleSheet.create({
    container:{
        backgroundColor: colors.background_2,
        display: 'flex',
        position:'relative',
        height: '100%',
        
        paddingLeft: 25,
        paddingRight: 25
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
    special_text_1:{
        fontFamily:fonts.DmSans_Bold,
        fontSize:sizes.h16,
        color:colors.primary
    },
    picker_text:{
        fontFamily:fonts.DmSans_Regular,
        fontSize:sizes.h12,
        color:colors.primary
    }
})