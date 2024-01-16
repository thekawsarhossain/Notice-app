import React from 'react'
import { Pressable, Text } from 'react-native'

interface Props {
    title: string;
    onPress: () => void;
    className?: string;
    type?: "primary" | "secondary";
}

const buttonClassesMap = {
    common: "flex items-center justify-center w-40 h-12 rounded-lg",
    primary: "bg-black",
    secondary: "bg-gray-100 border border-gray-400",
};

const Button: React.FC<Props> = ({ title, type = "primary", onPress, className }) => {
    const classNames = [buttonClassesMap.common, buttonClassesMap[type], className].join(" ");

    return (
        <Pressable onPress={onPress} className={classNames}>
            <Text className={`${type === "primary" ? "text-white" : "text-black"}`}>{title}</Text>
        </Pressable>
    )
}

export default Button;