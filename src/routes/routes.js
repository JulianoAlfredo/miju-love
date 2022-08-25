import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'


import MainPage from '../pages/mainPage/App'
import textoPage from '../pages/textPage/text'
import Fotos from '../pages/fotosPage/fotos'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path='/texto' exact component={textoPage} />
                <Route path='/fotos' exact component={Fotos} />
                
            </Switch>
        </BrowserRouter>
    )
}