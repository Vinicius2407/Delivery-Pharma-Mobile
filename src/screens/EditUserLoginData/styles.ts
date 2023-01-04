import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const ButtonIsPasswordEditable = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 32px;
    background: ${styles.colors.contrast};
    border: 1px solid ${styles.colors.border};
    padding: 10px;
    border-radius: 10px;
`;
