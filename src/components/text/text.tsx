import React, { ReactNode } from 'react';
import {  Text, TextProps } from 'react-native';

type CustomTextProps = {
    weight?: "400" | "700";
    children: ReactNode;
} & TextProps;

const defaultProps = {
    weight: "700"
}

export default function TextComponent({ children, style, weight, ...props }: CustomTextProps) {
    let fontFamily = weight === "400" ? "DeliusUnicase_400Regular" : "DeliusUnicase_700Bold";
    return (
        <Text {...props} style={[{ fontFamily }, style]}>
            {children}
        </Text>
    )
}

TextComponent.defaultProps = defaultProps;