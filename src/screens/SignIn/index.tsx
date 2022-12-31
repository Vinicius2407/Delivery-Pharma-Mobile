import { SimpleButton } from "../../components/Button";
import { Input } from "../../components/Input";
import { Wrapper } from "../../components/Wrapper";
import { styles } from "../../globals/styles.global";
import { InputContainer } from "./styles";

export function SignIn() {
    return (
        <Wrapper>
            {/* <InputContainer> */}
            {/* </InputContainer> */}
                <Input  label="Usuário" icon="User" />
            <InputContainer>
                <Input type="password" label="Senha" icon="Lock" />
            </InputContainer>

            <SimpleButton title="Entrar" style={{backgroundColor: styles.colors.blue, marginTop: 16}} onPress={() => {}} />
        </Wrapper>
    )
}