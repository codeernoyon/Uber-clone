import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import tw from "twrnc";
import { data } from "../data/NavFavoritesData";

const NavFavorites = ({ className }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={tw`bg-gray-200 h-1`} />}
      renderItem={({ item: { icon, description, location } }) => (
        <View>
          <TouchableOpacity style={tw`flex-row ${className}`}>
            <Icon
              style={tw`p-3 mr-4 bg-gray-300 rounded-full`}
              name={icon}
              size={18}
              color="white"
            />
            <View style={tw`flex-1`}>
              <Text style={tw`text-lg font-semibold`}>{location}</Text>
              <Text style={tw`text-gray-400`}>{description}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
