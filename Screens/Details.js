import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Image} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import DropBox from '../Components/DropBox';
export default function Details (props) {
  let item = props.route.params;

  const nav = useNavigation ();
  const [iconColor, setIconColor] = useState ('black');
  const handleprss = () => {
    setIconColor (iconColor === 'black' ? 'red' : 'black');
  };

  const [countItem, setCountItem] = useState (0);
  const addCount = () => {
    setCountItem (countItem + 1);
  };
  const deletcount = () => {
    if (countItem > 0) {
      setCountItem (countItem - 1);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>

      <View style={{}}>
        <Image
          source={{
            uri: item.coverimg,
          }}
          style={{
            height: 350,
            width: '100%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            resizeMode: 'cover',
          }}
          fadeDuration={800}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            position: 'absolute',
            width: '100%',
            marginTop: 5,
          }}
        >
          <Ionicons
            name="chevron-back-outline"
            size={28}
            color="black"
            onPress={() => nav.goBack ()}
          />
          <Entypo name="share" size={28} color="black" />

        </View>
      </View>

      <View style={{paddingHorizontal: 15}}>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text style={{fontSize: 30, fontWeight: '500'}}>
            {item.name.charAt (0).toUpperCase () + item.name.slice (1)}
          </Text>
          <Ionicons
            onPress={handleprss}
            name="heart-circle-outline"
            size={40}
            color={iconColor}
          />
        </View>

        <View>
          <Text style={{color: 'grey', fontWeight: '400', marginLeft: 10}}>
            1kg, price
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 15,
              marginTop: 20,
            }}
          >

            <AntDesign
              onPress={deletcount}
              name="minus"
              size={24}
              color="black"
            />
            <View
              style={{borderWidth: 2, height: 50, width: 50, borderRadius: 20}}
            >
              <Text
                style={{alignSelf: 'center', fontSize: 30, fontWeight: '500'}}
              >
                {countItem}
              </Text>
            </View>
            <AntDesign onPress={addCount} name="plus" size={24} color="red" />

          </View>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>₹{item.price}</Text>
        </View>
        <DropBox data={(item)}/>
      </View>

    </SafeAreaView>
  );
}
