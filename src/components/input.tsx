import { ReactNode } from "react";
import { colors } from "@/styles/colors";
import { View, TextInput, TextInputProps } from "react-native";

type InputProps = {
  children: ReactNode
}

function Input({ children }: InputProps) {
  return (
    <View 
      className="w-full h-14 bg-gray-800 rounded-lg p-2 flex-row items-center gap-4"
    >
      {children}
    </View>
  )
}

function InputField({ ...rest }: TextInputProps) {
 return (
  <TextInput 
    className="flex-1 font-normal text-base text-white" 
    placeholderTextColor={colors.purple[300]}
    {...rest} 
  />
  )
}

Input.Field = InputField

export { Input }