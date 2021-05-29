import React from 'react';
import { Provider } from 'react-redux';
import Store from '../Store/index'
import './index.css'
import Page from '../Components/Page/Page';
import Nav from '../Components/Nav/Nav'; 
import Form from '../Components/Form/Form'; 



class Root extends React.Component {

    render(){
        return(
            <Provider store={Store}>

                    <Nav /> 
                    <Page />
                    <Form />

            </Provider>
        )
    }
}

export default Root;