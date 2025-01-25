import { Image, ImageProps } from "react-native";

type AvatarProps = ImageProps & {
  size?: "small" | "medium"
}

export function Avatar({ size = "medium", ...rest }: AvatarProps) {
  return <Image className="w-8 h-8 rounded-full" {...rest} />
}