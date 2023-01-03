import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const InvisibleBox = styled.View`
    pointer-events: none;
    opacity: 0;
`;

export const BoxContainer = styled.View`
    margin-top: 24px;
    width: 100%;
    border: 2px solid ${styles.colors.border};
    border-radius: 6px;
    background-color: ${styles.colors.contrast};
`;

export const BoxContainerTitle = styled.Text`
    width: 100%;
    font-size: 16px;
    text-align: center;
    font-family: ${styles.fonts.bold};
    padding: 6px;
`;

export const BoxContainerLabel = styled.Text`
    font-size: 14px;
    font-family: ${styles.fonts.medium};
    color: ${styles.colors.body};
`;

export const BoxContainerUserInfo = styled.Text`
    font-size: 14px;
    font-family: ${styles.fonts.medium};
    color: ${styles.colors.heading};
`;


export const BoxContainerButton = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 6px;
`;

export const BoxContainerButtonText = styled.Text`
    font-size: 16px;
    font-family: ${styles.fonts.bold};
    color: ${styles.colors.blue};
    margin-right: 10px;
`
