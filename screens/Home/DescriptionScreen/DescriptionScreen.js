import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { colors, fonts, sizes } from '../../../constant';
import google from '../../../assets/images/google.png'
import { color, Icon } from '@rneui/base';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import company1 from '../../../assets/images/company1.png'
import company2 from '../../../assets/images/company2.png'
import { useNavigation } from '@react-navigation/core';



function Description() {
    const [info, setInfo] = React.useState(false)
    const navigation = useNavigation(); 
    const desc = descStyle
    return (
        <View style={desc.container}>
            <View style={desc.logoContainer}>
                <View style={desc.logo}>
                    <Image source={google} />
                </View>
            </View>

            <View style={desc.header_container}>

                <Text style={desc.desc_text_1}>UI/UX Designer</Text>
                <Text style={desc.desc_text_2}>Google    <Text style={{ fontSize: 10, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Carlifornia   <Text style={{ fontSize: 10, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   1 day ago</Text>
            </View>

            <View style={{ paddingLeft: 25, paddingRight: 25,marginTop:10 }}>
                <View style={{ display: 'flex', flexDirection: 'row', height: 40 }}>
                    <TouchableOpacity onPress={() => { setInfo(false) }} activeOpacity={0.8} style={[desc.tab_button,{backgroundColor: info == false ? colors.primary : colors.tertiary_deep }]}>
                        <Text style={[desc.desc_text_3, { color: info == false ? 'white' : colors.primary }]}>Description</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { setInfo(true) }} style={[desc.tab_button,{ backgroundColor: info == true ? colors.primary : colors.tertiary_deep }]}>
                        <Text style={[desc.desc_text_3, { color: info == true ? 'white' : colors.primary }]}>Company</Text>
                    </TouchableOpacity>
                </View>




                <View>

                    {info == false ? (

                        <View style={{marginTop:20}}>
                            {/* Description miniscreen */}
                               <ScrollView showsVerticalScrollIndicator={false} style={{height:520}}>
                               <View>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Job Description</Text>
                                    <Text style={desc.desc_text_4}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem...</Text>
                                    
                                    <TouchableOpacity activeOpacity={0.8} style={{height:40,width:120,backgroundColor:colors.tertiary_deep,marginTop:10,borderRadius:6,display:'flex',justifyContent:'center',alignItems:'center'}}>
                                        <Text style={desc.desc_text_5}>Read more</Text>
                                    </TouchableOpacity>
                              </View>  

                              <View style={{marginTop:30}}>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Requirements</Text>
                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Sed ut perspiciatis unde omnis iste natus error sit.</Text>
                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur & adipisci velit.</Text>

                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Text>

                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</Text>

                                   
                              </View>  
                              <View style={{marginTop:30}}>
                              <Text style={[desc.desc_text_3,{color:colors.primary}]}>Location</Text>
                              {/* Map */}<MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{height:200,marginTop:20}}
        minZoomLevel={10}
        scrollEnabled={false}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
                              </View>

                              <View style={{marginTop:30}}>
                              <Text style={[desc.desc_text_3,{color:colors.primary,marginBottom:20}]}>Informations</Text>
                             <View>
                             <Text style={[desc.desc_text_6,{color:colors.primary,marginBottom:5}]}>Position</Text>
                              <Text style={[desc.desc_text_7,{color:colors.primary}]}>Senior Designer</Text>
                             </View>


                             <View style={{marginTop:25}}>
                             <Text style={[desc.desc_text_6,{color:colors.primary,marginBottom:5}]}>Qualifications</Text>
                              <Text style={[desc.desc_text_7,{color:colors.primary}]}>Bachelor's Degree</Text>
                             </View>

                             <View style={{marginTop:25}}>
                             <Text style={[desc.desc_text_6,{color:colors.primary,marginBottom:5}]}>Experience</Text>
                              <Text style={[desc.desc_text_7,{color:colors.primary}]}>3 Years</Text>
                             </View>

                             <View style={{marginTop:25}}>
                             <Text style={[desc.desc_text_6,{color:colors.primary,marginBottom:5}]}>Job Type</Text>
                              <Text style={[desc.desc_text_7,{color:colors.primary}]}>Full-Time</Text>
                             </View>

                             <View style={{marginTop:25}}>
                             <Text style={[desc.desc_text_6,{color:colors.primary,marginBottom:5}]}>Specialization</Text>
                              <Text style={[desc.desc_text_7,{color:colors.primary}]}>Design</Text>
                             </View>
                              </View>

                              <View style={{marginTop:30,marginBottom:80}}>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Facilities and Others</Text>
                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Medical.</Text>

                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Dental.</Text>

                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Technical Certification.</Text>
                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Regular Hours.</Text>
                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Meal Allowance.</Text>
                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Transport Allowance.</Text>
                                    <Text style={desc.desc_text_4}><Text style={{ fontSize: 8, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Monday - Friday.</Text>
                                   

                                   
                              </View>  


                              
                               </ScrollView>

                        </View>
                    ) : (<View style={{marginTop:20}}>
                        {/* Company miniscreen */}
                        
                        <ScrollView showsVerticalScrollIndicator={false} style={{height:520}}>
                               <View>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>About Company</Text>
                                    <Text style={desc.desc_text_4}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.</Text>
                                    <Text style={desc.desc_text_4}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</Text>

                                    <Text style={desc.desc_text_4}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</Text>
                                    
                                  
                              </View>  

                              <View style={{marginTop:30}}>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Website</Text>
                                    <Text style={[desc.desc_text_4,{color:colors.tertiary_deep}]}>https://www.google.com</Text>
                                   
                              </View>  
                              <View style={{marginTop:30}}>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Industry</Text>
                                    <Text style={[desc.desc_text_4]}>Internet product</Text>
                                   
                              </View>  
                              <View style={{marginTop:30}}>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Employmee size</Text>
                                    <Text style={[desc.desc_text_4]}>132,121 Employees</Text>
                                   
                              </View>  
                              <View style={{marginTop:30}}>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Head office</Text>
                                    <Text style={[desc.desc_text_4]}>Mountain View, Carlifornia, Amerika Serikat</Text>
                                   
                              </View>  

                              <View style={{marginTop:30}}>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Type</Text>
                                    <Text style={[desc.desc_text_4]}>Multinational company</Text>
                                   
                              </View> 
                             
                              <View style={{marginTop:30}}>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Since</Text>
                                    <Text style={[desc.desc_text_4]}>1998</Text>
                                   
                              </View>  
                              <View style={{marginTop:30}}>
                                    <Text style={[desc.desc_text_3,{color:colors.primary}]}>Specialization</Text>
                                    <Text style={[desc.desc_text_4]}>Search technology, Web computing, Software and Online advertising</Text>
                                   
                              </View>  
                             

                              
                            

                             <View style={{marginBottom:50,marginTop:39}}>
                             <Text style={[desc.desc_text_3,{color:colors.primary}]}>Company Gallery</Text>
                                <View style={{display:'flex',flexDirection:'row'}}>
                                    <View style={{flex:1,marginRight:4}}>
                                        <Image style={{width:'100%',height:200}} resizeMode={'contain'}  source={company1}  />
                                    </View>
                                    <View style={{flex:1,marginLeft:4}}>
                                        <Image style={{width:'100%',height:200}} resizeMode={'contain'}  source={company2}  />
                                        
                                    </View>
                                </View>
                             </View>


                              
                               </ScrollView>
                        
                        
                    </View>)}




                </View>
            </View>



            <View style={{position:'absolute',width:'100%',height:70,backgroundColor:colors.background,bottom:0,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                {/* Bottom button */}
                <Icon name="bookmark-border" color={colors.ultra} style={{marginRight:20}} />
                <TouchableOpacity onPress={()=>{navigation.navigate('UploadCV')}} style={{height:50,width:'80%',backgroundColor:colors.primary,display:'flex',justifyContent:'center',alignItems:'center'}} activeOpacity={0.8}>
                        <Text style={[desc.desc_text_3,{color:'white'}]}>APPLY NOW</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Description;


const descStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        display: 'flex',
        position: 'relative',
        height: '100%',
        paddingTop: '15%',
    },
    logoContainer:{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingLeft: 25,
        paddingRight: 25, 
        zIndex: 2
    },
    logo:{
        height: 70, 
        width: 70, 
        backgroundColor: colors.incognito, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 50
    },
    header_container:{
        height: 130, 
        backgroundColor: colors.grey, 
        paddingLeft: 25,
        paddingRight: 25, 
        marginTop: -20, 
        padding: 10, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    tab_button:{
        height: 40, borderRadius: 6, flex: 1, marginRight: 5, justifyContent: 'center', display: 'flex', alignItems: 'center' 
    },
    desc_text_1: {
        fontFamily: fonts.DmSans_Bold,
        fontSize: sizes.h16,
        color: colors.primary
    },
    desc_text_2: {
        fontFamily: fonts.DmSans_Regular,
        fontSize: sizes.h16,
        color: colors.primary,
        marginTop: 15
    },
    desc_text_3: {
        fontFamily: fonts.DmSans_Bold,
        fontSize: sizes.h14
    },
    desc_text_4: {
        fontFamily: fonts.DmSans_Regular,
        fontSize: sizes.h12,
        marginTop:10
    },
    desc_text_5:{
        fontFamily:fonts.OpenSans_Regular,
        fontSize:sizes.h12,
        color:colors.primary
    },
    desc_text_6: {
        fontFamily: fonts.DmSans_Bold,
        fontSize: sizes.h12
    },
    desc_text_7: {
        fontFamily: fonts.DmSans_Regular,
        fontSize: sizes.h12
    },
})