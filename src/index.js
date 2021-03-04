import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*NOTAS:
Square=cuadrado
Board=Tabla
status=estado
Game=Juego

-LOS COMPOENTES (COMPONENTE DE CLASE O TIPO DE COMPONENET DE REACT) son: Cuadrado, Tabla y Juego
-Pasando props es cómo la información fluye en apps de React, de padres a hijos.

-COMPEONTE DE FUNCION: son una forma más simple de escribir 
componentes que solo contienen un método render y no tiene estado propio. 
En lugar de definir una clase que extiende React.Component, 
podemos escribir una función que toma props como parámetros
y retorna lo que se debe renderizar. Componentes de función 
son menos tediosos de escribir que clases, y muchos componentes 
pueden ser expresados de esta manera.

*/


//COMPOENENTE DE FUNCION:
function Cuadrado(props){
    return(
        <button className="cuadrado" onClick={props.onClick}>
            {props.value}
        </button>
    );
}


//Tabla es un compoenente padre
class Tabla extends React.Component {   
    
    /*Añade un constructor al Board y establece el estado inicial de Board
        para contener un arreglo con 9 valores null. Estos 9 
        nulls corresponden a los 9 cuadrados:*/
    constructor(props){
        super(props);
        this.state={
             cuadrados: Array(9).fill(null),
             xIsNext: true,   //Una variable boleana para determinar quien es el siguiente
        };
    }

    handleClick(i){
        const cuadrados=this.state.cuadrados.slice();
        if(calcularGanador(cuadrados)||cuadrados[i]){
            return;
        }
        cuadrados[i]= this.state.xIsNext ? 'X' : 'O';
        this.setState({
            cuadrados: cuadrados,
            xIsNext: !this.state.xIsNext, //IsNext (un booleano) será invertido para determinar qué jugador sigue y el estado del juego será guardado. Con este cambio, “X”s y “O”s pueden tomar turnos.
        });
    }

    hacerCuadrado(i){
        return (
            <Cuadrado value={this.state.cuadrados[i]} //Pasando valores por props al componente Cuadrado
                onClick={()=>this.handleClick(i)}
            /> 
        );    
    }

    render(){
        const ganador = calcularGanador(this.state.cuadrados);
        let estado;
        if(ganador){
            estado = 'Ganador: '+ganador;
        }else{
            estado ='Siguiente jugador: ' + (this.state.xIsNext ? 'X' : 'O');
        }
         
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

// FUNCION PARA CALCULAR AL GANADOR, EL ARRAY LINEAS CONTIENEN LAS 8 POSIBILIDADES DE FORMAR UNA LINEA
function calcularGanador(cuadrados){
    const lineas=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i=0; i<lineas.length; i++){
        const [a,b,c] = lineas[i];
        if(cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]){
            return cuadrados[a];
        }
    }
    return null;
}