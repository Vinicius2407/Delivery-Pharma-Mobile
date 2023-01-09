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

export const ProductInCart = styled.TouchableOpacity`
  padding: 8px;
  background: ${styles.colors.blue};
  border: 1px solid ${styles.colors.blue};
  border-radius: 20px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 150px;
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

export const UseContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;
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
  width: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;
`;

export const RecipeContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  /* background: rgba(255, 193, 7, 0.2); */
  background: ${styles.colors.red};
  
  /* border: 1px solid #ffc107; */
  border-radius: 10px;
`;

export const ProductPrice = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 18px;
  background: ${styles.colors.contrast};
  border: 1px solid ${styles.colors.border};
  border-radius: 10px;
`;

export const Price = styled.Text`
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
  flex: 1;
  color: ${styles.colors.red};
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 8px;
`;

export const Plus = styled.TouchableOpacity`
  flex: 1;
  color: ${styles.colors.blue};
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 8px;
`;

export const ButtonAddProductToCart = styled.TouchableOpacity`
  flex: 1;
  background: ${styles.colors.blue};
  border-radius: 10px;
  margin-left: 16px;
  height: 46px;

  align-items: center;
  justify-content: center;
`;
