import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const Item = styled.TouchableOpacity`
  flex: 1;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;
  padding: 15px;
`;

export const Title = styled.Text`
  font-family: ${styles.fonts.medium};
  font-size: ${styles.sizes.normal};
  height: 32px;
`;

export const Price = styled.Text`
  font-family: ${styles.fonts.medium};
  font-size: ${styles.sizes.body};
  color: ${styles.colors.red};
`;

export const BoxQuantity = styled.View`
  background: #f1f3f5;
  padding: 2px 4px;
  border-radius: 6px;
  border: 1px solid ${styles.colors.border};
`;
