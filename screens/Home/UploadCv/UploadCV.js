import React from "react";
import {View,Text,StyleSheet} from 'react-native'
import { colors } from "../../../constant";


function UploadCV(){
    const upload=uploadStyle
    return (
        <View style={upload.container}>
            <Text>Hellow</Text>
        </View>
    )
}
export default UploadCV;


const uploadStyle=StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        display: 'flex',
        position: 'relative',
        height: '100%',
        paddingTop: '15%',
    },
})
