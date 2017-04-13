import * as React from "react"
import { View } from 'react-native';
import TopBar from './components/Topbar';
import HomeContent from './components/Contents';
import { connect } from "react-redux";
import { getSolutionCategorys } from '../../actions/homeAction';

const mapStateToProps=(store:any)=>{
    console.log(store)
    return {solution:store.homeReducer.solution}
}

const mapDispatchToProps={getSolutionCategorys}

interface TStateProps{
    solution:any
}

interface TDispatchProps{
    getSolutionCategorys:()=>void
}

interface TOwnProps{
    
}


class Home extends React.Component<TStateProps & TDispatchProps & TOwnProps,{}>{
    componentDidMount(){
       this.props.getSolutionCategorys()
    }

    render(){
        return(
           <View>
               <TopBar></TopBar>
               <HomeContent solution={this.props.solution}></HomeContent>
           </View>
        )
    }
}

export default connect<TStateProps,TDispatchProps,TOwnProps>(mapStateToProps,mapDispatchToProps)(Home)