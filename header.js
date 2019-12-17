import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Header extends Component{

    render () {
       const {header, headerText} = styles;

       return(
        <View style={header}>
           <Text style={headerText}>{this.props.headerText}</Text>
        </View>
       )
    }
}

const styles =  StyleSheet.create({
    header: {
        height:80,
        paddingTop:30,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        shadowColor:'#000000',
        shadowOpacity:0.5
     },
     headerText:{
       fontSize:30,
       textAlign:'center'
     }
    });
