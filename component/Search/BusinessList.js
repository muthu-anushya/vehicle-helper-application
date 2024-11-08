import { View, Text } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native";
import BusinessItem from "./BusinessItem";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function BusinessList({ placeList }) {
  const navigation = useNavigation();
  return (
    <View>
      <LinearGradient
        colors={["transparent", "white"]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
        <FlatList
          data={placeList}
          horizontal={true}
          renderItem={({ item, index }) =>
            index <= 10 && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("place-detail", {
                    place: item,
                  })
                }
              >
                <BusinessItem place={item} />
              </TouchableOpacity>
            )
          }
        />
      </LinearGradient>
    </View>
  );
}
