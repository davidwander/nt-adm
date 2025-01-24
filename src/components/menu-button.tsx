import { Pressable } from "react-native";
import { ChartNoAxesGantt } from "lucide-react-native"

export function MenuButton() {
  return (
    <Pressable>
      <ChartNoAxesGantt color="white" size={33} />
    </Pressable>
  )
}