import React, { useRef } from "react";
import { Image, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Map from "./map";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetView,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { icons, images } from "@/constant";
import { router } from "expo-router";

export default function RideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView>
      <View className=" flex-1 bg-white">
        <View className=" flex-1 h-screen">
          <View className="absolute  top-10 left-3 z-30 ">
            <TouchableOpacity
              className=" flex flex-row"
              onPress={() => router.back()}
            >
              <Image
                source={icons.backArrow}
                className=" w-[40] h-[40]"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Map />
        </View>
      </View>
      {/* {children} */}
      <BottomSheet ref={bottomSheetRef} snapPoints={["40%", "85%"]}>
        <BottomSheetView>{children}</BottomSheetView>
        {/* <BottomSheetView>
          <Text>Awesome 🎉</Text>
        </BottomSheetView> */}
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
