import React,{useCallback} from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity, Alert, TextInput} from 'react-native'
import { colors,fonts,sizes } from "../../../constant";
import google from '../../../assets/images/google.png'
import { Icon } from "@rneui/base";
import DocumentPicker, {
    DirectoryPickerResponse,
    DocumentPickerResponse,
    isInProgress,
    types,
  } from 'react-native-document-picker'
  import PDF from '../../../assets/images/PDF.png'


function UploadCV(){
    const upload=uploadStyle
    const [result, setResult] = React.useState({})
    const [name,setName]=React.useState("")
    const [size,setSize]=React.useState("")
    const [selected,setSelected]=React.useState(false)

    React.useEffect(() => {
        console.log(JSON.stringify(result, null, 2))
      }, [result])
    
      
      const removeUpload=()=>{
          
          setSelected(false)
      }
      const handleError = (err) => {
        if (DocumentPicker.isCancel(err)) {
          console.warn('cancelled')
          // User cancelled the picker, exit any dialogs or menus and move on
        } else if (isInProgress(err)) {
          console.warn('multiple pickers were opened, only the last will be considered')
        } else {
          throw err
        }
    }
    
    return (
        <View style={upload.container}>
            <View style={upload.logoContainer}>
                <View style={upload.logo}>
                    <Image source={google} />
                </View>
            </View>

            <View style={upload.header_container}>

                <Text style={upload.desc_text_1}>UI/UX Designer</Text>
                <Text style={upload.desc_text_2}>Google    <Text style={{ fontSize: 10, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   Carlifornia   <Text style={{ fontSize: 10, textAlignVertical: 'center' }}>{'\u2B24'}</Text>   1 day ago</Text>
            </View>

            <View style={{marginTop:20,paddingLeft:25, paddingRight:25}}>
           <View>
           <Text style={[upload.desc_text_3,{color:colors.primary}]}>Upload CV
            </Text>
            <Text style={upload.desc_text_4}>Add your CV/Resume to apply for a job</Text>
           </View>

           <View style={{marginTop:20}}>
                 <TouchableOpacity onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
              type:DocumentPicker.types.pdf   
            })
            setName(pickerResult.name)
            setSize(pickerResult.size)
            setResult([pickerResult])
            setSelected(true)
          } catch (e) {
            handleError(e)
          }
        }} style={{minHeight:100,backgroundColor:selected==true?colors.tertiary_light:'none',orderColor:colors.primary,borderWidth:selected==false?1:0,borderRadius:10,borderStyle:selected==false?"dashed":"solid"}}>
            {selected==false?(<View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',minHeight:100}}>
            <Icon name="upload-file"  />
                    <Text style={upload.desc_text_5}>  Upload CV/Resume</Text>
            </View>):(<View style={{minHeight:100}}>
            <View style={{margin:20,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Image source={PDF} style={{width:50,height:50}} />
                <View style={{flex:1}}>
                    <Text numberOfLines={1} style={[upload.desc_text_5]}>{selected==false?"No File Name":name}</Text>
                    <Text style={upload.desc_text_6}>{selected==false?"No File Size":(size/1024).toFixed(2)+"kb  - 10 Feb 2022 at 11:30 am"}</Text>
                </View>
                
            </View>
            <View  style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:20,marginRight:20,marginTop:0,marginBottom:20}}>
                        <Icon onPress={()=>{removeUpload}} color={'red'} name="delete" size={30} />
                        <Text  style={[upload.desc_text_6,{color:'red'}]}>Remove file</Text>
                    </View>
            </View>)}
                
                 </TouchableOpacity>
            </View>



            <View style={{marginTop:20}}>
            <Text style={[upload.desc_text_3,{color:colors.primary}]}>Information
            </Text>
            <View style={{marginTop:20}}>
                <TextInput style={{height:230,
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: sizes.h12,
        fontFamily: fonts.DmSans_Regular,
        color: colors.primary,
        padding:25,display:'flex'}} textAlignVertical="top" placeholder={`Explain why you are the right person for ${'\n'}the job`}  multiline>
                </TextInput>
            </View>
            </View>
            </View>

            
            <View style={{position:'absolute',width:'100%',height:70,backgroundColor:colors.background,bottom:0,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                {/* Bottom button */}
                
                <TouchableOpacity onPress={()=>{navigation.navigate('UploadCV')}} style={{height:50,width:'80%',backgroundColor:colors.primary,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:6}} activeOpacity={0.8}>
                        <Text style={[upload.desc_text_3,{color:'white'}]}>APPLY NOW</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
export default UploadCV;


const uploadStyle=StyleSheet.create({
    container: {
        backgroundColor: colors.background_2,
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
    desc_text_5: {
        fontFamily: fonts.DmSans_Regular,
        fontSize: sizes.h12,
        color:colors.primary
        
    },
    desc_text_6: {
        fontFamily: fonts.DmSans_Regular,
        fontSize: sizes.h12,
        color:colors.nega
        
    },
})
