import { TextInput, View } from "react-native";

export default function GoogleSearchInput() {
  return (
    <View className="my-3">
      <TextInput
        placeholder="Search Here"
        className="w-full h-[50px] bg-white   rounded-full px-3 font-JakartaMedium text-md"
      />
    </View>
  );
}
