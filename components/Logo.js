//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';


// create a component
const Logo = () => {
    return (
        <View>
            <Image source={{uri:'https://uilogos.co/img/logotype/circle.png'}} style={{height:150, width:150}} />
        </View>
    );
};


//make this component available to the app
export default Logo;
