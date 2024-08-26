import { icons, images } from "@/constant";
import { formatDate, formatTime } from "@/lib/utils";
import { Ride } from "@/types/type";
import { Image, Text, View } from "react-native";

export default function RideCard({
  ride: {
    origin_address,
    destination_address,
    origin_latitude,
    destination_latitude,
    destination_longitude,
    ride_time,
    fare_price,
    payment_status,
    driver_id,
    user_email,
    created_at,
    driver,
  },
}: {
  ride: Ride;
}) {
  return (
    <View className="mx-3 my-1 px-3 py-3 bg-white rounded-lg">
      <View className=" flex flex-row items-center mb-2">
        <Image
          source={{
            uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
          }}
          className=" w-[80px] h-[90px]  rounded-md"
        />
        <View className=" px-4 flex flex-col gap-y-3">
          <View className="flex flex-row items-center gap-x-1">
            <Image source={icons.to} className="w-[18px] h-[18px] " />
            <Text className="font-JakartaMedium text-sm capitalize">
              {origin_address}
            </Text>
          </View>
          <View className="flex flex-row items-center  gap-x-1">
            <Image source={icons.point} className="w-[20px] h-[20px]" />
            <Text className=" font-JakartaMedium text-sm capitalize">
              {destination_address}
            </Text>
          </View>
        </View>
      </View>

      <View className="bg-[#F6F8FA] rounded-lg">
        <View className="flex flex-row justify-between items-center  px-4 py-2 border-b-[0.3px] border-white ">
          <Text className="  font-JakartaExtraLight text-base capitalize">
            Date & Time
          </Text>
          <Text className=" font-JakartaBold text-base capitalize">
            {formatDate(created_at)} {formatTime(ride_time)}
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center  px-4 py-2 border-b-[0.3px] border-white ">
          <Text className="  font-JakartaExtraLight text-base capitalize">
            Driver
          </Text>
          <Text className=" font-JakartaBold text-base capitalize">
            {driver?.first_name}
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center  px-4 py-2 border-b-[0.3px] border-white">
          <Text className="  font-JakartaExtraLight text-base capitalize">
            Car Seat
          </Text>
          <Text className=" font-JakartaBold text-base capitalize">
            {driver.car_seats}
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center  px-4 py-2 border-b-[0.3px] border-white">
          <Text className="  font-JakartaExtraLight text-base capitalize">
            Payment Status
          </Text>
          <Text
            className={`font-JakartaBold text-base capitalize ${payment_status !== "Paid" ? " text-green-600" : " text-red-500"}`}
          >
            {payment_status}
          </Text>
        </View>
      </View>
    </View>
  );
}
