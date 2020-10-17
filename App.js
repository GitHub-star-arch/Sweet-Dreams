import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Main from './screens/main.js'
import Login from './screens/login.js';
import Search from './screens/search.js';
export default class App extends React.Component {

    render(){
        return(
              <AppContainer/>
        )
    }
}
var tabContainer = createBottomTabNavigator({
  Login:{screen:Login},
  Search:{screen:Search}
},
{defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const Rootname=navigation.state.routeName
    console.log(Rootname);
    if (Rootname==="Write") {
      return(
        <Image style={{width:40,height:40}} source={require('./pictures/book.png')}></Image>
      )
    } else if (Rootname==="Read") {
      return(
        <Image style={{width:40,height:40}} source={require('./pictures/searchingbook.png')}></Image>
      )
    }
  }
})})
const SwitchNavigator = createSwitchNavigator({
  Main:{screen:Main},
  tabContainer:{screen:tabContainer}
})

const AppContainer = createAppContainer(SwitchNavigator)