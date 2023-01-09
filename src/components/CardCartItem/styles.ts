import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const ImageContainer = styled.View`
    padding: 10px 16px;
    justify-content: center;
    align-items: center;

    border: 1px solid ${styles.colors.border};
    background: ${styles.colors.contrast};
    border-radius: 6px;

    margin-right: 6px;
`;

export const ContainerQuantity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${styles.colors.contrast};
  /* border: 1px solid ${styles.colors.border}; */
  border-radius: 10px;
`;

export const BoxMinus = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const BoxPlus = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 10px;
`;