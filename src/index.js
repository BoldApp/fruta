import React from 'react';     //React esta dentro de todas  las dependencias en node_modules
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import Login from './Login'
import Nav from './Nav'
import Producto from './Producto';
import Footer from './Footer';
import ListaProductos from './ListaProductos';




class Pagina extends React.Component{
    render(){
        return(
            <main>
                <Header/>
                <Login/>
                <Nav/>
                <ListaProductos/>
                <Producto/>
                <Footer />
                
            </main>
        )
    }
}



ReactDOM.render(<Pagina />, document.getElementById('root'));
