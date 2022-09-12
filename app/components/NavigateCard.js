import { GOOGLE_MAPS_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import { setDestination } from "../../slices/navSlice";
import NavFavorites from "./NavFavorites";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1 px-1`}>
      <Text style={tw`text-center text-xl pb-5`}>Good Morning Noyon</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          // styles={toInputStyle}
          placeholder="Where From?"
          styles={toInputStyle}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("RideOptionsCard");
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: "en",
          }}
          nearbyPlacesAPI="googlePlaceSearch"
          debounce={400}
        />
      </View>
      <View style={tw`flex-1 `}>
        <NavFavorites className={"py-5 px-3"} />
        <View
          style={tw`pl-2 flex-1 absolute bottom-5 flex-row justify-center items-center`}
        >
          <TouchableOpacity
            style={tw`bg-black px-16 rounded-full py-5 mr-1 flex-row`}
            onPress={() => navigation.navigate("RideOptionsCard")}
          >
            <Icon name="car" type="font-awesome" size={18} color="white" />
            <Text style={tw`text-white font-semibold ml-2`}>Ride</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`border-4 px-16 rounded-full py-4 mr-3 flex-row`}
          >
            <Icon
              name="fast-food-outline"
              type="ionicon"
              size={18}
              color="black"
            />
            <Text style={tw`font-semibold ml-2`}>Foods</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    padding: 2,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    paddingBottom: 0,
  },
});
