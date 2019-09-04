//import liraries
import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
const Articles = () => {
    return (
        <View style={styles.container}>
            <View style={styles.articleContainer} >
                <Text style={styles.heading} >
                     Welcome to the authorized screen
                </Text>
                <Text style={styles.content} >
                     You are logged in from firebase
                </Text>

               <TouchableOpacity style={{padding:20 }} onPress={()=> firebase.auth().signOut()} >
                     <Text style={{color:'#1B9CFC'}} >Logout</Text>
               </TouchableOpacity>
            </View>
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
      
       
    },
    articleContainer:{
      padding:10,
      borderBottomColor:'rgba(255,255,255,.7)',
      borderBottomWidth:5
    },
    heading:{
       fontSize:22,
       color:'black',
    
       marginBottom:10
    },
    content:{
      marginTop:10,
      fontSize:19,
      
    }
});

//make this component available to the app
export default Articles;
