import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const ExclusiveBar = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginTop: 20,
          alignItems: 'center',
        }}
      >
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Exclusive Offer</Text>
        <TouchableOpacity>
          <Text style={{color: 'green', fontSize: 15}}>See all</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ExclusiveBar