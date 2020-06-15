import React, {useState, useEffect} from 'react';
import '../../App.css';
import {Badge, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, FormStyle} from './style';



function CadastroOcorrencia() {
    

    const [assunto, setAssunto] = useState()
    const [email, setEmail] = useState()
    const [rua, setRua] = useState()
    const [numero, setNumero] = useState()
    const [bairro, setBairro] = useState()
    const [complemento, setComplemento] = useState()
    const [cep, setCep] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()
    const [descricao, setDescricao] = useState()

    async function conexaoBackEnd(){
        
        try{
            let retorno = await fetch('http://localhost:8080/projeto-peleja/registro/ocorrencia', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "assunto" : assunto,
                    "email" : email,
                    "logradouro" : rua,
                    "numero" : numero,
                    "complemento" : complemento,
                    "bairro" : bairro,
                    "estado" : estado,
                    "cep" : cep,
                    "descricao" : descricao
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
                <h2><Badge color="info">Criar Ocorrência</Badge></h2>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="Idassunto">Assunto</Label>
                            <Input type="text" value={assunto} name="assunto" id="Idassunto" onChange={e => setAssunto(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" value={email} name="email" id="Idemail" onChange={e => setEmail(e.target.value)} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="rua">Rua</Label>
                            <Input type="text" value={rua} name="rua" id="Idrua" onChange={e => setRua(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="numero">Numero</Label>
                            <Input type="text" value={numero} name="numero" id="Idnumero" onChange={e => setNumero(e.target.value)} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="bairro">Bairro</Label>
                            <Input type="text" value={bairro} name="bairro" id="Idbairro" onChange={e => setBairro(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="complemento">Complemento</Label>
                            <Input type="text" value={complemento} name="complemento" id="Idcomplemento" onChange={e => setComplemento(e.target.value)} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="cep">CEP</Label>
                            <Input type="text" value={cep} name="cep" id="Idcep" onChange={e => setCep(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="cidade">Cidade</Label>
                            <Input type="text" value={cidade} name="cidade" id="Idcidade" onChange={e => setCidade(e.target.value)} />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="estado">Estado</Label>
                            <Input type="text" value={estado} name="estado" id="Idestado" onChange={e => setEstado(e.target.value)} />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup row>
                    <Label for="descrição"> Descrição</Label>
                    <Col sm={10}>
                        <Input type="textarea" value={descricao} name="descrição" id="Iddescrição" onChange={e => setDescricao(e.target.value)} />
                    </Col>
                </FormGroup>
                <Button
                 onClick={() => {
                    conexaoBackEnd().then(resultado => localStorage.setItem('ConexaoBackEnd', JSON.stringify(resultado)))
                }}>Criar</Button>
            </FormStyle>

        </Container>
    )
}

export default CadastroOcorrencia;