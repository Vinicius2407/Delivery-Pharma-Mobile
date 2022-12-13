import { useState } from 'react'
import { TextInput, TextInputProps } from "react-native-paper";
import { GoBackButton } from "../../components/GoBackButton";
import { Wrapper } from "../../components/Wrapper";
import { Highlight, RowJustifyBetween, styles } from "../../globals/styles.global";


export function EditLoginInformations() {
    const [email, setEmail] = useState('');
    const [login, setLogin] = useState('');
    // const [telefone, setTelefone] = useState('');

    return (
        <Wrapper>
            <RowJustifyBetween>
                <GoBackButton />
                <Highlight style={{ fontSize: 16 }}>EDITAR DADOS DE ACESSO</Highlight>
                <GoBackButton disabled style={{ opacity: 0 }} />
            </RowJustifyBetween>

            <TextInput 
                label="E-mail"
                mode="outlined"
                value={email}
                onChangeText={text => setEmail(text)}
                // left={<User color={styles.colors.green} size={15} />}
                outlineColor={styles.colors.heading}
                activeOutlineColor={styles.colors.heading}
                style={{ backgroundColor: styles.colors.contrast, marginTop: 16, fontFamily: styles.fonts.regular, borderRadius: 8 }}
                onPointerEnter={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeave={undefined} 
                onPointerLeaveCapture={undefined} 
                onPointerMove={undefined} 
                onPointerMoveCapture={undefined} 
                onPointerCancel={undefined} 
                onPointerCancelCapture={undefined} 
                onPointerDown={undefined} 
                onPointerDownCapture={undefined} 
                onPointerUp={undefined} 
                onPointerUpCapture={undefined} 
                cursorColor={undefined}
            />
            <TextInput 
                label="Login"
                mode="outlined"
                value={login}
                onChangeText={text => setLogin(text)}
                // left={<User color={styles.colors.green} size={15} />}
                outlineColor={styles.colors.heading}
                activeOutlineColor={styles.colors.heading}
                style={{ backgroundColor: styles.colors.contrast, marginTop: 16, fontFamily: styles.fonts.regular, borderRadius: 8 }}
                onPointerEnter={undefined} 
                onPointerEnterCapture={undefined} 
                onPointerLeave={undefined} 
                onPointerLeaveCapture={undefined} 
                onPointerMove={undefined} 
                onPointerMoveCapture={undefined} 
                onPointerCancel={undefined} 
                onPointerCancelCapture={undefined} 
                onPointerDown={undefined} 
                onPointerDownCapture={undefined} 
                onPointerUp={undefined} 
                onPointerUpCapture={undefined} 
                cursorColor={undefined}
            />
        </Wrapper>
    )
}