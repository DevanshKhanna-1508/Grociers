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
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {authentication} from '../firebaseConfig';

const LoginScreen = () => {
  const [isVisible, setisVisible] = useState (true);
  const nav = useNavigation ();
  const [loginDetails, setloginDetails] = useState ({
    email: '',
    password: '',
  });
  const {email, password} = loginDetails;
  const loginUser = () =>{
    signInWithEmailAndPassword (authentication, email, password)
      .then ((val) => {
        nav.replace('Home');
      })
      .catch ((err) => {
        Alert.alert (err.message);
      });
  };
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
          <Text style={styles.signupText}>Welcome Back....</Text>
          <Text style={{color: '#302929', fontSize: 16}}>
            Enter your credentials to continue.
          </Text>
          <View style={{marginTop: 30}}>
            <TextInput
              value={email}
              onChangeText={text =>
                setloginDetails ({...loginDetails, email: text})}
              keyboardType="email-address"
              placeholder="Email"
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
              onChangeText={text =>
                setloginDetails ({...loginDetails, password: text})}
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
            <Text style={{fontSize: 15, fontWeight: '500', textAlign: 'right'}}>
              Forgot Password?
            </Text>
          </View>

          <View style={{}}>
            <TouchableOpacity
              onPress={loginUser}
              activeOpacity={0.8}
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
                Login
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
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <Text style={{fontWeight: '700', fontSize: 15}}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => nav.navigate ('SignUp')}>
                <Text style={{fontSize: 15, fontWeight: '700', color: 'green'}}>
                  Sign UP
                </Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create ({
  box: {
    flexDirection: 'column',
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    alignSelf: 'center',
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
