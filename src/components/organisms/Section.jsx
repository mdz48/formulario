import React, { useState } from 'react';
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './Section.css';
import { mysql } from '../../data/mysql';

function Section() {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [costo, setCosto] = useState('');

    const producto = {
        nombre,
        cantidad,
        costo
    };


    const handleButtonClick = () => {
        mysql.data.push(producto);
        console.log(mysql.data);

        alert('Operación Exitósa');
    };

    return (
        <div id="product_section">
            <Field type="text" placeholder="E.j Café" text="Nombre del Producto" value={nombre} onChange={(event) => setNombre(event.target.value)} />
            <Field type="text" placeholder="Ej. 10" text="Cantidad del producto" value={cantidad} onChange={(event) => setCantidad(event.target.value)} />  
            <Field type="text" placeholder="Ej. $50" text="Costo de producción del producto" value={costo} onChange={(event) => setCosto(event.target.value)} />    
            <Button onClick={handleButtonClick} text="Guardar Producto" />
        </div> 
    );
}

export default Section;