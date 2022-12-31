import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const InputMultiline = styled.TextInput`
  flex: 1;
  font-family: ${styles.fonts.regular};
  font-size: ${styles.sizes.body};
  color: ${styles.colors.heading};
  background-color: ${styles.colors.contrast};
  padding: 10px;
`;