//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// create a component
const Loading = () => {
    return (
        <View style={styles.container}>
           <ActivityIndicator size="large" />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
});

//make this component available to the app
export default Loading;
