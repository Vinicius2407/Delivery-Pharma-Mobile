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

export const Highlight = styled.Text`
  font-family: ${styles.fonts.medium};
  color: ${styles.colors.heading};
`;

export const Divider = styled.View`
  height: 1px;
  background: ${styles.colors.border};
  margin: 5px 0;
`;
