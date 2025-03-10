import { Container, Profile, Logout} from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/dyonathancox.png" alt="Foto do usuário" />
            <div>
                <span>Bem vindo</span>
                <strong>Dyonathan Cox</strong>
            </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>

            
        </Container>
    )
}