import CustomeButton from "@/components/customeButton";
import GoogleSearchInput from "@/components/googleSearchInput";
import RideLayout from "@/components/ride-layout";
import { useLocationStore } from "@/store";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function FindRoute() {
  const {
    userLatitude,
    userLongitude,
    userAddress,
    destinationLatitude,
    destinationLongitude,
    destinationAddress,
    setUserLocation,
    setDestinationLocation,
  } = useLocationStore();

  return (
    <RideLayout>
      <View className="mx-2">
        <Text className="text-xl font-JakartaMedium">From : </Text>
        <GoogleSearchInput
          containerStyle="bg-gray-200"
          initialLocation={userAddress}
          handlePress={(location) => {
            setUserLocation(location);
          }}
        />
        <Text className=" text-xl font-JakartaMedium">To : </Text>
        <GoogleSearchInput
          containerStyle="bg-gray-200"
          initialLocation={destinationAddress}
          handlePress={(location) => {
            setDestinationLocation(location);
          }}
        />

        <View className="mt-3"></View>
        <CustomeButton
          title="Find Now"
          bgVariant="success"
          onPress={() => router.push("confirm-ride")}
        />
      </View>
    </RideLayout>
  );
}
