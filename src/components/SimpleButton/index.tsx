import { ColorValue, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"
import { Button, ButtonTitle } from "./styles"

interface SimpleButtonProps extends TouchableOpacityProps {
    title: string;
    textStyles?: TextStyle;
    styles?: ViewStyle;
}

export function SimpleButton({ title, textStyles, styles, ...props }: SimpleButtonProps) {
    return (
        <Button 
            style={{...styles}}
            {...props}
        >
            <ButtonTitle style={{...textStyles}}>
                { title }
            </ButtonTitle>
        </Button>
    )
}

