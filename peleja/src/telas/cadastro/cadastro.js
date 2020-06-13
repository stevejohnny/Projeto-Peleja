import React, {useState, useEffect} from 'react';
import '../../App.css';
import { Form, Badge, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, FormStyle} from './style';

function CadastroUsuario() {

    const [email, setEmail] = useState()
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [cpf, setCpf] = useState()
    const [telefone, setTelefone] = useState()

    async function conexaoBackEnd(){
        
        try{
            let retorno = await fetch('http://localhost:8080/projeto-peleja/pessoa/cadastro', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "email": email,
                    "nome": nome,
                    "senha": senha,
                    "cpf": cpf,
                    "telefone" : telefone
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
            <FormStyle>
                <h2><Badge color="info">Cadastro</Badge></h2>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="IdEmail">Email</Label>
                            <Input type="email" value={email} name="email" id="IdEmail" placeholder=" " onChange={e => setEmail(e.target.value)}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="IdNome">Nome</Label>
                            <Input type="text" value={nome} name="nome" id="IdNome" placeholder=" " onChange={e => setNome(e.target.value)} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="CPF">CPF</Label>
                            <Input type="text" value={cpf} name="cpf" id="idcpf" onChange={e => setCpf(e.target.value)} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="IdTel">Telefone</Label>
                            <Input type="text" value={telefone} name="telefone" id="IdTel" onChange={e => setTelefone(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Idsenha">Senha</Label>
                            <Input type="password" value={senha} name="senha" id="Idsenha" placeholder="" onChange={e => setSenha(e.target.value)}/>
                        </FormGroup>
                        <Button
                        onClick={() => {
                            conexaoBackEnd().then(resultado => localStorage.setItem('ConexaoBackEnd', JSON.stringify(resultado)))
                        }}>Cadastrar</Button>
                    </Col>
                </Row>
            </FormStyle>
        </Container>
    )
}

export default CadastroUsuario;