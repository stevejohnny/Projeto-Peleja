import React, {useState, useEffect} from 'react';
import { Form, Badge, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import {Container} from './style';


function TelaInicial() {

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()

  async function conexaoBackEnd(){
        
    try{
        let retorno = await fetch('http://localhost:8080/projeto-peleja/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
              "email" : email,
              "senha" : senha
            })
        })
        let json = await retorno.json();
        return json
    }catch (error){
        console.error(error)
    }
}

    return (
      <Container>
        <div class="login">
          <Form>
            <h2><Badge color="info">Login</Badge></h2>
            <Row form>
              <Col>
                <FormGroup>
                  <Label for="idEmail">Email</Label>
                  <Input type="email" value={email} name="email" id="idEmail" placeholder="ex.email@gmail.com" onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Label for="idSenha">Senha</Label>
                  <Input type="password" value={senha} name="password" id="idSenha" onChange={e => setSenha(e.target.value)} />
                </FormGroup>
              </Col>
            </Row>
            <Button
             onClick={() => {
              conexaoBackEnd().then(resultado => localStorage.setItem('ConexaoBackEnd', JSON.stringify(resultado)))
          }}>Enviar</Button>
            <Badge href="#" color="light">Cadastre-se</Badge>
          </Form>
        </div>

        <div class="pesquisar">
          <Form>
            <FormGroup>
              <Col><h3><Badge color="info">Pesquisar</Badge></h3>
                <Label for="Idpesquisar"></Label>
                <Input
                  type="search"
                  name="pesquisar"
                  id="Idpesquisar"
                  placeholder="Buscar Ocorrência"
                />
              </Col>
            </FormGroup>
          </Form></div>
        
      </Container>
  
    );
  }
  
  export default TelaInicial;