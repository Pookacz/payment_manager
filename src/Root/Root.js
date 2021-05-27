import React from 'react';
import { Provider } from 'react-redux';
import Store from '../Store/index'
import './index.css'
import Page from '../Components/Page/Page';



class Root extends React.Component {

    render(){
        return(
            <Provider store={Store}>
                    <Page />
            </Provider>
        )
    }
}

export default Root;