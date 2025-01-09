import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({ title, loading = false, ...rest }){

    return(
    <Container 
    type="button"
    disabled={loading}
    {...rest} // pega o resto das propriedades da qual não foi explicitamente informada igual o title ou o  loading
    >

        {loading ?'Carregando...' : title}
    </Container>
    )
}