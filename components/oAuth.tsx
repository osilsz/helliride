import { Image, Text, View } from "react-native";
import CustomeButton from "./customeButton";
import { icons } from "@/constant";

export default function OAuth() {
  const handlerSignInWithGooglePress = () => {
    // Implement Google OAuth flow here
  };

  return (
    <View className="mt-4">
      <View className=" flex flex-row   items-center">
        <View className="flex-1 h-[0.5] bg-slate-500"></View>

        <View className="mx-4">
          <Text className="  text-xs font-JakartaBold">Or</Text>
        </View>

        <View className="flex-1 h-[0.5] bg-slate-500"></View>
      </View>

      <CustomeButton
        title="Log In With Google"
        onPress={handlerSignInWithGooglePress}
        className="mt-4 mx-2"
        bgVariant="outline"
        IconLeft={() => (
          <Image
            source={icons.google}
            className="w-6 h-6 mr-3"
            resizeMode="contain"
          />
        )}
      />
    </View>
  );
}
