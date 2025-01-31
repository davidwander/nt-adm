import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { House, MessageCircleMore, Presentation, SwatchBook } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          minHeight: 74,
        },
        tabBarItemStyle: {
          paddingBottom: 34,
          paddingTop: 14,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.violet[100],
        tabBarInactiveTintColor: colors.purple[100],
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          tabBarIcon: ({ size, color }) => (
            <House size={size} color={color}/>
          ),
        }}
      />
      <Tabs.Screen name="chat" 
        options={{
          tabBarIcon: ({ size, color }) => (
            <MessageCircleMore size={size} color={color}/>
          ),
        }}
      />
      <Tabs.Screen name="meeting" 
        options={{
          tabBarIcon: ({ size, color }) => (
            <SwatchBook size={size} color={color}/>
          ),
        }}
      />
    </Tabs>
  )
}