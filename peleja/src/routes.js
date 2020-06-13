import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import TelaInicial from './telas/telaInicial/telaInicial'
import CadastroUsuario from './telas/cadastro/cadastro'
import CadastroOcorrencia from './telas/cadastroOcorrencia/cadastroOcorrencia'


const Routes = () => (
    <BrowserRouter>
        <Switch>       
            <Route exact path='/' component={TelaInicial} />
            <Route exact path='/projeto-peleja/pessoa/cadastro' component={CadastroUsuario} />
            <Route exact path='/projeto-peleja/registro/ocorrencia' component={CadastroOcorrencia}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;