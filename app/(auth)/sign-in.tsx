import CustomeButton from "@/components/customeButton";
import InputFeildTextInput from "@/components/inputFeildTextinput";
import OAuth from "@/components/oAuth";
import { icons, images } from "@/constant";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Modal, ScrollView, Text, View } from "react-native";

export default function SignIn() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");

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

        <View className="flex justify-center items-center mt-3">
          <Text className="text-md font-JakartaBold">
            Don't have an account?
            <Link href="/sign-up" className=" text-blue-400">
              {" "}
              Sign up
            </Link>
          </Text>
        </View>

        <Modal animationType="slide" transparent={true} visible={true}>
          <View className="flex justify-center items-center h-screen mx-4">
            <View className="h-[250] w-full bg-white border border-[#151515] rounded-lg  px-2 py-8">
              <InputFeildTextInput
                label="Otp"
                placeholder="Enter Your Otp"
                icon={icons.lock}
                value={otp}
                onChangeText={(text) => setOtp(text)}
                className="bg-white"
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
