import * as React from "react"
import { Provider } from 'react-redux'
import { Router, Scene } from 'react-native-router-flux'
import Home from "./page/home/index";
import store from './middlewares';
import { persistStore } from "redux-persist";
import { whitelist } from './middlewares/index';
import { AsyncStorage } from "react-native";

interface state{
    rehydrated:boolean,
}

export default class App extends React.Component<{}, state>
{     
    constructor() {
        super()
        this.state = {
        rehydrated: false,
        }
    }
    componentWillMount() {
        persistStore(
            store,
            {
                whitelist,
                storage: AsyncStorage,
            },
            () => {
                this.setState({ rehydrated: true })
            },
        )
    }
  
    render(){
        return this.state.rehydrated ? (
            <Provider store={store}>
                <Router hideNavBar>
                    <Scene key="Home" component={Home} initial />
                </Router>
            </Provider>
        ):null
    }
}