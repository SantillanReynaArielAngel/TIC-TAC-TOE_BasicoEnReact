import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*Notas:
Square=cuadrado
Board=Tabla
status=estado
Game=Juego

LOS COMPOENTES (COMPONENTE DE CLASE O TIPO DE COMPONENET DE REACT) : Cuadrado, Tabla y Juego

*/



class Cuadrado extends React.Component {
    render() {
        return (
            <button className="cuadrado">
                {/*Todo*/}
            </button>
        );
    }
}

class Tabla extends React.Component {
    hacerCuadrado(i){
        return <Cuadrado/>;    
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