import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*Notas:
Square=cuadrado
Board=Tabla
status=estado
Game=Juego

LOS COMPOENTES (COMPONENTE DE CLASE O TIPO DE COMPONENET DE REACT) : Cuadrado, Tabla y Juego
Pasando props es cómo la información fluye en apps de React, de padres a hijos.

COMPEONTE DE FUNCION: son una forma más simple de escribir componentes que solo 
contienen un método render y no tiene estado propio. 
En lugar de definir una clase que extiende React.Component, 
podemos escribir una función que toma props como parámetros
 y retorna lo que se debe renderizar. Componentes de función 
 son menos tediosos de escribir que clases, y muchos 
 componentes pueden ser expresados de esta manera.
*/


//COMPOENENTE DE FUNCION:
function Cuadrado(props){
    return(
        <button className="cuadrado" onClick={props.onClick}>
            {props.value}
        </button>
    );
}


class Tabla extends React.Component {   //Tabla es un compoenente padre
    /*Añade un constructor al Board y establece el estado inicial de Board
         para contener un arreglo con 9 valores null. Estos 9 
        nulls corresponden a los 9 cuadrados:*/
    constructor(props){
        super(props);
        this.state={
             cuadrados: Array(9).fill(null),   
        };
    }

    handleClick(i){
        const cuadrados=this.state.cuadrados.slice();
        cuadrados[i]='X';
        this.setState({cuadrados: cuadrados});
    }

    hacerCuadrado(i){
        return (
            <Cuadrado value={this.state.cuadrados[i]} //Pasando valores por props al componente Cuadrado
                onClick={()=>this.handleClick(i)}
            /> 
        );    
    }

    render(){
        const estado ='Siguiente jugador: X';
        return(
            <div>
                <div className="estado">{estado}</div>
                <div className="tabla-fila">
                    {this.hacerCuadrado(0)}
                    {this.hacerCuadrado(1)}
                    {this.hacerCuadrado(2)}
                </div>
                <div className="tabla-fila">
                    {this.hacerCuadrado(3)}
                    {this.hacerCuadrado(4)}
                    {this.hacerCuadrado(5)}
                </div>
                <div className="tabla-fila">
                    {this.hacerCuadrado(6)}
                    {this.hacerCuadrado(7)}
                    {this.hacerCuadrado(8)}
                </div>
            </div>
        );  
    }

}


class Juego extends React.Component{
    render(){
        return(
            <div className="Juego">
                <div className="juego-tabla">
                    <Tabla/>
                </div>
                <div className="juego-informacion">
                    <div>{/* estado */}</div>
                    <ol>{/*Todo*/}</ol>
                </div>
            </div>
        );
    }
}

//======================================
ReactDOM.render(
    <Juego/>,
    document.getElementById('root')
);