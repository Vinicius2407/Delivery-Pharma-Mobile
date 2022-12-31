import styled from "styled-components/native";

export const styles = {
  colors: {
    background: "#f1f3f5",
    contrast: "#ffffff",
    heading: "#2f2f2f",
    body: "#555555",
    border: "#dfdfdf",
    green: "#399153",
    red: "#db4040",
    blue: "#1a69bd",

    opaques: {
      green: "#39915310",
      blue: "#1a69bd10",
    },
  },
  fonts: {
    regular: "gelion-regular",
    medium: "gelion-medium",
    bold: "gelion-bold",
  },
  sizes: {
    heading: "24px",
    highlight: "18px",
    body: "16px",
    normal: "14px",
    small: "12px",
  },
};

export const Text = styled.Text`
  font-family: ${styles.fonts.regular};
  font-size: ${styles.sizes.body};
  color: ${styles.colors.body};
`;

export const Highlight = styled.Text`
  font-family: ${styles.fonts.medium};
  color: ${styles.colors.heading};
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${styles.colors.border};
  margin: 5px 0;
`;

export const VerticalDivider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${styles.colors.border};
  margin: 5px 0;
`;

export const Box = styled.View`
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  background: transparent;
`;

export const RowJustifyCenter = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RowJustifyBetween = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const ColumnJustifyBetween = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  margin-top: 16px;
`;

