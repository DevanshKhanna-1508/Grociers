import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
// import {Vegitables, fruits} from '../Utilities/data';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {FontAwesome} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

const GroceryItem = ({data}) => {
  const nav = useNavigation ();
  const [number, setNumber] = useState(0);
  return (
    <View>
      <View style={{}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.5}
              key={index}
              onPress={()=> nav.navigate('ItemDetails',item) }
              style={{
                height: responsiveHeight (28),
                width: responsiveWidth (45),
                marginRight: 20,
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 15,
              }}
            >
              <Image
                source={{uri: item.img}}
                style={{
                  height: 120,
                  width: 125,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
              />
              <View style={{paddingHorizontal: 10}}>
                <Text style={{fontWeight: '600', fontSize: 18}}>
                  {item.name.charAt (0).toUpperCase() + item.name.slice(1)}
                </Text>
                <Text style={{color: 'grey', fontSize: 15}}>{item.pieces}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}
                  >
                    ₹{item.price}
                  </Text>
                  <TouchableOpacity activeOpacity={0.8}>
                    <FontAwesome name="plus-square" size={50} color="green" />
                  </TouchableOpacity>

                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default GroceryItem;
