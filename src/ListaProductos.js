
import React from 'react';
import Producto from './Producto';
import data from './data.json';
import './style.css';


  class ListaProductos extends React.Component{

    state={stockProductos: data};
  
  
  
  render() {
    
    var productos = this.state.stockProductos.map(function(producto, i){
      return (
        
        <Producto key={i} nombre={producto.nombre} precio={producto.precio}
                  pic={producto.pic}
                  />
      )
    })
    
    return(
      
         <section className=" py-3" id="seccion">
              <div className="container">
              <div className="row text-md-center p-2">

                  {productos}

              </div>
              </div>
          </section>
          
        
        
    
    
    );
  }
}

export default ListaProductos;



























/* import React from 'react';
import Producto from './Producto';
import Total from './Total';

class ListaProductos extends React.Component{
    render(){
        return(
            <div>
                
                
                <Producto />
                <Total />
            </div>
        )
    }
}

export default ListaProductos; */