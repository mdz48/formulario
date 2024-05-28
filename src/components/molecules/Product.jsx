import React from 'react'
import Label from '../atoms/Label'

export default function Product(props) {
  return (
    <div>
        <Label val={props.name}></Label>
        <Label val={props.stock}></Label>
        <Label val={props.cost}></Label>
    </div>
  )
}
