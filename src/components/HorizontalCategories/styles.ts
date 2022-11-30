import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const Container = styled.View`
  background: ${styles.colors.background};
  margin: 0 -16px;
`;

export const ScrollView = styled.ScrollView`
  background: ${styles.colors.background};
`;

export const Card = styled.TouchableOpacity`
  width: 95px;
  padding: 10px;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const CardCategory = styled.TouchableOpacity`
  /* width: 95px; */
  padding: 10px;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${styles.fonts.regular};
  font-size: ${styles.sizes.normal};

  margin-top: 5px;
`;
