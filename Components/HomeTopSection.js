import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {AntDesign} from '@expo/vector-icons';
import {mycolors} from '../Utilities/mycolors';

const HomeTopSection = () => {
  return (
    <View>
      {/* <View style={styles.logo}>
        <Image style={styles.ima} source={require ('../assets/logo.png')} />
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          borderRadius: 20,
          borderColor: 'grey',
          height: 50,
          borderWidth: 5,
          alignItems: 'center',
          alignSelf:'center',
          width:200,
          // backgroundColor:'grey',
          marginTop:15,
        }}
      >
        <MaterialIcons name="location-on" size={24} color="black" />
        <Text style={{textAlign: 'center'}}>Greater Noida,India</Text>
      </View>
      <View
        style={{
          backgroundColor: '#dcdcdc',
          height: responsiveHeight (6.5),
          flexDirection: 'row',
          borderRadius: 20,
          alignItems: 'center',
          marginTop: 15,
          gap: 10,
          paddingHorizontal: 10,
        }}
      >
        <AntDesign name="search1" size={24} color="black" />
        <TextInput style={{fontSize: 18, flex: 1}} placeholder="Search " />
      </View>

      <View style={{marginTop: 20}}>
        <Image
          style={{width: '100%', height: 150, borderRadius: 20}}
          source={require ('../assets/slider1.jpg')}
        />
      </View>
    </View>
  );
};

export default HomeTopSection;

const styles = StyleSheet.create ({
  ima: {
    height: 60,
    width: 60,
  },
  logo: {
    // backgroundColor:'red',
    // marginTop: 30,
    // justifyContent:'center',
    alignSelf: 'center',
  },
});
