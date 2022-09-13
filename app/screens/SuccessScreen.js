import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const SuccessScreen = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white h-full justify-center`}>
      <TouchableOpacity
        style={[
          tw`bg-white top-20 p-3 rounded-full shadow-lg`,
          {
            left: 20,
            position: "absolute",
            zIndex: 100,
          },
        ]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon type="antdesign" name="home" color="black" size={16} />
      </TouchableOpacity>
      <View style={tw`self-center`}>
        <View style={tw`p-5 w-full `}>
          <Image
            source={require("../assets/car_animation.gif")}
            style={tw`w-60 h-40`}
          />
        </View>
        <View style={tw`p-5 text-center self-center`}>
          <Text style={tw`font-bold text-lg mb-3 text-center`}>
            Your {data?.title} is on the way
          </Text>
          <Text style={tw`text-base text-center`}>
            Ride cost: <Text style={tw`font-bold`}>${data.price}</Text>
          </Text>
          <Text style={tw`text-base text-center`}>
            Estimated time: <Text style={tw`font-semibold`}>{data.time}</Text>
          </Text>
          <Text style={tw`text-base text-center`}>
            Estimated distance:{" "}
            <Text style={tw`font-semibold`}>{data.distance}</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
