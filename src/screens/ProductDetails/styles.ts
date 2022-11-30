import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FavoriteButton = styled.TouchableOpacity`
  padding: 8px;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 20px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
  padding: 16px 0;
  background-color: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;
  overflow: hidden;

  margin: 0 0 20px 0;
`;

export const Title = styled.Text`
  font-family: ${styles.fonts.medium};
  font-size: ${styles.sizes.highlight};
  color: ${styles.colors.heading};
  line-height: 22px;
  max-height: 40px;
`;

export const Description = styled.Text`
  font-family: ${styles.fonts.regular};
  font-size: ${styles.sizes.body};
  color: ${styles.colors.body};

  margin-top: 10px;
  line-height: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Box = styled.View`
  height: 50px;
  width: 150px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;
`;

export const ProductPrice = styled.Text`
  font-family: ${styles.fonts.medium};
  font-size: ${styles.sizes.highlight};
  color: ${styles.colors.blue};
`;

export const ProductAmount = styled.TextInput`
  font-family: ${styles.fonts.medium};
  font-size: ${styles.sizes.highlight};
  color: ${styles.colors.heading};

  flex: 1;
  text-align: center;
  max-width: 30px;
`;

export const Minus = styled.TouchableOpacity`
  color: ${styles.colors.red};
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

export const Plus = styled.TouchableOpacity`
  color: ${styles.colors.blue};
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`;
