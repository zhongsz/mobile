import * as React from "react";
import { View, StyleSheet, ViewStyle, Text, ScrollView, Dimensions,Image } from 'react-native';
import HomeSolution from './HomeSolution';
export const SCREEN_HEIGHT: number = Dimensions.get('window').height
export const SCREEN_WIDTH: number = Dimensions.get('window').width
const styles=StyleSheet.create({
    contentView:{
        height:198*SCREEN_WIDTH/414,
        backgroundColor:"red",
        alignItems:"center",
        justifyContent:"center",
        width:SCREEN_WIDTH
    } as ViewStyle,
    contentSearch:{
        height:48,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:40,        
    } as ViewStyle,
    contentText:{
        color:"white",
        fontSize:30,
        marginBottom:22,
    }as ViewStyle,
})

interface PropsType {
  solution:any,
}

export default class HomeContent extends React.Component<PropsType, {}>{
    render(){
        return(            
            <ScrollView style={{height:SCREEN_HEIGHT-50}}>
                <Image style={styles.contentView} source={require('../../../../assets/b_g.png')}>
                    <Text style={styles.contentText}>Smart Find</Text>                
                    <View style={styles.contentSearch}>
                        <View style={{backgroundColor:"#ff6a00",flex:2,justifyContent:"center",alignItems:"center"}}>
                            <Text>System ▽</Text>
                        </View>
                        <View style={{backgroundColor:"white",flex:5}}>
                        </View>
                    </View>                
                </Image>
                <HomeSolution solution={this.props.solution}></HomeSolution>
            </ScrollView>
           
        )
    }
}