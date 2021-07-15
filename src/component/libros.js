import React from 'react';
import Descripcion from './descripcion';
function Libros ({libro}) {
     
  
return( <>
        <span className="numero">#{libro.id} </span>
        <span className="titulo">{libro.nombre}</span>
        
        <Descripcion Texto = {libro.descripcion} />
        </>
        )
};
    
    

export default Libros;
