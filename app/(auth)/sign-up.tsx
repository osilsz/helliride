import CustomeButton from "@/components/customeButton";
import InputFeildTextInput from "@/components/inputFeildTextinput";
import OAuth from "@/components/oAuth";
import { icons, images } from "@/constant";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function SignUp() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlerSignInPress = () => {
    // Send the user information to the server for registration.
    // Then navigate to the main screen.
    console.log("Sign Up");
  };

  return (
    <ScrollView className="bg-white  h-full">
      <View className="">
        <Image
          source={images.signUpCar}
          className="w-full h-[250px] "
          resizeMode="cover"
        />

        <InputFeildTextInput
          label="Name"
          placeholder="Enter Your Name"
          icon={icons.person}
          value={userInfo.name}
          onChangeText={(text) => setUserInfo({ ...userInfo, name: text })}
        />

        <InputFeildTextInput
          label="Email"
          placeholder="Enter Your Email Address"
          icon={icons.email}
          value={userInfo.email}
          onChangeText={(text) => setUserInfo({ ...userInfo, email: text })}
        />

        <InputFeildTextInput
          label="Password"
          placeholder="Enter Your Password"
          icon={icons.lock}
          value={userInfo.password}
          onChangeText={(text) => setUserInfo({ ...userInfo, password: text })}
          secureTextEntry={true}
        />

        <CustomeButton
          title="Sign Up"
          onPress={handlerSignInPress}
          className="mt-6 mx-2"
          bgVariant="secondary"
          textVariant="primary"
        />

        <OAuth />
        {/* modal */}
        <View className="flex justify-center items-center mt-3">
          <Text className="text-md font-JakartaBold">
            Already have an account?
            <Link href="/sign-in" className=" text-blue-400">
              {" "}
              Sign In
            </Link>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
