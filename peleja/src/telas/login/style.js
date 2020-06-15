import styled from 'styled-components';
import {Form, Badge, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';

export const Container = styled.div`
         width: 100vw;
         height: 100vh;
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center
`;

export const FormStyle = styled(Form)`
         background: #496278;
         border: 1px solid #000;
         padding: 20px;
         width: 600px;
        
`;

export const BadgeCadastro = styled(Badge)`
text-align: right;
width: 200px;
border:1px solid #25692A;
border-radius:4px;

cursor:pointer;
margin-left: auto
font-family:Verdana;
font-weight:bold;
font-size:13px;
padding:6px 10px;
text-decoration:none;

        
`;


