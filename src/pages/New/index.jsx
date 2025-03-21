import { Container, Form } from "./styles";
import { Header } from "../../components/Header"
import {Input} from "../../components/Input"
import { Textarea } from "../../components/Textarea/Textarea";
import { NoteItem } from "../../components/NoteItem/NoteItem"; 
import { Section } from "../../components/Section"; 
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'

export function New() {
    return (
      <Container>
        <Header />
  
        <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
              <Link to="/">voltar</Link>
            </header>
  
            <Input placeholder="Título" />
            <Textarea placeholder="Observações:" />

            <Section title="Links úteis" >
              <NoteItem value="github.com/dyonathancox" />
              <NoteItem isNew placeholder="Novo Link" />
            </Section>

            <Section title="Marcadores" >
              <div className="tags">
                <NoteItem value="React" />
                <NoteItem  isNew placeholder="Nova tag" />
              </div>
            </Section>

            <Button title="Salvar" />

          </Form>
        </main>
      </Container>
    )
  }