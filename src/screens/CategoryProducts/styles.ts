import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 8px;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-family: ${styles.fonts.medium};
  font-size: ${styles.sizes.heading};
  color: ${styles.colors.heading};

  margin-left: 20px;
`;
