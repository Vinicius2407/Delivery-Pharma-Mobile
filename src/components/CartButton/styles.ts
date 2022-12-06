import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #1a69bd1a;
    border: 1px solid ${styles.colors.blue};
    border-radius: 10px;
    color: ${styles.colors.contrast};
    padding: 13px 15px;
`;

export const Title = styled.Text`
  font-family: ${styles.fonts.regular};
  font-size: ${styles.sizes.body};
  color: ${styles.colors.blue};
`;
