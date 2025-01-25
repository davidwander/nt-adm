import { View, Text } from "react-native";
import { Avatar } from "./avatar";

import { MessageCircle } from "lucide-react-native";
import  { ClientDataProps } from "@/utils/clients";

type ClientProps = {
  data: ClientDataProps
}

export function Client({ data }: ClientProps) {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: data.avatar}} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          <MessageCircle
            size={22} 
            color="yellow"
          />

          <Text className="text-lg font-subtitle text-gray-400 flex-1">
            {data.name}
          </Text>

          <Text className="text-sm font-body text-gray-400 pt-2">
            25 de jan.
          </Text>

        </View>
        <Text 
          className="text-base font-body text-gray-400 pt-2"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vitae voluptatum explicabo et impedit voluptates? Quas maxime vero iusto ut? Corrupti aut ipsa repellendus molestias, porro molestiae. Neque, eligendi sed.
        </Text>
      </View>
    </View>

  )
}