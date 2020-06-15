import React, {useState, useEffect} from 'react';
import {Badge, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '../../App.css';
import {Container, FormStyle, BadgeCadastro, ButtonLogin} from './style';
//import CadastroUsuario from '../cadastro/cadastro'


function Login() {

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
          <FormStyle>
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
            <ButtonLogin>
            <Button 
             onClick={() => {
              conexaoBackEnd().then(resultado => localStorage.setItem('ConexaoBackEnd', JSON.stringify(resultado))) }}>Enviar
            </Button>          
            <BadgeCadastro href="/projeto-peleja/pessoa/cadastro" >Cadastre-se</BadgeCadastro>          
            </ButtonLogin>                             
          </FormStyle>
        </div>       
      </Container>  
    );
  }
  
  export default Login;