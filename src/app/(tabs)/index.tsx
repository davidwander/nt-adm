import { ImageBackground } from "react-native";
import { Input } from "@/components/input";

export default function Home() {
  return (
    <ImageBackground 
      source={require('@/assets/bg-01.jpg')}
      className="flex-1 pt-16 p-2"
    >
      <Input>
        <Input.Field placeholder="Pesquisar por cliente"/>
      </Input>
    </ImageBackground>
  )
}