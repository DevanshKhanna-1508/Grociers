import {View, Text} from 'react-native';
import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';

const DropBox = (data) => {
  return (
    <View>

      <View style={{marginTop: 20}}>
        <View
          style={{
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            paddingHorizontal: 10,
            paddingTop: 10,
            borderColor: 'gray',
          }}
        >
          <Text style={{fontWeight: '700', fontSize: 20}}>Product Details</Text>
          <AntDesign name="down" size={24} color="black" />
        </View>
        <View style={{width: '90%', marginLeft: 15}}>
          <Text style={{fontSize: 14}}>
            {data.name}
          </Text>
        </View>

      </View>
      <View style={{marginTop: 20}}>
        <View
          style={{
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            paddingHorizontal: 10,
            paddingTop: 10,
            borderColor: 'gray',
          }}
        >
          <Text style={{fontWeight: '700', fontSize: 20}}>Nutritious</Text>
          <View style={{flexDirection: 'row', columnGap: 10}}>

            <View
              style={{
                alignContent: 'center',
                backgroundColor: 'lightgray',
                borderRadius: 10,
                borderColor: 'lightgray',
                justifyContent: 'center',
                borderWidth: 2,
                elevation: 2,
              }}
            >
              <Text style={{fontSize: 14}}>
                100grm
              </Text>
            </View>
            <AntDesign name="right" size={24} color="black" />

          </View>
        </View>

      </View>

      <View style={{marginTop: 20}}>
        <View
          style={{
            borderTopWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            paddingHorizontal: 10,
            paddingTop: 10,
            borderColor: 'gray',
          }}
        >
          <Text style={{fontWeight: '700', fontSize: 20}}>Nutritious</Text>
          <View style={{flexDirection: 'row', columnGap: 10}}>

            <View
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Entypo name="star" size={24} color="green" />
              <Entypo name="star" size={24} color="green" />
              <Entypo name="star" size={24} color="green" />
              <Entypo name="star" size={24} color="green" />
            </View>
            <AntDesign name="right" size={24} color="black" />

          </View>
        </View>

      </View>

      <View>
        <TouchableOpacity
        activeOpacity={0.6}
          style={{
            alignItems: 'center',
            width: '70%',
            backgroundColor: 'green',
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignSelf: 'center',
            // marginTop: 40,
            height: 80,
            borderRadius: 50,
            elevation: 2,
            marginVertical:20
          }}
        >
          <Text style={{color: 'white', fontSize: 25, fontWeight: '500'}}>
            Add to Basket
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default DropBox;
