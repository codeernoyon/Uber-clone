import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectTravelTimeInformation } from "../../slices/navSlice";
import { data } from "../data/RideOptionsData";

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const SUGA_CHAGE_RATE = 1.5;

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`flex-row px-5 items-center`}>
        <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")}>
          <Icon
            name="chevron-left"
            type="font-awesome"
            size={18}
            color="black"
          />
        </TouchableOpacity>
        <Text style={tw`flex-1 text-center font-semibold text-[20px]`}>
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image, multiplier, title }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-8 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              source={{
                uri: image,
              }}
              style={{
                height: 100,
                width: 100,
                resizeMode: "contain",
              }}
            />
            <View style={tw`-ml-8`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <View>
              <Text>
                {new Intl.NumberFormat("en-gb", {
                  style: "currency",
                  currency: "GBP",
                }).format(
                  (travelTimeInformation?.duration?.value *
                    SUGA_CHAGE_RATE *
                    multiplier) /
                    100
                )}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black m-4 py-3 rounded-full ${
            !selected && "bg-gray-300"
          }`}
        >
          <Text style={tw`text-white text-center font-semibold text-[16px]`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
