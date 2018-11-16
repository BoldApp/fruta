

import React from 'react'


class Login extends React.Component{
    render(){
        return(
            <form className="form-inline my-2 login" >
        
          <a href="/" className="navbar-brand">
              
               <strong>Grow</strong>Green
           </a>   
        
        
        <label className="sr-only" >Email</label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
               </div>
           <input type="text" className="form-control"  placeholder="Email"/>
           </div>
          
        <label className="sr-only" ></label>
        <input type="password" className="form-control mb-2 mr-sm-2"  placeholder="Contraseña"/>
      
        
      
        <div className="form-check mb-2 mr-sm-2">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label" >
            Recordarme
          </label>
        </div>
      
        <button type="submit" className="btn btn-primary mb-2">Entrar</button>
        <button type="submit" className="btn btn-outline-primary mb-2">Crear Cuenta</button>
      </form>
        )
    }
}

export default Login