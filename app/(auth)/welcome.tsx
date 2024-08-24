import CustomeButton from "@/components/customeButton";
import { onboarding } from "@/constant";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

export default function Onboarding() {
  const swiperRef = useRef<Swiper>(null);
  const [swipercount, setSwipercount] = useState(0);

  return (
    <SafeAreaView className="flex-1 bg-[#151515]">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="flex justify-end items-end mr-4"
      >
        <Text className="font-JakartaExtraBold   text-md capitalize text-white">
          skip
        </Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        index={swipercount}
        loop={false}
        dot={<View className="w-10  h-2 mx-1 bg-[#777575] rounded-lg" />}
        activeDot={<View className="w-10  h-2 mx-1 bg-white rounded-lg" />}
        onIndexChanged={(index) => setSwipercount(index)}
      >
        {onboarding.map((item, index) => {
          return (
            <View
              key={index}
              className="flex  items-center justify-center  p-5"
            >
              <Text className="text-3xl  text-warning-100  font-JakartaBold">
                {item.title}
              </Text>
              <Text className="text-md mt-3 text-warning-100 font-JakartaExtraLight">
                {item.description}
              </Text>
              <Image
                resizeMode="contain"
                source={item.image}
                className="w-full h-[300px] mt-3"
              />
            </View>
          );
        })}
      </Swiper>

      <CustomeButton
        onPress={() => {
          if (swipercount + 1 < onboarding.length) {
            swiperRef.current?.scrollBy(1);
          } else {
            router.replace("/(auth)/sign-in");
          }
        }}
        title="continue"
        bgVariant="primary"
        className=" mx-6 mb-32 "
      />
    </SafeAreaView>
  );
}
