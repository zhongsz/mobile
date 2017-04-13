import * as React from "react";
import { View, StyleSheet, ViewStyle, Image } from 'react-native';

const styles=StyleSheet.create({
    topView:{
        height:40,
        flexDirection:"row",
        justifyContent:"space-between",

    } as ViewStyle,
    topLeft:{
        backgroundColor:"white",
        width:40,
        height:40,
    } as ViewStyle
})
export default class TopBar extends React.Component<{}, {}>{
    render(){
        return(
            <View style={styles.topView}>
                <View style={styles.topLeft}><Image style={{width:32,height:32}} source={require('../../../../assets/drawer.png')}></Image></View>
                <View style={styles.topLeft}></View>
            </View>
        )
    }
}