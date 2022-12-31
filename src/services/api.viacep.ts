import axios from "axios";

function validateCEP(cep: string) {
    let auxCEP = cep.trim()
    const charsToRemove = ['-', ',', '.']

    charsToRemove.forEach((char) => {
        while (auxCEP.includes(char)) {
            auxCEP = auxCEP.replace(char,'')
        }
    })

    if(auxCEP.length != 8) {
        return false
    }

    return true
}

export async function consultarCEP(cep: string){
    if(validateCEP(cep)) {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        if (data.localidade != "Foz do Iguaçu") return false
        
        return data
    }
    return false
}