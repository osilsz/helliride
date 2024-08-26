import CustomeButton from "@/components/customeButton";
import InputFeildTextInput from "@/components/inputFeildTextinput";
import OAuth from "@/components/oAuth";
import { icons, images } from "@/constant";
import { useSession } from "@/lib/ctx";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, Modal, ScrollView, Text, View } from "react-native";

export default function SignIn() {
  const { signIn } = useSession();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const [otp, setOtp] = useState("");

  const handlerSignInPress = () => {
    // Send the user information to the server for registration.
    // Then navigate to the main screen.
    if (!userInfo.email && !userInfo.password) {
      return;
    }
    signIn({ email: userInfo.email, password: userInfo.password });
    setShowOtpModal(true);
  };

  const handlerOtpCheckHandler = () => {
    // Send the OTP to the user for verification.
    // Then navigate to the main screen.
    if (otp === "123456") {
      setShowOtpModal(false);
      setSuccessModal(true);
      // Navigate to the main screen.
    } else {
      alert("Invalid OTP");
    }
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

        <Modal animationType="slide" transparent={true} visible={showOtpModal}>
          <View className="flex justify-center items-center h-screen mx-6">
            <View className="h-[250] bg-white border border-[#151515] rounded-lg  px-2 py-8">
              <InputFeildTextInput
                label="Otp"
                placeholder="Enter Your Otp"
                icon={icons.lock}
                value={otp}
                onChangeText={(text) => setOtp(text)}
              />
              <CustomeButton
                title="Check"
                onPress={handlerOtpCheckHandler}
                className="mt-6 mx-2"
                bgVariant="secondary"
                textVariant="primary"
              />
            </View>
          </View>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={successModal}>
          <View className="flex justify-center items-center h-screen mx-6">
            <View className="h-[260] w-full  bg-white border border-[#151515] rounded-lg  px-2 py-2">
              <View className="flex flex-col justify-center items-center">
                <Image
                  source={images.check}
                  className="w-[80] h-[80] "
                  resizeMode="contain"
                />
                <Text className="mt-1 text-center text-lg font-JakartaBold">
                  Verified
                </Text>
                <Text className="mt-1 text-center text-md font-JakartaExtraLight w-[80%]">
                  You have successfully verified your account.
                </Text>
              </View>
              <CustomeButton
                title="Go To Home Page"
                onPress={() => {
                  router.push("/(root)/(tabs)/home");
                  setSuccessModal(false);
                }}
                className="mt-3 mx-2"
                bgVariant="secondary"
                textVariant="primary"
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
