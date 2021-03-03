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

*/



class Cuadrado extends React.Component { //Cuadrado es un compoenente hijo
    //Se definira el contructor con el estado del componente
    // constructor(props){
    //     super(props);
    //     this.state={
    //         value:null,
    //     };
    //     /*
    //     Nota
    //     Todas las clases de componentes de React que tienen un constructor deben 
    //     empezar con una llamada a super(props). */
    // }
    
    render() {
        return (

            // Funcion Normal:
                // <button className="cuadrado" onClick={function(){
                //         alert('click');
                // }}>

            // Usando la funcion Flecha para alert: onClick={()=>this.setState({value: 'X'})}
            <button className="cuadrado" 
                onClick={()=>this.props.onClick()}>
                
                {/* recibiendo el valor por props: */}
                {this.props.value}   
            </button>
        );
    }
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