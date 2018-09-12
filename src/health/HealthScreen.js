import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


class HealthScreen extends  Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}> Health Screen </Text>
            </View>
        )
    }
}

export default HealthScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#35caca',
        fontSize:30
    }
});