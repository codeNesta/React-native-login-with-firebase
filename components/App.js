//import liraries
import React, { Component } from 'react';
import firebase from 'firebase'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LoginForm from './LoginForm';
import Articles from './Articles';
import BG from '../images/bg.png'
import Loading from './Loading'


// create a component
class App extends Component{
 
  state={
    loggedIn:null
  }

  componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyCfGifnmX69HbSRFpGzxPQDGEMMReP52-8",
      authDomain: "mytry-bea8d.firebaseapp.com",
      databaseURL: "https://mytry-bea8d.firebaseio.com",
      projectId: "mytry-bea8d",
      storageBucket: "mytry-bea8d.appspot.com",
      messagingSenderId: "218138010004",
      appId: "1:218138010004:web:38efc72a61f5ad9d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
     firebase.auth().onAuthStateChanged(user => {
          if(user){
             this.setState({
               loggedIn:true
             })
          }else{
            this.setState({
              loggedIn:false
            })
          }
     })

   
  }


  renderContent = () =>{
    switch(this.state.loggedIn){
      case false:
        return <ImageBackground style={styles.container} source={BG} >
                  <LoginForm/>
               </ImageBackground>

        
      case true:
           return <Articles/>

           default:
             return <Loading/>


    }
  }

  render(){
    return (
      <View style={styles.container}>
       {this.renderContent()}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height:'100%',
    width:'100%'
 
  
  },
});

//make this component available to the app
export default App;
