import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {mycolors} from '../Utilities/mycolors';
import {Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { authentication, database } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import uuid from 'react-native-uuid';



const SignUpScreen = () => {
  const [isVisible, setisVisible] = useState (true);
  const [userDetails, setuserDetails] = useState({
    email: '',
    password: '',
    username:''
  });
  const {email,password,username}= userDetails;
  const uid=uuid.v4()
  const userAccount=()=>{
    createUserWithEmailAndPassword(authentication,email,password)
  .then(() => {
    nav.navigate('Login')
    setDoc(doc(database,"User",uid),{
      name:username,
      email:email,
      id:authentication.currentUser.uid
    });
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    }

    console.error(error);
  });
  }
  const nav=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.ima}>
          <Image style={styles.image} source={require ('../assets/logo.png')} />
          <Text
            style={{
              alignSelf: 'center',
              letterSpacing: 5,
              fontSize: 20,
              color: '#0c3f03',
            }}
          >
            PICK GOOD
          </Text>
        </View>
        <View style={styles.signUp}>
          <Text style={styles.signupText}>Sign Up</Text>
          <Text style={{color: '#302929', fontSize: 16}}>
            Enter your credentials to continue.
          </Text>
          <View style={{marginTop: 30}}>
            <TextInput
            value={username}
            onChangeText ={(text)=>setuserDetails({...userDetails,username:text})}
              autoCapitalize="characters"
              placeholder="Username"
              style={{
                fontSize: 20,
                borderColor: '#514e4e',
                borderBottomWidth: 3,
              }}
            />
          </View>
          <View style={{marginTop: 40}}>
            <TextInput
             value={email}
             onChangeText={(text) => setuserDetails({...userDetails, email: text})}
              placeholder="Email"
              keyboardType="email-address"
              style={{
                fontSize: 20,
                borderColor: '#514e4e',
                borderBottomWidth: 3,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 40,
              borderColor: '#514e4e',
              borderBottomWidth: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 10,
            }}
          >
            <TextInput
            value={password}
            onChangeText={(text) => setuserDetails({...userDetails, password: text})}
              secureTextEntry={isVisible}
              placeholder="Password"
              style={{fontSize: 20, flex: 0.9}}
            />
            <Ionicons
              onPress={() => setisVisible (!isVisible)}
              name={isVisible === true ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="black"
            />
          </View>

          <View style={{marginTop: 5}}>
            <Text
              style={{fontSize: 15, fontWeight: '500', letterSpacing: 0.7}}
              numberOfLines={2}
            >
              By continuing you agree to our <Text style={{color:'green'}}>Terms of Service</Text> and <Text style={{color:'green'}}>Privacy Policy</Text> 

            </Text>
          </View>

          <View style={{}}>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={userAccount}
              style={{
                marginTop: 40,
                backgroundColor: mycolors.primary,
                width: 200,
                height: 80,
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: mycolors.secondary,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                columnGap: 20,
                marginTop: 20,
              }}
            >
              <Entypo name="google-" size={24} color="red" />
              <Entypo name="facebook-with-circle" size={24} color="blue" />
            </View>
            <View style={{ flexDirection:'row',alignSelf:'center',marginBottom:20,marginTop:10}}>
              <Text style={{fontWeight: '700', fontSize: 15}}>
                Already have an account?
              </Text>
                <TouchableOpacity onPress={()=> nav.navigate('Login')}>
                  <Text style={{fontSize:15,fontWeight:'700',color:'green'}}>Login</Text>
                </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create ({
  box: {
    flexDirection: 'column',
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    alignSelf:'center'
  },
  container: {
    backgroundColor: mycolors.primary,
    flex: 1,
    flexDirection: 'row',
  },
  ima: {
    alignSelf: 'center',
    marginTop: 50,
  },
  image: {
    width: 150,
    height: 150,
  },
  signUp: {
    paddingLeft: 20,
    marginTop: 30,
    paddingRight: 15,
  },
  signupText: {
    fontSize: 30,
    fontWeight: '800',
  },
});
