import React, { useState } from 'react';
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './SectionLogin.css';
import { mysql } from '../../data/mysql';
import Box from '../atoms/Box';

function SectionLogin() {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [costo, setCosto] = useState('');
    const [productosString, setProductosString] = useState('');

    const handleButtonClick = () => {
        const producto = {
            nombre: nombre,
            cantidad: cantidad,
            costo: costo
        };        
        mysql.data.push(producto);
        alert('Operación Exitósa');
    };

    const handleShowClick = () => {
        let pilaAux = [];
        for (let i = 0; i < mysql.data.length; i++) {
            pilaAux.push(`Producto ${i + 1}: Nombre: ${mysql.data[i].nombre}, Cantidad: ${mysql.data[i].cantidad}, Costo: ${mysql.data[i].costo} \n`);
        }
        setProductosString(pilaAux);
    };

    return (
        <div id="login_section">
            <Field 
                type="text" 
                placeholder="E.j Café" 
                text="Nombre del Producto"
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
            />
            <Field 
                type="text" 
                placeholder="Ej. 10" 
                text="Cantidad del producto"
                value={cantidad} 
                onChange={(e) => setCantidad(e.target.value)} 
            />  
            <Field 
                type="text" 
                placeholder="Ej. $50" 
                text="Costo del producto"
                value={costo} 
                onChange={(e) => setCosto(e.target.value)} 
            />    
            <Button onClick={handleButtonClick} text="Guardar Producto" />
            <Button onClick={handleShowClick} text="Ver Productos" />
            <Box val={productosString} />
        </div> 
    );
}

export default SectionLogin;
