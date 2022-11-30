import styled from "styled-components/native";
import { styles } from "../../globals/styles.global";

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${styles.fonts.medium};
  font-size: ${styles.sizes.heading};
  color: ${styles.colors.heading};
`;

export const LogOutButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const Column = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const UserAvatar = styled.View`
  margin-top: 36px;
  background: ${styles.colors.border};
  height: 150px;
  width: 150px;
  border-radius: 75px;

  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  border: 1px solid #FFF;
  padding: 10px;
  align-items: center;
  justify-content: center;
`; 