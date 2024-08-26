import { useSession } from "@/lib/ctx";
import { Redirect } from "expo-router";
import { Text } from "react-native";

export default function IndexScreen() {
  const { session, isLoading } = useSession();

  console.log(session, isLoading);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (session) {
    return <Redirect href="/(root)/(tabs)/home" />;
  }

  return <Redirect href="(auth)/welcome" />;
}
