import React from 'react';
import {Text, View, StyleSheet,  keyAvoidingView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import db from '../config'
export default class Search extends React.Component {

    constructor(){
        super();
        this.state={
            Search:'',
            AllStories:[],
        }
    }

    retrive=()=>{
        db.collection('Stories').get().then((response)=>response.docs.map((doc)=>{var x= doc.data(); this.setState({AllStories:[...this.state.AllStories,doc.data()]})}))
    }

    componentDidMount=()=>{
        this.retrive()
    }

    render(){
        return(
            <keyAvoidingView>
                <SearchBar placeholder="Type Here...." value={this.state.Search} onChangeText={(text)=>{this.setState({Search:text})}}>
                </SearchBar>
                <FlatList data={this.state.AllStories} renderItem={({item})=>(
                    <View>
                        <Text>{"Author:"+item.Author}</Text>
                        <Text>{"Title:"+item.Title}</Text>
                        <Text>{"Story:"+item.Story}</Text>
                    </View>
                )} keyExtractor={(item,index)=>index.toString()}>
                </FlatList>
            </keyAvoidingView>
        )
    }
}

const stylez = StyleSheet.create({
    Searchsty:{
        justifyContent:'center',
        backgroundColor:'green',
        alignText:'center',
        Textsize:'10',
        fontWeight:'5',
        Textcolor:'Red',

    }
})