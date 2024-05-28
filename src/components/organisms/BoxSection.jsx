import React, { useState } from 'react';
import { mysql } from '../../data/mysql';
import Box from '../molecules/Box';
import Button from '../atoms/Button';
import './BoxSection.css'

export default function ProductionSection() {
  const [productos, setProductos] = useState([]);

  const handleShowClick = () => {
    const productosComponentes = mysql.data.map((producto) => (
      <Box  name={producto.nombre} stock={producto.cantidad} cost={producto.costo} />
    ));
    setProductos(productosComponentes);
  };

  return (
    <div className="production-section">
      <Button onClick={handleShowClick} text="Ver Productos" className="button-margin" />
      {productos}
    </div>
  );
}