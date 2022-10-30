import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />

    </View>
  );
}
const RestaurantImage = () => (
    <>
    <Image
    source={{
        uri:"https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdHVyYW50fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    }}
    style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
    <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"  />
    </TouchableOpacity>
    </>
);