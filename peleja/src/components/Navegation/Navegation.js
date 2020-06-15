import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


// import { Container } from './styles';

function principal() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">PELEJA</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/projeto-peleja/pessoa/cadastro">Cadastre-se</Nav.Link>
        
        <NavDropdown title="Serviços" id="basic-nav-dropdown">
          <NavDropdown.Item href="/projeto-peleja/registro/ocorrencia">Nova Ocorrencia</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Denunciar</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Casos resolvidos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Digite sua busca..." className="mr-sm-2" />
        <Button variant="outline-success">Pesquisar</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default principal;