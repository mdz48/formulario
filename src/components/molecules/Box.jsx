import React from 'react';
import styled from 'styled-components';
import Label from '../atoms/Label';

const BoxStyled = styled.div`
  width: 80%;
  border: 1px gray solid;
  border-radius: 5px;
  font-size: 20px;
  color: #0308a3;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export default function Box(props) {
  return (
    <BoxStyled>
      <Label text={"Nombre del producto: " + props.name + '\n'} />
      <Label text={"Stock: " + props.stock + '\n'}/>
      <Label text={"Costo: " + props.cost} />
    </BoxStyled>
  );
}