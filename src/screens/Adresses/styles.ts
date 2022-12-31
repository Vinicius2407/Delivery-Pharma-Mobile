import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const AdressContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    border: 1px solid ${styles.colors.border};
    border-radius: 10px;
    margin-top: 16px;
`;

export const Toggle = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 18px 10px;
    border-right-width: 1px;
    border-right-color: ${styles.colors.border};
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 18px 10px;
    border-left-width: 1px;
    border-left-color: ${styles.colors.border};
`;
