import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const Container = styled.View`
  background: ${styles.colors.background};
`;

export const ScrollView = styled.ScrollView`
  background: ${styles.colors.background};
`;

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-family: ${styles.fonts.regular};
  font-size: ${styles.sizes.body};

  margin-top: 5px;
  margin-left: 15px;
`;
