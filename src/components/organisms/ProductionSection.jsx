import React, { useState } from 'react';
import { mysql } from '../../data/mysql';
import Box from '../atoms/Box';
import Button from '../atoms/Button';

export default function ProductionSection() {
  const [productos, setProductos] = useState([]);

  const handleShowClick = () => {
    const productosComponentes = mysql.data.map((producto, index) => (
      <Box key={index} name={producto.nombre} stock={producto.cantidad} cost={producto.costo} />
    ));

    setProductos(productosComponentes);
  };

  return (
    <div>
      <Button onClick={handleShowClick} text="Ver Productos" />
      <div id='product_section'>
      {productos}
      </div>
    </div>
  );
}