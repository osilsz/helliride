import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "@/types/type";

const getBgVarientStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-black  border-2";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-green-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-white shadow-blue-500";
  }
};

const getTextVarient = (textVariant: ButtonProps["textVariant"]) => {
  switch (textVariant) {
    case "success":
      return "text-white";
    case "primary":
      return "text-gray-300";
    case "danger":
      return "text-red-800";
    default:
      return "text-black";
  }
};

const CustomeButton = ({
  onPress,
  className,
  IconLeft,
  IconRight,
  title,
  bgVariant = "primary",
  textVariant = "default",
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex flex-row justify-center items-center shadow-2xl  rounded-full ${getBgVarientStyle(bgVariant)} ${className}`}
      {...rest}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={`capitalize font-JakartaBold text-lg py-3 ${getTextVarient(textVariant)}`}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomeButton;
