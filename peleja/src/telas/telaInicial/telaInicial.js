import React, {useState, useEffect} from 'react';
import { Form, Badge, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import {Container} from './style';
import CadastroUsuario from '../cadastro/cadastro'


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
     
        
      </Container>
  
    );
  }
  
  export default TelaInicial;