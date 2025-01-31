import { FlatList, ImageBackground, Text } from "react-native";
import { Input } from "@/components/input";
import { MenuButton } from "@/components/menu-button";
import { Client } from "@/components/client";
import { CLIENTS } from "@/utils/clients";

export default function Home() {
  return (
    <ImageBackground 
      source={require('@/assets/bg-01.jpg')}
      className="flex-1 pt-16 p-2"
    >
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar por cliente"/>
      </Input>

      <FlatList 
        data={CLIENTS}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Client data={item}/>}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-500 text-sm font-subtitle mt-6">
            Agendamentos
          </Text>
        )}
      />
    </ImageBackground>
  )
}