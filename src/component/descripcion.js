import React,{useState} from 'react';

function Descripcion ({Texto}) {
const[descrip,setDescrip] = useState("");
const[expandir,setExpandir] = useState("mostrar descripcion");
        const descripcion = (e)=>{
                if(e.target.name === "mostrar descripcion"){
                setDescrip(Texto);
                setExpandir("ocultar descripcion");
                }
                else{
                setDescrip("");
                setExpandir("mostrar descripcion");
                }
             }
  
return( <div className="descripcion">
        <p> {descrip}</p>
        <button className="myButton" name ={expandir} onClick={descripcion}>{expandir}</button>
        </div>
        )
};

export default Descripcion;