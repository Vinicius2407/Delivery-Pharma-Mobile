import { useState } from "react";
import { TextInputProps } from "react-native";
import * as Icon from "phosphor-react-native";

import {
  Container,
  IconContainer,
  InputContainer,
  Label,
  TextInput,
} from "./styles";
import { styles } from "../../globals/styles.global";

interface InputProps extends TextInputProps {
  inputRef?: any;
  label?: string;
  icon?: keyof typeof Icon;
  type?: "text" | "password";
}

export function Input({
  inputRef,
  label,
  icon,
  type = "text",
  ...props
}: InputProps) {
  const CustomIcon = icon ? (Icon[icon] as any) : null;
  const isPassword = type === "password";

  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  function handleToggleSecureTextEntry() {
    setSecureTextEntry(!secureTextEntry);
  }

  return (
    <Container>
      {label && <Label>{label}</Label>}

      <InputContainer>
        {icon && (
          <IconContainer disabled>
            <CustomIcon color={styles.colors.heading} size={25} />
          </IconContainer>
        )}

        <TextInput
          {...props}
          ref={inputRef}
          selectionState={undefined}
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
        />

        {isPassword && (
          <IconContainer
            style={{ alignItems: "flex-end" }}
            activeOpacity={0.6}
            onPress={handleToggleSecureTextEntry}
          >
            {secureTextEntry ? (
              <Icon.EyeSlash color={styles.colors.heading} size={25} />
            ) : (
              <Icon.Eye color={styles.colors.heading} size={25} />
            )}
          </IconContainer>
        )}
      </InputContainer>
    </Container>
  );
}
