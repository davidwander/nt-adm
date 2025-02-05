import { colors } from "@/styles/colors";
import { House } from "lucide-react-native";
import { Pressable, View, Text } from "react-native";

export function DrawerButton() {
  return (
    <Pressable>
      <View>
        <House size={22} color={colors.violet[200]} />
        <Text>
          Todos Agendamentos
        </Text>
      </View>
    </Pressable>
  )
}