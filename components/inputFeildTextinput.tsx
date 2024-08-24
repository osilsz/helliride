import { InputFieldProps } from "@/types/type";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function InputFeildTextInput({
  secureTextEntry = false,
  placeholder,
  label,
  icon,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className=" my-1  w-full ">
          <Text
            className={`text-lg font-JakartaExtraBold px-2 py-1 ${labelStyle}`}
          >
            {label}
          </Text>

          <View
            className={`mx-2  flex flex-row  items-center border-2 rounded-2xl px-2 py-2 focus:border-gray-500 ${containerStyle}`}
          >
            {icon && (
              <Image
                source={icon}
                resizeMode="contain"
                className={`w-5 h-5 ${iconStyle}`}
              />
            )}

            <TextInput
              placeholder={placeholder}
              className={`font-JakartaLight text-md w-full px-2 ${inputStyle}`}
              secureTextEntry={secureTextEntry}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
