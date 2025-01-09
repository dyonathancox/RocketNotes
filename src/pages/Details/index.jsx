import { Container, Links, Content } from './styles.js'


import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tags } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'

export function Details (){
  

  return(
    <Container>
    
    <Header />

    <main>
      <Content>
       <ButtonText title="Excluir nota" />

       <h1>Introdução ao React</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus laboriosam harum sapiente molestias aliquid facere quasi fugiat officiis voluptatibus magni, laudantium praesentium reprehenderit sint pariatur? Aspernatur veritatis doloribus fugit ab.</p>

        <Section title="Links úteis" >
          <Links>
            <li><a href="https://github.com/dyonathancox">Github</a></li>

          </Links>
        </Section>

        <Section title="Marcadores" >
        <Tags title="express"></Tags>
        <Tags title="nodejs"></Tags>

        </Section>

        <Button title="Voltar" />
      </Content>
    </main>
    
    </Container>
  )
}