import { useState } from 'react'
import { TextInput } from "react-native-paper";
import { SimpleButton } from '../../components/Button';
import { GoBackButton } from "../../components/GoBackButton";
import { Wrapper } from "../../components/Wrapper";
import { Box, ColumnJustifyBetween, Highlight, RowJustifyBetween, styles } from "../../globals/styles.global";

export function EditAddress() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    return (
        <Wrapper>
            <ColumnJustifyBetween>
                <Box>
                    <RowJustifyBetween>
                        <GoBackButton />
                        <Highlight style={{ fontSize: 16 }}>EDITAR INFORMAÇÕES PESSOAIS</Highlight>
                        <GoBackButton disabled style={{ opacity: 0 }} />
                    </RowJustifyBetween>
                    <TextInput 
                        label="C.E.P"
                        mode="outlined"
                        keyboardType='numeric'
                        value={nome}
                        onChangeText={text => setNome(text)}
                        // left={<User color={styles.colors.green} size={15} />}
                        outlineColor={styles.colors.heading}
                        activeOutlineColor={styles.colors.heading}
                        style={{ backgroundColor: styles.colors.background, marginTop: 16, fontFamily: styles.fonts.regular, borderRadius: 8 }}
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
                        label="C.P.F"
                        mode="outlined"
                        value={cpf}
                        onChangeText={text => setCpf(text)}
                        // left={<User color={styles.colors.green} size={15} />}
                        outlineColor={styles.colors.heading}
                        activeOutlineColor={styles.colors.heading}
                        style={{ backgroundColor: styles.colors.background, marginTop: 16, fontFamily: styles.fonts.regular, borderRadius: 8 }}
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
                        label="Telefone"
                        mode="outlined"
                        value={telefone}
                        onChangeText={text => setTelefone(text)}
                        // left={<User color={styles.colors.green} size={15} />}
                        outlineColor={styles.colors.heading}
                        activeOutlineColor={styles.colors.heading}
                        style={{ backgroundColor: styles.colors.background, marginTop: 16, fontFamily: styles.fonts.regular, borderRadius: 8 }}
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
                </Box>

                <SimpleButton 
                    title='Atualizar'
                    styles={{ backgroundColor: styles.colors.green }}
                    textStyles={{ fontSize: 18 }}
                    activeOpacity={0.8}
                />
            </ColumnJustifyBetween>
        </Wrapper>
    )
}