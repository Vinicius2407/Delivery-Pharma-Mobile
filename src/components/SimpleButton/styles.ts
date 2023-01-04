import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const Button = styled.TouchableOpacity`
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    padding: 12px;
    justify-content: center;
    align-items: center;
`

export const ButtonTitle = styled.Text`
    text-align: center;
    color: ${styles.colors.contrast};
    font-family: ${styles.fonts.medium};
    font-size: ${styles.sizes.body};
`