import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import React from 'react';
// import { StatusBar } from "expo-status-bar";
import {Vegitables, fruits} from '../Utilities/data';
import HomeTopSection from '../Components/HomeTopSection';
import ExclusiveBar from '../Components/ExclusiveBar';
import GroceryItem from '../Components/GroceryItem';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{marginLeft: 20, marginRight: 20, flex: 1}}>
      <StatusBar backgroundColor={'black'}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 25,gap:20}}>
          <HomeTopSection />
          <ExclusiveBar />
          <GroceryItem data={fruits} />
          <ExclusiveBar />
          <GroceryItem data={Vegitables} />
          <ExclusiveBar />
          <GroceryItem data={fruits} />
          <ExclusiveBar />
          <GroceryItem data={Vegitables} />

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
