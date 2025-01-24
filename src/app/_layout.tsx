import "@/styles/global.css"; 

import { Slot } from "expo-router";
import  { StatusBar } from "expo-status-bar";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar 
        style="light" 
        translucent
      />
      <Slot />
    </GestureHandlerRootView>
  )
}