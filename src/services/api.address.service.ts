import { api } from "./api.service";
import { AddressBackendProps } from "../utils/interfaces.backend";

export const addNewAddress = async(address: AddressBackendProps, idUser: string) => {
    try {
        const { data } = await api.post(`cliente/endereco/add/${idUser}`, address) // { ...address }
        return 'Endereço cadastrado com succeso.'
    } catch (error) {
        console.log(error)
        return 'Erro ao cadastrar um novo endereço.'
    }
}

export const updateAddress = async(address: AddressBackendProps, id: string) => {
    try {
        const { data } = await api.put(`cliente/endereco/edit/${id}`, address)
        return 'Endereço atualizado com succeso.'
    } catch (error) {
        console.log(error)
        return 'Erro ao atualizar o endereço.'
    }
}

/*axios.put('http://192.168.0.106:8080/cliente/endereco/2', {
    descricao,
    logradouro,
    bairro,
    numero,
    cidade,
    estado,
    cep,
    principal: false
})
.then((resp) => {
    console.log(resp.status)
    Alert.alert('Endereço', 'Endereço cadastrado com sucesso!', [], {
        cancelable: true,
        onDismiss: () => navigation.goBack()
    })
})
.catch((error) => console.log(error.message))*/