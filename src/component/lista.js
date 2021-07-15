import React,{useState,useEffect} from 'react';
import Libros from './libros';
import axios from 'axios';

function ListaLibros () {
    const[lista,setLista] = useState([]); 
   
    useEffect(()=>{
            Api();
                },[]);



    const Api = async ()=>{
        try {
        const resp = await axios.get("http://localhost:5000/libro/")
        if(resp.status === 200){
        const {data} = resp;
        setLista(data.respuesta);
        }
        else{
            throw new Error(resp.status);
        }
            
        } catch (e) {
            console.error("error:" + e);
        }
        
    
    }
    
    return( <div className="grid">
            {lista.map((item) => {
                    return( <div key={item.id} className="box">
                        <Libros  libro={item} />
                        </div>
                          )
                                }
                    )
            }
            
            </div>
            )
    };
    
    

export default ListaLibros;