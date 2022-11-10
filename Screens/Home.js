import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Categories from '../Components/Categories';
import HeaderTabs from '../Components/HeaderTabs';
import RestaurantItems, {
  localRestaurants,
 } from '../Components/RestaurantItems';
import SearchBar from '../Components/SearchBar';

const YELP_API_KEY =
 "Syow-ME06fHEh0GAvX9vHbnTX9v6wMOOyKrRLumecZ2rNEPLZoPXSIlPLF9x5fAdibhq9TaGAIK2UrP85KDDCEpgJbKA2g75cQHeUZ-pdV_sAg_GTLMDDfmmCqBsY3Yx";

export default function Home() {
  const[restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurantFromYelp = () => {
      const yelpurl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Punjab India";


  const apioptions = {
      headers: {
        authorizations: `Bearer ${YELP_API_KEY}`,
      }}

      return fetch(yelpurl, apioptions)
      .then((res) =>res.json())
      .then((json) =>setRestaurantData(json.businesses));
  };
  useEffect(() => {
    // getRestaurantFromYelp();
  } , []);
return (
  <SafeAreaView style={{ backgroundColor: "#eee", flex: 1}}>
  <View style={{ backgroundColor:"#fff", padding: 15}}>
   <HeaderTabs />
   <SearchBar />
  </View>
  <ScrollView showsVerticalScrollIndicator={false}>
    <Categories />
    <RestaurantItems restaurantData={restaurantData} />
    </ScrollView>
  </SafeAreaView>
);
}