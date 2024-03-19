import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { mycolors } from '../Utilities/mycolors'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'



const SplashScreen = () => {
    const nav=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            nav.replace('SignUp')
        
        },1500);
    },[]);
  return (
      <View style={styles.container}>
        <StatusBar style='light'/>
        <View style={styles.image}>
        <Image style={{height:150,width:150}}  source={require('../assets/logo.png')}/>
        <View style={styles.name}>
            <View style={{flexDirection:'row'}}>
        <Text style={[styles.text,{color:'pink'}]}>P</Text>
        <Text style={[styles.text,{color:'orange'}]}>I</Text>
        <Text style={[styles.text,{color:'red'}]}>C</Text>
        <Text style={[styles.text,{color:'blue'}]}>K</Text>
        <Text style={[styles.text,{color:'pink'}]}> </Text>
        <Text style={[styles.text,{color:'green'}]}>G</Text>
        <Text style={[styles.text,{color:'purple'}]}>O</Text>
        <Text style={[styles.text,{color:'yellow'}]}>O</Text>
        <Text style={[styles.text,{color:'#e31aa6'}]}>D</Text>

        </View>
        <Text style={{fontSize:18,marginLeft:20}}>The Food You Like!!!</Text>
        </View>
        </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:mycolors.primary,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
       fontSize:40,
       fontWeight:'700',
       
      
    },
    image:{
        flexDirection:'row'
        
    },
    name:{
        alignItems:'flex-start',
        marginTop:30,
        marginLeft:10
    }


})