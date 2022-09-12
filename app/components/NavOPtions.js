import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectOrigin } from "../../slices/navSlice";
import { data } from "../data/navOPtions";

const NavOPtions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <ScrollView>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`my-5`}>
            <TouchableOpacity
              onPress={() => navigation.navigate(item.screen)}
              style={tw`bg-gray-200 p-2 pb-8 px-8 mr-3 rounded items-center`}
              disabled={!origin}
            >
              <View style={tw`${!origin && "opacity-60"}`}>
                <Image
                  style={{ width: 120, height: 120, resizeMode: "contain" }}
                  source={{ uri: item.image }}
                />
                <Text style={tw`text-[16px] font-semibold text-center mt-3`}>
                  {item.title}
                </Text>
                <Icon
                  style={tw`p-2 bg-black rounded-full mt-3 w-10`}
                  name="arrowright"
                  color="white"
                  type="antdesign"
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default NavOPtions;
