import * as React from "react";
import { View, StyleSheet, ViewStyle, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Solution } from '../../../entity/index'
import {SolutionImage} from '../../../constants'

export const SCREEN_WIDTH: number = Dimensions.get('window').width
const styles=StyleSheet.create({
    solutionView:{
       flexDirection:"row",
        flexWrap:"wrap", 
        marginBottom:8,     
    } as ViewStyle,
    solutionDetail:{
        width:(SCREEN_WIDTH-48)/2,
        height:(SCREEN_WIDTH-48)/2, 
         marginVertical: 8,
    } as ViewStyle,
    solutionContent:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        width:(SCREEN_WIDTH-48)/2,
        height:(SCREEN_WIDTH-48)/2,        
    } as ViewStyle,
    solutionContentFont:{
        fontSize:16,
        color:"white",
    }
})

interface PropsType {
  solution:Solution[],
}

export default class HomeSolution extends React.Component<PropsType, {}>{
    DirectResultPage(){
        console.log("testpress")
    }
    constructor(props: PropsType) {
      super(props)
    }

    renderProductRow(solution:Solution,index:number)
    {
        console.log(SolutionImage[solution.id])
        const margin=16
         const marginStyle = index % 2 === 0 ?
        {marginLeft: margin, marginRight: margin / 2} : {marginLeft: margin / 2 , marginRight: margin}
        return  (
            <TouchableOpacity key={solution.id} style={[styles.solutionDetail,marginStyle]} activeOpacity={0.7} onPress={this.DirectResultPage}>
                <Image source={SolutionImage[solution.id]}  style={styles.solutionContent}>
                    <Text style={styles.solutionContentFont}>{solution.title}</Text>
                </Image>
            </TouchableOpacity> 
        )
    }
    render(){
        console.log(this.props.solution)
        return(
            <View style={styles.solutionView}>
               {
                  this.props.solution && this.props.solution.map((solution:Solution,index:number)=>{
                        return this.renderProductRow(solution,index)
                   })
               }                  
            </View>
        )
    }
}