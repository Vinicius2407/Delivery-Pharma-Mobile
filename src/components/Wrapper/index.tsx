import { Container, Content } from "./styles";

type WrapperProps = {
  children: React.ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
