import React from 'react';






class Producto extends React.Component{
    

    render(){
      return(
                        <article className="col-6 col-md-4 col-lg-3 mb-3 mb-lg-1 ">
                            <div className="card">
                            <img className="card-img-top h-100 img-thumbnail" src={this.props.pic} alt="pictur"></img>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.nombre}</h5>
                                <p className="card-text">{this.props.precio}</p>
                                <a href="" className="btn btn-primary">Agregar</a>
                            </div>
                            </div>
                        </article>
      );
    }
  }

  export default Producto;





/* <article className='producto'>
        <p>{this.props.pic}</p>
          <p>{this.props.nombre}</p>
          <p>${this.props.precio}</p>
          <div >
            <button onClick={this.comprar} className="comprar">Comprar</button>
            <button onClick={this.mostrar} className="mostrar">Mostrar</button>
          </div>
        </article> */
























/* class Productos extends React.Component{

    state={
              stockProductos: data 
            };

           
                 
            
    render(){
         
        const producto = {
            nombre: this.refs.nombre.value,
            precio: parseInt(this.refs.precio.value, 10),
            pic: this.refs.nombre.value
          } 
        var array = this.state.stockProductos.map(function(producto, i){
            return(
                <Productos key={i} nombre={producto.nombre} precio={producto.precio} pic={producto.pic}/>
            )
        })
        return(
         <section className=" py-3">
                <div className="container">
                    <div class="row text-md-center p-3">
                        <article className="col-6 col-md-4 col-lg-3 mb-3 mb-lg-0">
                            <div className="card">
                            <img className="card-img-top h-100 img-thumbnail" src={pic} alt="pictur"></img>
                            <div className="card-body">
                                <h5 className="card-title">{nombre}</h5>
                                <p className="card-text">${precio}</p>
                                <a href="" className="btn btn-primary">Agregar</a>
                            </div>
                            </div>
                        </article>
                    </div>
                </div>
         </section>
        )
    }
} */

