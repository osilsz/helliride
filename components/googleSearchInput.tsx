import { GoogleInputProps } from "@/types/type";
import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function GoogleSearchInput({
  handlePress,
  containerStyle,
  initialLocation,
  icon,
}: GoogleInputProps) {
  const [searchText, setSearchText] = useState("");
  const [filterResult, setFilterResult] = useState([]);

  const handler = (searchText: string): void => {
    setSearchText(searchText);
    if (searchText === "" || !searchText) {
      setFilterResult([]);
      return;
    }
    const filter = placesInDhaka.filter((place) =>
      place.address.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilterResult(filter);
  };

  // const handlePress = ({ latitude, longitude, address }) => {
  //   console.log(latitude, longitude, address);
  //   return { latitude: latitude, longitude: longitude, address: address };
  // };
  return (
    <View className="my-3">
      {icon && (
        <Image source={icon} className=" w-[20] h-[20]" resizeMode="contain" />
      )}
      <TextInput
        placeholder="Search Here"
        className={`w-full h-[50px]    rounded-full px-3 font-JakartaMedium text-md relative ${containerStyle ? containerStyle : "bg-white"}`}
        onChangeText={handler}
        // value={initialLocation ? initialLocation : searchText}
        defaultValue={initialLocation}
      />
      {filterResult?.length > 0 && (
        <View className="bg-white  rounded-md p-3  absolute top-14 z-30 h-[230]">
          <FlatList
            data={filterResult}
            renderItem={({ item }, index) => (
              <TouchableOpacity
                key={index} // Use a unique identifier for each item
                onPress={() => {
                  handlePress(item);
                }}
                className="flex flex-row items-center px-2 py-2 border-b-[0.3px] border-gray-300"
              >
                <Text className="font-JakartaMedium text-lg">
                  {item.address}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()} // Use a unique identifier
            showsVerticalScrollIndicator={true}
          />
        </View>
      )}

      {/* <View className="bg-white  rounded-md p-3">
        <TouchableOpacity
          onPress={() => {
            console.log("shjfahfj");
          }}
        >
          <Text className=" font-JakartaMedium  text-lg">Gulsan</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className=" font-JakartaMedium  text-lg">Banani</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className=" font-JakartaMedium  text-lg">Dhanmondi</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className=" font-JakartaMedium  text-lg">Uttara</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className=" font-JakartaMedium  text-lg">Mirpur</Text>
        </TouchableOpacity>
      </View> */}

      {/* <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Search Your Destination"
        debounce={500}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          // handlePress()
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
          language: "en",
        }}
        currentLocation={true}
        currentLocationLabel="Current location"
      /> */}
    </View>
  );
}

const placesInDhaka = [
  // Historical Places
  {
    latitude: 23.7231,
    longitude: 90.3953,
    address: "Lalbagh Fort, Old Dhaka, Dhaka Division",
  },
  {
    latitude: 23.7099,
    longitude: 90.4073,
    address: "Ahsan Manzil, Sadarghat, Dhaka Division",
  },
  {
    latitude: 23.7278,
    longitude: 90.3854,
    address: "Dhakeshwari Temple, Lalbagh, Dhaka Division",
  },
  {
    latitude: 23.727,
    longitude: 90.392,
    address: "Hussaini Dalan, Old Dhaka, Dhaka Division",
  },
  {
    latitude: 23.7557,
    longitude: 90.3732,
    address: "Curzon Hall, Dhaka University, Dhaka Division",
  },
  {
    latitude: 23.7427,
    longitude: 90.403,
    address: "Baitul Mukarram, Gulistan, Dhaka Division",
  },

  // Universities
  {
    latitude: 23.7276,
    longitude: 90.3925,
    address: "University of Dhaka, Shahbagh, Dhaka Division",
  },
  {
    latitude: 23.8131,
    longitude: 90.4253,
    address: "North South University, Bashundhara, Dhaka Division",
  },
  {
    latitude: 23.7479,
    longitude: 90.376,
    address:
      "Bangladesh University of Engineering and Technology (BUET), Dhaka Division",
  },
  {
    latitude: 23.7806,
    longitude: 90.4074,
    address:
      "Independent University, Bangladesh (IUB), Bashundhara, Dhaka Division",
  },
  {
    latitude: 23.8198,
    longitude: 90.4262,
    address:
      "American International University-Bangladesh (AIUB), Kuratoli, Dhaka Division",
  },
  {
    latitude: 23.7838,
    longitude: 90.4007,
    address: "BRAC University, Mohakhali, Dhaka Division",
  },

  // Restaurants
  {
    latitude: 23.7942,
    longitude: 90.4065,
    address: "Star Kabab & Restaurant, Banani, Dhaka Division",
  },
  {
    latitude: 23.7463,
    longitude: 90.3768,
    address: "Cafe Bazar, Pan Pacific Sonargaon, Karwan Bazar, Dhaka Division",
  },
  {
    latitude: 23.8103,
    longitude: 90.4125,
    address: "Nando's, Gulshan 1, Dhaka Division",
  },
  {
    latitude: 23.872,
    longitude: 90.3944,
    address: "Pizza Hut, Uttara, Dhaka Division",
  },
  {
    latitude: 23.7805,
    longitude: 90.4227,
    address: "The Westin Dhaka, Gulshan 2, Dhaka Division",
  },
];
